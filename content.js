console.log("Toucan Loaded");
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_toucan.jpg';
    images[i].width = 15;
    images[i].height = 15;
}

//console.log("here is img");
//console.log(images);
/*
for(var i = 0; i < images[i].length; i++){
    console.log(images[i]);
}
*/
// var link = document.createElement("link");
// link.href = chrome.extension.getURL("styles.css");
// link.type = "text/css";
// link.rel = "stylesheet";
// document.getElementsByTagName("head")[0].appendChild(link);

var palette = {
    headerColor:"#fe7702",
    subHeaderColor:"#2b4776",
    subHeaderColorLight:"#9ac503"
};


//console.log("here is bar");
//console.log(bar);
// alert(menuChoices);
for(menu of document.getElementsByClassName("darkNeutral"))
    menu.style.backgroundColor = palette.headerColor;

//console.log("entering");
//console.log(bar2[0].style);

// document.onload = function() {
//   for(foo of document.getElementsByClassName("mediumHighlight"))
//       foo.style.backgroundColor = palette.subHeaderColor;
//
//   for(bar of document.querySelectorAll(".displaytbl th")){
//       console.log(bar);
//       bar.style.backgroundColor = palette.subHeaderColor;
//   }
// };

var delayInMilliseconds = 3500;

setTimeout(function() { // all the elements that must be styled after the page loads
  for(foo of document.getElementsByClassName("mediumHighlight"))
      foo.style.backgroundColor = palette.subHeaderColor;

  for(bar of document.querySelectorAll(".displaytbl th")){
      console.log(bar);
      bar.style.backgroundColor = palette.subHeaderColorLight;
  }
}, delayInMilliseconds);


//x.y

//x["y"]
