var statusPara = new Array(
1,
1,
20,
20000,
292956,
"1.0.1 Build 20151020 Rel.0001 ",
"Solarzoom v1 00000000",
8,
0,0 );

var lanPara = new Array(
"94-0C-6D-1C-3E-DA", "192.168.1.1", "255.255.255.0", 
0,0 );

$(document).ready(function(){
	$("#fversion").text(statusPara[5]);
	$("#hversion").text(statusPara[6]);
	$("#lanMac").text(lanPara[0]);
	$("#lanIP").text(lanPara[1]);
	$("#lanMask").text(lanPara[2]);
});
