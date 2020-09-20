// Made By Prathamesh Thorat
alert("Sorry Guys for Some bugs 😥😥😥 \n\nHere You can't covert Numbers into ASCII ... \n\nI am trying to fix it ...");
alert("New Items Will Be Add sooner ................");
function convert()
{
var text = document.getElementById("text").value;
var text_box = document.getElementById("text_box");
if(text!=""){
var items = text.split(" ").join(" 32").split("a").join(" 97").split("b").join(" 98").split("c").join(" 99").split("d").join(" 100").split("e").join(" 101").split("f").join(" 102").split("g").join(" 103").split("h").join(" 104").split("i").join(" 105").split("j").join(" 106").split("k").join(" 107").split("l").join(" 108").split("m").join(" 109").split("n").join(" 110").split("o").join(" 111").split("p").join(" 112").split("q").join(" 113").split("r").join(" 114").split("s").join(" 115").split("t").join(" 116").split("u").join(" 117").split("v").join(" 118").split("w").join(" 119").split("x").join(" 120").split("y").join(" 121").split("z").join(" 122").split("A").join(" 65").split("B").join(" 66").split("C").join(" 67").split("D").join(" 68").split("E").join(" 69").split("F").join(" 70").split("G").join(" 71").split("H").join(" 72").split("I").join(" 73").split("J").join(" 74").split("K").join(" 75").split("L").join(" 76").split("M").join(" 77").split("N").join(" 78").split("O").join(" 79").split("P").join(" 80").split("Q").join(" 81").split("R").join(" 82").split("S").join(" 83").split("T").join(" 84").split("U").join(" 85").split("V").join(" 86").split("W").join(" 87").split("X").join(" 88").split("Y").join(" 89").split("Z").join(" 90");
text_box.innerHTML = items ;
}
else{
text_box.innerHTML = "Converted Text Here ..."
}
}