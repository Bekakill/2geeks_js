document.addEventListener("DOMContentLoaded", function() {
    const hamster = document.getElementById("hamster");
    const coinCountDisplay = document.getElementById("coin");
    const energyCountDisplay = document.getElementById("energy");

    let coin = 0;
    let energy = 500;
    const coinIncrement = 50;
    const energyDecrement = 50;

    function updateDisplay() {
        coinCountDisplay.textContent = coin;
        energyCountDisplay.textContent = energy;
    }

    hamster.addEventListener("click", function() {
        if (energy > 0) {
            coin += coinIncrement;
            energy -= energyDecrement;
            updateDisplay();
        } else {
            alert('Хватит тыкать меня, уже башка болит! Дай передохнуть...');
        }
    });

    updateDisplay();
});