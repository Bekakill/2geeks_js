document.addEventListener(
    "DOMContentLoaded", () => {
        const inputText = document.getElementById("inputText");
        const lolCo = document.getElementById("lolCo");
        const okCo = document.getElementById("okCo");
        const maxChars = 50;

        inputText.addEventListener(
            "input", () => {
                const currentLength = inputText.value.length;
                lolCo.textContent = `Всего: ${currentLength}`;
                okCo.textContent = `Осталось: ${maxChars - currentLength}`;
            });
    });