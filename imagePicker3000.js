//somehow getting the json file
console.log(images);
i1 = images[Math.floor(Math.random() * images.length)];
i2 = images[Math.floor(Math.random() * images.length)];
i3 = images[Math.floor(Math.random() * images.length)];
boxes = document.getElementsByClassName("box");
console.log(boxes);
//
boxes[0].setAttribute("onclick", "HidePopup"+i1.name);
boxes[0].setAttribute("style", "width: "+i1.size+";");
boxes[0].classList.add(i1.ratio);
boxes[0].children[0].setAttribute("src", "img/"+i1.name);
//
boxes[1].setAttribute("onclick", "HidePopup"+i2.name);
boxes[1].setAttribute("style", "width: "+i2.size+";");
boxes[1].classList.add(i2.ratio);
boxes[1].children[0].setAttribute("src", "img/"+i2.name);
//
boxes[2].setAttribute("onclick", "HidePopup"+i3.name);
boxes[2].setAttribute("style", "width: "+i3.size+";");
boxes[2].classList.add(i3.ratio);
boxes[2].children[0].setAttribute("src", "img/"+i3.name);
