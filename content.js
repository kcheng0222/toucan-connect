var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_toucan.jpg';
    images[i].width = 15;
    images[i].height = 15;
}
/*
//console.log("here is img");
//console.log(images);
for(var i = 0; i < images[i].length; i++){
    console.log(images[i]);
}


var link = document.createElement("link");
link.href = chrome.extension.getURL("style.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
*/

var orange = "#fa8100"
var color2 = "#fa8100"

var menuChoices = document.getElementsByClassName("darkNeutral");
var bar = document.getElementsByClassName("mediumHighlight");
var bar2 = document.querySelectorAll(".displaytbl th");

//console.log("here is d");
//console.log(d);
//alert(d);
for(var i = 0; i < menuChoices.length; i++){
    //console.log(d[i]);
    //console.log("editing color");
    menuChoices[i].style.backgroundColor = orange;
}

for(i = 0; i < bar.length; i++){
    bar[i].style.backgroundColor = orange;
}
console.log("entering");
//console.log(bar2[0].style);
for(i = 0; i < bar2.length; i++){
    //console.log("bar2 " + bar2[i]);
    bar2[i].style.backgroundColor = "#F0000F";
}

//document.getElementsByClassName("mediumHighlight")[0].style.backgroundColor="#F00000";

//x.y 
//x["y"]
