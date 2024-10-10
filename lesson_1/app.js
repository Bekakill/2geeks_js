// document.write("Hello Beka");
// document.body.style.fontSize = "70px";
// document.body.style.textAlign = "center";

// variable-переменная

let candidateName1 = "Oroz Alykulov";
let candidateName2 = "Yrys Kulov";
let candidateName3 = "Samat Moldokulov";

let electionTitle = "Local kenesh 2024";

let votersCount = 150_000;
let comingVotersCount = 120_000;
let comingVotersPercentage = comingVotersCount * 100 / votersCount;

console.log(electionTitle + " coming is" + comingVotersPercentage + "%");
let candidateVosCount1 = 43_000;
let candidateVosCount2 = 25_000;
let candidateVosCount3 = 27_000;

let votesSum = candidateVosCount1 + candidateVosCount2 + candidateVosCount3;
// boolean

let electionIsOk = comingVotersCount > votesSum;
if (electionIsOk) {
    console.log(electionTitle + " finished successfully");
}
else {
    console.error(electionTitle + " fails." );
}
console.log("Voters:" + comingVotersCount)
console.log("Votes:" + votesSum);
it (comingVotersPercentage > 50) { console.log("Election Ok") };

else{
    console.warn("Election fails. Low coming.")
}