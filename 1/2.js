let arr = [1, 2, 4, 5, 4, 6, 4, 8, 9, 10];
let target = 4;
let result = linearSearch(arr, target);

function linearSearch(arr, target) {
    if (arr === null || arr === undefined) return "Масив не заданий";
    if (arr.length === 0) return "Масив порожній";

    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) indexes.push(i);
    }

    return indexes.length > 0 ? indexes : -1;
}

if (result === -1) {
    console.log("Не знайдено");
} else if (typeof result === "string") {
    console.log(result);
} else {
    console.log("Знайдено на індексах: " + result);
}
