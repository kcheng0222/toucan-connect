console.log("Toucan is ready.");

document.title = "Toucan Portal";

var images = document.getElementsByTagName('img');

var toucanImage = "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_toucan.jpg"

for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = toucanImage;
    images[i].width = 15;
    images[i].height = 15;
}

//Anonymous function waits for page to load, just a precautionary measure
(function(){
    var link = document.querySelector("link[real*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = 'http://icontoucan.com/favicon.ico' //Has to be .ico type
    document.getElementsByTagName("head")[0].appendChild(link)
})()

// NOTE: x.y is the same as x["y"]
