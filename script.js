('use strict')
console.log('hello world')



 function start(){
const node = document.createElement("h1");
const textnode = document.createTextNode("this is a test");
node.appendChild(textnode);
document.getElementById("story").appendChild(node);

 }
start()

   let btn = document.getElementById("option1");
   btn.addEventListener('click', event => {
     test();
   });