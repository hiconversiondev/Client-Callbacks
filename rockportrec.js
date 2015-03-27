function hiconversion_callback(arg){
var here = arg.frame.document;
var wrap = here.getElementById("content");
var destination = [];
var item = null;
var header = here.getElementsByTagName("HEAD")[0];
if ( wrap != null ) {
  var div = wrap.getElementsByTagName("DIV");
  for ( var i = 0; i < div.length; i++ ) {
    if ( div[i].className != null && div[i].className.indexOf("home_rr newcarousel") > -1 ) {
	  item = div[i];
	} else if ( div[i].className != null && div[i].className.indexOf("row_container") > -1 && div[i].className.indexOf("fixed_width") > -1 ) {
	 
	  destination.push(div[i]);
	}
  }
  if ( destination.length > 0 && item != null ) {
  var newDiv = here.createElement("DIV");
  newDiv.className = "row_container fixed_width";
  newDiv.appendChild(item);
    item.style.width = "966px";
    destination[destination.length-1].parentNode.insertBefore(newDiv, destination[destination.length-1]);
  }
}

if(header != null){
 var styleSheet = here.createElement('style');
  var def = '.home_rr.newcarousel > span, .home_rr.newcarousel > div{padding-top: 30px; padding-bottom:30px;} ';
  styleSheet.setAttribute("type", "text/css");
  header.appendChild(styleSheet);
  if (styleSheet.styleSheet) {   
    styleSheet.styleSheet.cssText = def;
  } else {               
    var textNode = here.createTextNode(def);
    styleSheet.appendChild(textNode);
  }
 } 
  
  return { kind: 'ok' };
}
