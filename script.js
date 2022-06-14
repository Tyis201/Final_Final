
function remove(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('btn1').style.display = 'none';
  document.getElementById('btn2').style.display = 'none';
  document.getElementById('btn3').style.display = 'none';
  document.getElementById('yes').style.display = 'none';
  // document.getElementById('button2').style.display = 'none';
  // document.getElementById('button3').style.display = 'none';



}



 function start(){
const node = document.createElement("h1");
const textnode = document.createTextNode("You jump up in a heat of sweat after just having the strangest dream ever. You look around for the nearest clock to see what time it is. The clock tells you that its 7:45, you are relieved because work doesn’t start till 9. You decide to take a shower, freshen up and shave. After the shower, you head over to your dresser to get dressed for the day. What is your occupation");
node.appendChild(textnode);
document.getElementById("start").appendChild(node);


var myDiv = document.getElementById("option1");
var button = document.createElement('BUTTON');
button.setAttribute('id','btn1');
var text = document.createTextNode("Computer programer");
button.appendChild(text);
myDiv.appendChild(button); 

var myDiv = document.getElementById("option2");
var button = document.createElement('BUTTON');
button.setAttribute('id','btn2');
var text = document.createTextNode("Security guard");
button.appendChild(text);
myDiv.appendChild(button); 

var myDiv = document.getElementById("option3");
var button = document.createElement('BUTTON');
button.setAttribute('id','btn3');
var text = document.createTextNode("Amateur Boxer");
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
     const textnode = document.createTextNode("As a computer programmer, you know almost everything about computers. You spend the majority of your days sitting down looking through emails and killing time. You like to hack into your coworkers' computers and mess with them, and you also like to tear your computer apart and then build it back up. You decide to step out on the balcony for some fresh air as you finish getting changed. As you move the curtains to the side you are stunned at what you see. The whole city as you know it has completely changed… well partly. Normally the streets would be packed with people and cars, but theres nothing. You dont even hear a single cricket, everything is quiet. The sky is an orange-red color and some of the skyscrapers seem to be growing plants and have gigantic holes in them. You want to go outside but you dont know whether it's safe or not. You think twice and come up with three options ");
     node.appendChild(textnode);
     document.getElementById("story").appendChild(node);

       var myDiv = document.getElementById("option1");
       var button = document.createElement('BUTTON');
       button.setAttribute('id','yes');
       var text = document.createTextNode("option1");
       button.appendChild(text1);
       myDiv.appendChild(button1); 
       
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
      remove();
      yes();
     });
     let btn2 = document.getElementById("option2");
     btn2.addEventListener('click', event => {
       remove();
       test();
     });

     let btn3 = document.getElementById("option3");
     btn3.addEventListener('click', event => {
       remove();
       test();


 

   });}

function yes(){
  console.log('working')
}

