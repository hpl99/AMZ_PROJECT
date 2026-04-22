let num = document.querySelectorAll(".one, .two, .three, .four, .five");
// let choice = document.querySelectorAll(".plus, .minus, .mul, .div");
let y = document.querySelector(".ans");
let count = 0;

function operation(choice){
    if(choice == '+'){
        count++;
    }
    else if(choice == '-'){
        count--;
    }
    else if(choice == '*'){
        count = count * 2;
    }
    else if(choice == '/'){
        count = count / 2;
    }

    console.log(count);
    y.innerHTML = count;
}