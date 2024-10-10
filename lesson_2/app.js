// console.log("lesson 2");
//
// // variables - переменные
// // data types - типы данных
// // 1. string - текст
// // 2. number - число
// // 3. boolean - логическое значение (true, false)
// // 4. undefined - неопределенный
// // 5. null - пустой
// // 6. object - объект
//
// // operations
// // 1. string + (concatenation - конкатенация)
// // 2. number + - * / ** %
// // 3. boolean > < >= <= == === != !==
//
// // == non-strict
// // === strict
//
// // conditions - условия (if..else)
//
// let candidates; // undefined
// console.log("candidates = ", candidates);
//
// let electionIsOk = false;
// let electionWinner; // undefined
//
// if (!electionIsOk) {
//   electionWinner = null;
// }
//
// // key-value
// let election = {
//   date: "01-11-2024",
//   votersCount: 10,
//   isFinished: false,
//   turnoutPercentage: 100,
//   candidates: {
//     "1. Alykulov": 0,
//     "2. Kulov": 0,
//     "3. Moldokulov": 0,
//     "No vote": 0,
//   },
// };
//
// // election.isFinished = true;
// // election.date = "01-12-2024";
// // election.candidates["2. Kulov"] = 5000;
//
// for (let i = 0; i < election.votersCount; i++) {
//   let vote = prompt("Choose candidate: 1,2,3");
//   vote = Number(vote);
//   console.log("Vote = ", vote, typeof vote);
//
//   if (vote === 1) {
//     election.candidates["1. Alykulov"]++;
//   } else if (vote === 2) {
//     election.candidates["2. Kulov"]++;
//   } else if (vote === 3) {
//     election.candidates["3. Moldokulov"]++;
//   } else {
//     election.candidates["No vote"] += 1;
//   }
// }
//
// console.log("Election results:", election.candidates);
//
// electionWinner = null;
// let maxVotes = 0;
//
// // 3 2 5
//
// // for in
// for (let candidate in election.candidates) {
//   if (candidate === "No vote") continue;
//
//   let votes = election.candidates[candidate];
//   if (votes > maxVotes) {
//     electionWinner = candidate;
//     maxVotes = votes;
//   } else if (votes === maxVotes) {
//     electionWinner = null;
//   }
// }
//
// console.log("Election winner is", electionWinner);

let num1 = prompt("первое число:");
let num2 = prompt("второе число:");
num1 = Number(num1);
num2 = Number(num2);
if (num1 > num2) {
    console.log(`Первое число ${num1} больше второго ${num2}.`);
} else if (num1 < num2) {
    console.log(`Второе число ${num2} больше первого ${num1}.`);
} else {
    console.log("Числа равны");
}

let planetNumber = prompt("Введите номер планеты (1-9):");
planetNumber = Number(planetNumber);
const planets = [
    "Меркурий",
    "Венера",
    "Земля",
    "Марс",
    "Юпитер",
    "Сатурн",
    "Уран",
    "Нептун",
    "Плутон",
];
if (planetNumber >= 1 && planetNumber <= 9) {
    console.log(`Планета под номером ${planetNumber} — это ${planets[planetNumber - 1]}.`);
} else {
    console.log("Пожалуйста, введите число от 1 до 9.");
}

let book= {
    title: "Всё хреново",
    author: "Марк Мэнсон",
    yearPublished: 2019,
    genre: "Практическая психология, Саморазвитие, личностный рост",
    pages: 320,
    language: "Английский",
    isBestseller: true,
    rating: 3.9,
}

