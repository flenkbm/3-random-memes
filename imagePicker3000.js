console.log(images);
i1 = images[Math.floor(Math.random() * images.length)];
i2 = images[Math.floor(Math.random() * images.length)];
i3 = images[Math.floor(Math.random() * images.length)];
img_cont = document.getElementsByClassName("img_cont");
console.log(img_cont);
//
img_cont[0].setAttribute("onclick", "ShowPopup("+i1.name+")");
img_cont[0].setAttribute("style", "width: "+i1.size+";");
img_cont[0].classList.add(i1.ratio);
img_cont[0].children[0].setAttribute("src", "img/"+i1.name+i1.type);
//
img_cont[1].setAttribute("onclick", "ShowPopup("+i2.name+")");
img_cont[1].setAttribute("style", "width: "+i2.size+";");
img_cont[1].classList.add(i2.ratio);
img_cont[1].children[0].setAttribute("src", "img/"+i2.name+i2.type);
//
img_cont[2].setAttribute("onclick", "ShowPopup("+i3.name+")");
img_cont[2].setAttribute("style", "width: "+i3.size+";");
img_cont[2].classList.add(i3.ratio);
img_cont[2].children[0].setAttribute("src", "img/"+i3.name+i3.type);
