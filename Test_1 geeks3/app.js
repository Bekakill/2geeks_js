// 1 Задача
function check() {
    const inputTest = document.getElementById("inputTest").value;  //нашел с помощу ID
    const resultatDiv = document.getElementById("resultat"); //нашел с помощу ID

    const isNumeric = /^[0-9]+$/.test(inputTest); //isNumeric нашел в интернете и в первые использовал
    if (isNumeric) {
        resultatDiv.textContent = "true";
        resultatDiv.style.color = "green";
    } else {
        resultatDiv.textContent = "false";
        resultatDiv.style.color = "red";
    }
}

// 2 Задача
let seconds = 1;
const intervalId = setInterval(() => {
    console.log(`Прошла ${seconds} секунда ${seconds > 0 }`); // ${seconds}
    seconds++; // Увеличив аем счётчик на 1
    if (seconds > 10) {
        clearInterval(intervalId); // Останавливаем интервал
    }
}, 1000);

// 3 Задача
const cod = () => {
    let i = 1;
    const interval = setInterval(() => {  // Устанавливаем интервал
        console.log(i);
        i++;// Увеличив аем счётчик на 1
        if (i > 10) {
            clearInterval(interval);// Останавливаем интервал
        }
    }, 1000);
};
cod();

//4 Задача
const box = document.getElementById("colorBox");
box.addEventListener("click", () => {
    box.classList.toggle("active");
});

//5 Задачу не понял и же сам не понимаю что делать



