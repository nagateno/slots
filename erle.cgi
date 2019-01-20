
function httplize(s){return ((/^\/\//).test(s) ? ((location.protocol == 'https:')?'https:':'http:') : '') + s} 
var ar_q = '';
if(ar_q.indexOf("ad_google")!=-1){
	var ar_e = ar_q.indexOf("100=");ar_q = ar_q.slice(ar_e+4); ar_q=ar_q.split(';');
	var CgiHref =unescape(ar_q[0])+httplize('//ad.adriver.ru/cgi-bin/click.cgi?sid=218607&ad=571347&bid=5293772&bt=49&bn=0&pz=0&nid=0&ref=http:%2f%2fnagateno.com%2fslots%2f&custom=&xpid=DI1mQTZKatbxu7B7QuihDkTP6goelSTsXVzZvmrK7mdfHM8exparbniExehVwMZD1FeL_-To43ex_tHbCJRXYVOlZ7aAldA');
}else{
	var CgiHref = httplize('//ad.adriver.ru/cgi-bin/click.cgi?sid=218607&ad=571347&bid=5293772&bt=49&bn=0&pz=0&nid=0&ref=http:%2f%2fnagateno.com%2fslots%2f&custom=&xpid=DI1mQTZKatbxu7B7QuihDkTP6goelSTsXVzZvmrK7mdfHM8exparbniExehVwMZD1FeL_-To43ex_tHbCJRXYVOlZ7aAldA');
}
var ar_bt=49;
var ar_siteid = 218607;
var Mirror = httplize('//servers2.adriver.ru');
var bid = 5293772;
var sliceid = 2032917;
var ar_adid = 571347;
var ar_pz=0;
var ar_sz='%2fslots%2f';
var ar_nid=0;
var ar_pass='';
var ar_bn=0;
var ar_geozoneid=38;
var Path = '/images/0005293/0005293772/';
var Comp0 = '0/script.js';
var Width = 240;
var Height = 400;
var date = 'Sun, 13 Jan 2019 00:05:52 GMT';
var Uid = 113018349060;
var Target = '_blank';
var Alt = '';
var CompPath = Mirror + Path + '0/';
var RndNum4NoCash = 316929625;
var ar_ntype = 0;
var ar_tns = 1;
var ar_rhost='ad.adriver.ru';
var ar_exposure_price = 0;
var ar_xpid = 'DI1mQTZKatbxu7B7QuihDkTP6goelSTsXVzZvmrK7mdfHM8exparbniExehVwMZD1FeL_-To43ex_tHbCJRXYVOlZ7aAldA';
if (typeof(ar_tansw) != 'undefined') clearInterval(ar_tansw);
var ar_script = '<script src="' + Mirror + Path + Comp0 + '?316929625" type="text/javascript" charset="windows-1251"><\/script>';
function loadScript(req){try {var head = parent.document.getElementsByTagName('head')[0],s = parent.document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'windows-1251');s.setAttribute('src', req.split('rnd').join(Math.round(Math.random()*9999999)));s.onreadystatechange = function(){if(/loaded|complete/.test(this.readyState)){head.removeChild(s);s.onload = null;}};s.onload = function(){head.removeChild(s);};head.insertBefore(s, head.firstChild);}catch(e){}}
if (typeof(ar_bnum)=='undefined') {var ar_bnum = 1;}
var ad_id = 'ad_ph_' + ar_bnum;
if (typeof(window.parent.AdriverViewability)=="undefined"){window.parent.AdriverViewability = true;loadScript("//content.adriver.ru/banners/0002186/0002186173/0/AV.js")}
window.parent.adriverviewability = window.parent.adriverviewability || {};
window.parent.adriverviewability.v = window.parent.adriverviewability.v || [];
window.parent.adriverviewability.v.push (function (){window.parent.adriverviewability[ad_id] = new window.parent.AdriverViewability('//ad.adriver.ru/cgi-bin/event.cgi?xpid=DI1mQTZKatbxu7B7QuihDkTP6goelSTsXVzZvmrK7mdfHM8exparbniExehVwMZD1FeL_-To43ex_tHbCJRXYVOlZ7aAldA&bid=5293772&type=',0,ad_id);});
document.write(ar_script);
	  

(function (o) {
	var i, w = o.c || window, d = document, y = 31;
	function oL(){
		if (!w.postMessage || !w.addEventListener) {return;}
		if (w.document.readyState == 'complete') {return sL();}
		w.addEventListener('load', sL, false);
	}
	function sL(){try{i.contentWindow.postMessage('pgLd', '*');}catch(e){}}
	function mI(u, oL){
		var i = d.createElement('iframe'); i.setAttribute('src', o.hl(u)); i.onload = oL; with(i.style){width = height = '10px'; position = 'absolute'; top = left = '-10000px'} d.body.appendChild(i);
		return i;
	}
	function st(u, oL){
		if (d.body){return i = mI(u, oL)}
		if(y--){setTimeout(function(){st(u, oL)}, 100)}
	}
	st(o.hl('//content.adriver.ru/banners/0002186/0002186173/0/l6.html?571347&0&0&0&316929625&1&113018349060&38&46.242.59.53&javascript&' + (o.all || 0)), oL);
}({
	hl: function httplize(s){return ((/^\/\//).test(s) ? ((location.protocol == 'https:')?'https:':'http:') : '') + s},
        
        c: parent,
        
	
	all: 1
	
}));
