alert("Угадай число от 0 до 999!")
alert("Чтобы выйти введи q")
const pc = Math.floor(Math.random() *1000);
console.log("number pc", pc);

while(true) {
    let player = prompt("Введите число!")

    if (player === "q") {
        break
    }
    

    if (isNaN(player)) {
        alert ("Это не число!")
    }
    
    else if (player == pc) {
        alert ("Вы выиграли!")
        break
    }
    else if (player < pc) {
        alert ("Число больше!")
    }
    else if (player > pc) {
        alert ("Число меньше!")
    }
    
}

    

   

        

