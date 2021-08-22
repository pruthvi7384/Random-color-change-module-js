const button = document.querySelector('#change');
const colorArray = ['#58c9d1','#DFFF00','#FFBF00','#FF7F50','#DE3163','#9FE2BF','#40E0D0','#6495ED','#CCCCFF'];

button.addEventListener('click',()=>{
    const no =colorArray[ Math.floor(Math.random() * colorArray.length) ];
    document.body.style.backgroundColor =no;
})

const inputText = document.querySelector('#text');
inputText.addEventListener('keypress',()=>{
   const text_input = inputText.value;
   document.getElementById('textDisplay').innerHTML=text_input;
})

document.getElementById('name').innerHTML=prompt("Please Enter Your Name Here...");