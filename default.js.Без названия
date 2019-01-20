function Help(section) {
	
		$("#dleuserpopup").remove();
		$("body").append("<div id='dleuserpopup' title='Help' style='display:none'></div>");
	
		$('#dleuserpopup').dialog({
			autoOpen: true,
			width: 560,
			height: 500,
			buttons: {
				"OK": function() { 
					$(this).dialog("close");
					$("#dleuserpopup").remove();							
				}
			},
			open: function(event, ui) { 
				$("#dleuserpopup").html("<iframe width='100%' height='400' src='?mod=help&section=" + section + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>");
			},
			beforeClose: function(event, ui) { 
				$("#dleuserpopup").html("");
			}
		});


		return false;


}
function ShowOrHide(d1, d2) {
	if (d2) { 

		DoDiv(d1); 
		DoDiv(d2); 

	} else {

		var item = $("#" + d1);
		if (item.is(":hidden")) { 
			item.show('blind',{},1000);
		} else {
			item.hide('blind',{},1000);
		}

	}
}
function DoDiv(id) {

	if ( $("#" + id).is(":hidden") ) {

		$("#" + id).show(1);

	} else {

		$("#" + id).hide(1);
	}
}

function ShowLoading( message )
{

	if ( message )
	{
		$("#loading-layer").html(message);
	}
		
	var setX = ( $(window).width()  - $("#loading-layer").width()  ) / 2;
	var setY = ( $(window).height() - $("#loading-layer").height() ) / 2;
			
	$("#loading-layer").css( {
		left : setX + "px",
		top : setY + "px",
		position : 'fixed',
		zIndex : '99'
	});
		
	$("#loading-layer").fadeTo('slow', 1.0);

};

function HideLoading( message )
{
	$("#loading-layer").fadeOut('slow');
};

function DLEalert(message, title){

	$("#dlepopup").remove();

	$("body").append("<div id='dlepopup' title='" + title + "' style='display:none'><br />"+ message +"</div>");

	$('#dlepopup').dialog({
		autoOpen: true,
		width: 500,
		buttons: {
			"Ok": function() { 
				$(this).dialog("close");
				$("#dlepopup").remove();							
			}
		}
	});
};

function DLEconfirm(message, title, callback){

	var b = {};

	b[dle_act_lang[1]] = function() { 
					$(this).dialog("close");
					$("#dlepopup").remove();						
			    };

	b[dle_act_lang[0]] = function() { 
					$(this).dialog("close");
					$("#dlepopup").remove();
					if( callback ) callback();					
				};

	$("#dlepopup").remove();

	$("body").append("<div id='dlepopup' title='" + title + "' style='display:none'><br />"+ message +"</div>");

	$('#dlepopup').dialog({
		autoOpen: true,
		width: 500,
		buttons: b
	});
};

function DLEprompt(message, d, title, callback, allowempty){

	var b = {};

	b[dle_act_lang[3]] = function() { 
					$(this).dialog("close");						
			    };

	b[dle_act_lang[2]] = function() { 
					if ( !allowempty && $("#dle-promt-text").val().length < 1) {
						 $("#dle-promt-text").addClass('ui-state-error');
					} else {
						var response = $("#dle-promt-text").val()
						$(this).dialog("close");
						$("#dlepopup").remove();
						if( callback ) callback( response );	
					}				
				};

	$("#dlepopup").remove();

	$("body").append("<div id='dlepopup' title='" + title + "' style='display:none'><br />"+ message +"<br /><br /><input type='text' name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value=\"" + d + "\"/></div>");

	$('#dlepopup').dialog({
		autoOpen: true,
		width: 500,
		buttons: b
	});

	if (d.length > 0) {
		$("#dle-promt-text").select().focus();
	} else {
		$("#dle-promt-text").focus();
	}
};

function RunAjaxJS(insertelement, data){
	var milisec = new Date;
    var jsfound = false;
    milisec = milisec.getTime();

    var js_reg = /<script.*?>(.|[\r\n])*?<\/script>/ig;

    var js_str = js_reg.exec(data);
    if (js_str != null) {

		var js_arr = new Array(js_str.shift());
        var jsfound = true;
        
        while(js_str) {
           js_str = js_reg.exec(data);
           if (js_str != null) js_arr.push(js_str.shift());
        }

        for(var i=0; i<js_arr.length;i++) {
           data = data.replace(js_arr[i],'<span id="'+milisec+i+'" style="display:none;"></span>');
        }
	}
    
	$("#" + insertelement).html(data);

    if (jsfound) {

       var js_content_reg = /<script.*?>((.|[\r\n])*?)<\/script>/ig;

       for (i = 0; i < js_arr.length; i++) {
           var mark_node = document.getElementById(milisec+''+i);
           var mark_parent_node = mark_node.parentNode;
           mark_parent_node.removeChild(mark_node);
                                
           js_content_reg.lastIndex = 0;
           var js_content = js_content_reg.exec(js_arr[i]);
           var script_node = mark_parent_node.appendChild(document.createElement('script'));
		   script_node.text = js_content[1];  

           var script_params_str = js_arr[i].substring(js_arr[i].indexOf(' ',0),js_arr[i].indexOf('>',0));
           var params_arr = script_params_str.split(' ');

           if (params_arr.length > 1) {
              for (var j=0;j< params_arr.length; j++ ) {
                                        
                  if(params_arr[j].length > 0){
                       var param_arr = params_arr[j].split('=');
                       param_arr[1] = param_arr[1].substr(1,(param_arr[1].length-2));
                       script_node.setAttribute(param_arr[0],param_arr[1]);
                  }

               }
           }

       }
    }
};

function media_upload ( area, author, news_id, wysiwyg){

		var rndval = new Date().getTime(); 
		var shadow = 'none';

		$('#mediaupload').remove();
		$('body').append("<div id='mediaupload' title='"+dle_act_lang[4]+"' style='display:none'></div>");
	
		$('#mediaupload').dialog({
			autoOpen: true,
			width: 680,
			height: 600,
			dialogClass: "modalfixed",
			open: function(event, ui) { 
				$("#mediaupload").html("<iframe name='mediauploadframe' id='mediauploadframe' width='100%' height='550' src='engine/ajax/upload.php?area=" + area + "&author=" + author + "&news_id=" + news_id + "&wysiwyg=" + wysiwyg + "&rndval=" + rndval + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>");
				$( ".ui-dialog" ).draggable( "option", "containment", "" );
			},
			dragStart: function(event, ui) {
				shadow = $(".modalfixed").css('box-shadow');
				$(".modalfixed").fadeTo(0, 0.6).css('box-shadow', 'none');
				$("#mediaupload").hide();
			},
			dragStop: function(event, ui) {
				$(".modalfixed").fadeTo(0, 1).css('box-shadow', shadow);
				$("#mediaupload").show();
			},
			beforeClose: function(event, ui) { 
				$("#mediaupload").html("");
			}
		});

		if ($(window).width() > 830 && $(window).height() > 530 ) {
			$('.modalfixed.ui-dialog').css({position:"fixed"});
			$('#mediaupload').dialog( "option", "position", ['0','0'] );
		}
		return false;

};

function dropdownmenu(obj, e, menucontents, menuwidth){

	if (window.event) event.cancelBubble=true;
	else if (e.stopPropagation) e.stopPropagation();

	if ($('#dropmenudiv').is(':visible')) { $('#dropmenudiv').fadeOut('fast'); return false; }

	$('#dropmenudiv').remove();

	$('body').append('<div id="dropmenudiv" style="display:none;position:absolute;z-index:100;width:165px;"></div>');

	$('#dropmenudiv').html(menucontents.join(""));

	if (menuwidth) $('#dropmenudiv').width(menuwidth);

	var windowx = $(document).width() - 15;
	var offset = $(obj).offset();

	if (windowx-offset.left < $('#dropmenudiv').width())
			offset.left = offset.left - ($('#dropmenudiv').width()-obj.offsetWidth);

	$('#dropmenudiv').css( {
		left : offset.left + "px",
		top : offset.top+obj.offsetHeight+"px"
	});

	$('#dropmenudiv').fadeTo('fast', 0.9);

	$('#dropmenudiv').mouseenter(function(){
	      clearhidemenu();
	    }).mouseleave(function(){
	      delayhidemenu();
	});


	return false;
};

function hidemenu(e){
	$("#dropmenudiv").fadeOut("fast");
};

function delayhidemenu(){
	delayhide=setTimeout("hidemenu()",1000);
};

function clearhidemenu(){

	if (typeof delayhide!="undefined")
		clearTimeout(delayhide);
};

document.onclick=hidemenu;

var horizontal_offset="9px" //horizontal offset of hint box from anchor link

/////No further editting needed

var vertical_offset="0" //horizontal offset of hint box from anchor link. No need to change.
var ie=document.all
var ns6=document.getElementById&&!document.all

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=(whichedge=="rightedge")? parseInt(horizontal_offset)*-1 : parseInt(vertical_offset)*-1
if (whichedge=="rightedge"){
var windowedge=ie && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-30 : window.pageXOffset+window.innerWidth-40
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure+obj.offsetWidth+parseInt(horizontal_offset)
}
else{
var windowedge=ie && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetHeight
}
return edgeoffset
}

function showhint(menucontents, obj, e, tipwidth){
if ((ie||ns6) && document.getElementById("hintbox")){
dropmenuobj=document.getElementById("hintbox")
dropmenuobj.innerHTML=menucontents
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (tipwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=tipwidth
}
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+obj.offsetWidth+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+"px"
dropmenuobj.style.visibility="visible"
obj.onmouseout=hidetip
}
}

function hidetip(e){
dropmenuobj.style.visibility="hidden"
dropmenuobj.style.left="-500px"
}

function createhintbox(){
var divblock=document.createElement("div")
divblock.setAttribute("id", "hintbox")
document.body.appendChild(divblock)
}

if (window.addEventListener)
window.addEventListener("load", createhintbox, false)
else if (window.attachEvent)
window.attachEvent("onload", createhintbox)
else if (document.getElementById)
window.onload=createhintbox