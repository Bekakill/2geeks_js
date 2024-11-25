// 1
function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || []
}
console.log(extractNumbers("a1fg5hj6"))


// 2
function fiboDelay(a = 0, b = 1) {
    if (a > 144) return
    console.log(a)
    setTimeout(() => fiboDelay(b, a + b), 1000)
}
fiboDelay()


// 3
async function fetchTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        data.forEach(product => {
            console.log(product.title)
        });
    } catch (error) {
        console.error(error.message)
    }
}
fetchTitles()



// 4
let red = document.getElementById('red')
red.onclick = function() {
    red.style.backgroundColor = 'red';
}
let green = document.getElementById('green')
green.onclick = function() {
    green.style.backgroundColor = 'green';
}
let yellow = document.getElementById('yellow')
yellow.onclick = function() {
    yellow.style.backgroundColor = 'yellow';
}
let blue = document.getElementById('blue')
blue.onclick = function() {
    blue.style.backgroundColor = 'blue';
}
let purple = document.getElementById('purple')
purple.onclick = function() {
    purple.style.backgroundColor = 'purple';
}



// 5
const block = document.getElementById('block')
const toButton = document.getElementById('toButton')
toButton.onclick = function() {
    if (block.style.display === 'none') {
        block.style.display = 'block';
        toButton.textContent = 'Скрыть';
    } else {
        block.style.display = 'none';
        toButton.textContent = 'Показать';
    }
}



// 6
const counter = document.getElementById('counter')
let count = 0
const interval = setInterval(() => {
    counter.textContent = count
    count++;
    if (count > 100) {
        clearInterval(interval)
    }
},1)


// 7