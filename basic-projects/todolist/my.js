// // x = document.querySelector("button");
// let y = document.querySelector(".input-js");
// let xx = [];
// let enter = ""
// function addtodo(){
//     const i = document.querySelector('.input-js');
//      enter = i.value;
// }
// y.addEventListener("click",function(){
//       xx.push(enter);
//        console.log(xx);
// })
let input = document.querySelector(".input-js");
let addBtn = document.querySelector(".add-btn"); 
let todos = [];   
function ggg() {
    let xxx = "";
    for(let i=0;i<todos.length;i++)
    {
        xxx += `<p>${todos[i]}</p>`;
    }  
    document.querySelector('.gh').innerHTML =  xxx;
}     
addBtn.addEventListener("click", function (){
    let value = input.value;
    todos.push(value);
    console.log(todos); 
    input.value = ""; 
    ggg();
});
