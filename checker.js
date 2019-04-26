var checker = {
    index: 0,
    domains: [],
    status: [],
    settings: {
        beforeFirst: 6000,
        timeout: 5000,
        betweenPing: 6000
    },
    timeouts: {
        ping: null,
        between: null
    },
    ping: function (index) {

        if (index >= checker.domains.length) {
            clearInterval(checker.timeouts.between);
            return;
        }

        if (checker.domains[index]['n'] < parseInt(this.getCookie('che_i'))) {
            return;
        }

        checker.timeouts.ping = setTimeout(function () {
            checker.status[index] = 2;
            checker.send({
                domain: checker.domains[index]['d'],
                index: checker.domains[index]['n'],
                status: 2
            });
        }, checker.settings.timeout);

        var img = new Image();
        img.onload = function () {
            checker.prepareSend(index, 1);
        };
        img.onerror = function () {
            checker.prepareSend(index, 3);
        };
        var currentTimestamp = new Date().getTime();
        img.src = 'https://' + checker.domains[index]['d'] + '/static/pixel.gif?' + currentTimestamp;
    },
    send: function (data) {

        var old = parseInt(this.getCookie('che_i')),
            r = parseInt(this.getCookie('che_r')),
            i = data.index;

        if (i < r || old < r) {
            checker.setCookie('che_i', r + 1);
        } else if (i >= r && old >= r && i >= old) {
            checker.setCookie('che_i', i + 1);
        } else {
            // old > current
        }

        old = null;
        r = null;
        i = null;

        this.ajaxPost(document.location.origin + '/redirect/stat/', data);
    },
    init: function () {
        checker.getGUID();
        this.ajaxGet(document.location.origin + '/redirect/stat/run/', {}, function (result) {

            result = JSON.parse(result);

            if (typeof result.domains !== 'undefined') {
                checker.domains = result.domains;
                setTimeout(function () {
                    checker.timeouts.between = setInterval(function () {
                        checker.ping(checker.index);
                        checker.index++;
                    }, checker.settings.betweenPing);
                }, checker.settings.beforeFirst);
            }
        });
    },
    getGUID: function () {

        var guid = this.getCookie('che_g');
        if (guid) {
            return guid;
        }
        guid = checker.generateGUID();
        checker.setCookie('che_g', guid);
        return guid;
    },
    generateGUID: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    },
    setCookie: function (key, value) {

        var expdate = new Date();
        this.fixCookieDate(expdate);
        expdate.setTime(expdate.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
        this.setCookieDeep(key, value, expdate);
    },
    setCookieDeep: function (name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    },
    getCookie: function (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) === arg)
                return this.getCookieVal(j);
            i = document.cookie.indexOf(" ", i) + 1;
            if (i === 0) break;
        }
        return null;
    },
    getCookieVal: function (offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr === -1)
            endstr = document.cookie.length;
        return unescape(document.cookie.substring(offset, endstr));
    },
    fixCookieDate: function (date) {
        var base = new Date(0);
        var skew = base.getTime();
        if (skew > 0) date.setTime(date.getTime() - skew);
    },
    prepareSend: function (index, status) {

        if (checker.status[index]) {
            return;
        }

        clearTimeout(checker.timeouts.ping);
        checker.status[index] = status;
        checker.send({
            domain: checker.domains[index]['d'],
            index: checker.domains[index]['n'],
            status: status
        });
    },
    ajaxGetInstance: function () {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    },
    ajaxSend: function (url, callback, method, data, async) {

        if (async === undefined) {
            async = true;
        }
        var x = this.ajaxGetInstance();
        x.open(method, url, async);
        x.onreadystatechange = function () {

            if (x.readyState === 4) {
                if (typeof callback === 'function') {
                    callback(x.responseText);
                }
            }
        };
        if (method === 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.setRequestHeader('x-requested-with', 'XMLHttpRequest');
        x.send(data);
    },
    ajaxGet: function (url, data, callback, async) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.ajaxSend(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
    },
    ajaxPost: function (url, data, callback, async) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.ajaxSend(url, callback, 'POST', query.join('&'), async)
    }
};

window.onload = function () {
    checker.init();
};
