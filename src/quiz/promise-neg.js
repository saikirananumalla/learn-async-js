const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negativesInArr(arr, row) {
    return new Promise((resolve, reject) => {
        if (arr.length > row) {
            const negs = arr[row].filter(n => n<0);
            if (negs.length > 0 ) {
                resolve(arr[row]);
            }
            else {
                reject("no negatives in this row");
            }
        }
        else {
            reject("Invalid row number");
        }
    })
}

rows = []

for(let x=0;x<array2D.length;x++) {
    rows.push(negativesInArr(array2D, x));
}

Promise.any(rows).then( (res) => console.log(res));