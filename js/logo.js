var newWin;
var url="http://www.noovo.co";
if(window.parent == window)
	window.location.href=url;
function Click(){ window.event.returnValue=false;}
document.oncontextmenu=Click;
function NewW(){
  if(newWin) newWin.close();   
  newWin=window.open(url,"","scrollbars=yes,resizable=yes,toolbar=yes,status=yes,menubar=yes,scrollbar=yes,location=yes");	
  return true;
}
function ShowUrl(){
  status=url;
  return true;
}
function EraseUrl(){
	status="";
	return true;
}
function dopop(){
	if(document.forms[0].poped.value == 0){
		window.open("wizard/wizard1.htm","","width=550,height=280,top=130,left=130");
		document.forms[0].poped.value = 1;
	}
}