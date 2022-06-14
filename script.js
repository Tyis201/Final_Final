('use strict')
console.log('hello world')

function remove(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('btn1').style.display = 'none';
  document.getElementById('btn2').style.display = 'none';
  document.getElementById('btn3').style.display = 'none';
}
function remove2(){
  document.getElementById('button1').style.display = 'none';
  document.getElementById('button2').style.display = 'none';
  document.getElementById('button3').style.display = 'none';
  document.getElementById('2').style.display = 'none';

}


 function start(){
const node = document.createElement("h1");
const textnode = document.createTextNode("this is a test");
node.appendChild(textnode);
document.getElementById("start").appendChild(node);


var myDiv = document.getElementById("option1");
var button = document.createElement('BUTTON');
button.setAttribute('id','btn1');
var text = document.createTextNode("option1");
button.appendChild(text);
myDiv.appendChild(button); 

var myDiv = document.getElementById("option2");
var button = document.createElement('BUTTON');
button.setAttribute('id','btn2');
var text = document.createTextNode("option2");
button.appendChild(text);
myDiv.appendChild(button); 

var myDiv = document.getElementById("option3");
var button = document.createElement('BUTTON');
button.setAttribute('id','btn3');
var text = document.createTextNode("option3");
button.appendChild(text);
myDiv.appendChild(button); 


let btn1 = document.getElementById("option1");
btn1.addEventListener('click', event => {
 test();
 remove();
});
let btn2 = document.getElementById("option2");
btn2.addEventListener('click', event => {
  test();
  remove();
});
let btn3 = document.getElementById("option3");
btn3.addEventListener('click', event => {
  test();
  remove();
 
});
}
start();

   


   function test(){
     console.log('this worked');
     const node = document.createElement("h1");
     node.setAttribute('id','2')
     const textnode = document.createTextNode("this worked");
     node.appendChild(textnode);
     document.getElementById("story").appendChild(node);

       var myDiv = document.getElementById("option1");
       var button = document.createElement('BUTTON');
       button.setAttribute('id','button1');
       var text = document.createTextNode("option1");
       button.appendChild(text);
       myDiv.appendChild(button); 
       
       var myDiv = document.getElementById("option2");
       var button = document.createElement('BUTTON');
       button.setAttribute('id','button2');
       var text = document.createTextNode("option2");
       button.appendChild(text);
       myDiv.appendChild(button); 
       
       var myDiv = document.getElementById("option3");
       var button = document.createElement('BUTTON');
       button.setAttribute('id','button3');
       var text = document.createTextNode("option3");
       button.appendChild(text);
       myDiv.appendChild(button);


     let btn1 = document.getElementById("option1");
     btn1.addEventListener('click', event => {
      yes(); 
      remove2();
     });
     let btn2 = document.getElementById("option2");
     btn2.addEventListener('click', event => {
       test();
       remove2();
     });

     let btn3 = document.getElementById("option3");
     btn3.addEventListener('click', event => {
        test();
       remove2();


 

   });}

function yes(){
  console.log('working')
}