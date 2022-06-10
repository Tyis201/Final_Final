('use strict')
console.log('hello world')

function remove(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('btn1').style.display = 'none';
  document.getElementById('btn2').style.display = 'none';
  document.getElementById('btn3').style.display = 'none';
  // document.getElementById('button1').style.display = 'none';
  // document.getElementById('button2').style.display = 'none';
  // document.getElementById('button3').style.display = 'none';



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
 remove()
 test()
});
let btn2 = document.getElementById("option2");
btn2.addEventListener('click', event => {
  remove()
  test();
});
let btn3 = document.getElementById("option3");
btn3.addEventListener('click', event => {
  remove()
  test();
});
}
start()

   


   function test(){
     console.log('this worked');
     const node = document.createElement("h1");
     const textnode = document.createTextNode("this worked");
     node.appendChild(textnode);
     document.getElementById("story").appendChild(node);

       var myDiv1 = document.getElementById("option1");
       var button1 = document.createElement('BUTTON');
       var text1 = document.createTextNode("option1");
       button1.appendChild(text1);
       myDiv1.appendChild(button1); 
       
       var myDiv = document.getElementById("option2");
       var button = document.createElement('BUTTON');
       var text = document.createTextNode("option2");
       button.appendChild(text);
       myDiv.appendChild(button); 
       
       var myDiv = document.getElementById("option3");
       var button = document.createElement('BUTTON');
       var text = document.createTextNode("option3");
       button.appendChild(text);
       myDiv.appendChild(button);


     let btn1 = document.getElementById("option1");
     btn1.addEventListener('click', event => {
      remove()
      yes()
     });
     let btn2 = document.getElementById("option2");
     btn2.addEventListener('click', event => {
       remove()
       test();
     });

     let btn3 = document.getElementById("option3");
     btn3.addEventListener('click', event => {
       remove()
       test();


 

   });}

function yes(){
  console.log('working')
}