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

// var link = document.createElement("link");
// link.href = chrome.extension.getURL("styles.css");
// link.type = "text/css";
// link.rel = "stylesheet";
// document.getElementsByTagName("head")[0].appendChild(link);

var palette = {
	headerColor:"#ff0000",
	subHeaderColor:"#ad6602"
};


var menuChoices = document.getElementsByClassName("darkNeutral");
var bar = document.getElementsByClassName("mediumHighlight");
var bar2 = document.querySelectorAll(".displaytbl th");

console.log("here is bar");
console.log(bar);
// alert(d);
for(var i = 0; i < d.length; i++){
	//console.log(d[i]);
    d[i].style.backgroundColor = palette.headerColor;
}

for(i = 0; i < bar.length; i++){
    bar[i].style.backgroundColor = palette.subHeaderColor;

}
console.log("entering");
//console.log(bar2[0].style);
for(i = 0; i < bar2.length; i++){
    console.log(bar2[i]);
    bar2[i].style.backgroundColor = palette.subHeaderColor;
}

//x.y

//x["y"]
