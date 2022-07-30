let target = document.querySelector("body");
target.style.backgroundImage = "url('images2.jpg')";
target.style.backgroundSize = "100%";
target.style.overflow = "hidden";

let content = document.querySelector(".container");
content.style.margin = "15%";
content.style.marginLeft = "25%"; 
content.style.marginTop = "8%";
content.style.backgroundColor = "rgb(6, 5, 5,0.75)";
content.style.width = '50%';
content.style.padding = '20px';
content.style.border = '1px solid';
content.style.borderStyle = 'none';
content.style.borderRadius = '15px';
content.style.boxShadow = '10px 10px 10px green';

let title = document.querySelector('#title');
title.style.textAlign = 'center';
title.style.textTransform = 'uppercase';
title.style.fontWeight = 'bold';
title.style.fontFamily = 'Helvetica';

let headings = document.querySelectorAll('h3');
headings.forEach(heading=> {
  heading.style.fontFamily = 'Helvetica';
  heading.style.color = 'silver';
  heading.style.textAlign = 'center';
  heading.style.textTransform = 'uppercase';
})
let paragraph = document.querySelector('p');
paragraph.style.fontFamily = 'Helvetica';
paragraph.style.color = 'white';
paragraph.style.textAlign = 'center';


let list = document.getElementsByClassName('fruity');
var li = document.createElement('li');          
var image = document.createElement('img');
var pineapple = document.getElementById('pineapple');
image.src = 'pineapple.jpeg';
image.style.width = '70px';
image.style.height = '70px';
pineapple.appendChild(image);
li.appendChild(document.createTextNode("Pineapples"));
li.style.color = 'rgb(128, 207, 11)';
pineapple.appendChild(li);
list.appendChild(pineapple);
let main = document.getElementsByClassName('vegie')
var li1 = document.createElement('li');
let vegetables = document.getElementsByClassName("carrot")
var image = document.createElement('img');
li1.appendChild(document.createTextNode('carrots'));
vegetables.appendChild(li1);
main.appendChild(vegetables);










