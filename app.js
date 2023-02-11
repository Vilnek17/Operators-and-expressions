 let first = prompt("What the first month salary?");
 let second = prompt("What the second month salary?");
 let result = Number(first) + Number(second);
 alert(`Your salary for two month is ${result}`);
let bonus = 1;
let resultWithBonus=Number(first) + Number(second) + bonus;
 alert(`You have extra bonus!Your total salary was:${result}.It's increase for 1$ and now it's ${resultWithBonus} $`);
let minSalary=2000;
let bonusOne=prompt("How much do you have a bonus?");
let totalSalary=result+Number(bonusOne);
if (totalSalary>=minSalary) {
    alert(`Will you work next?true `)
}else {
    alert(`Will you work next?false `)
}
let minWage=2000;
let bonusTwo=prompt("How much do you have a bonus?");
let totalWage=result+Number(bonusTwo);
if (totalWage>=minWage) {
    alert(`I am ready `)
}else {
    alert(`I am out `)
}