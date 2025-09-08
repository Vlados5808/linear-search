let arr = [1, 2, 4, 5, 4, 6, 4, 8, 9, 10];
let target = 4;
let result = linearSearch(arr, target);

function linearSearch(arr, target) {
    let res = [];
    for (let i = 0; i < arr.length; i++) if (arr[i] === target) res.push(i);
    return res.length ? res : -1;
  }

  console.log(result === -1 ? "Не знайдено" : "Знайдено на індексах: " + result);
