const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow( arr:number[][], row:number):Promise<number> {
    return new Promise((resolve, reject) => {
        if (arr.length > row) {
            let sum = 0;
            for (let i=0;i<arr.length;i++) {
                sum+= arr[row][i];
            }
            resolve(sum);
        }
        else {
            reject(`Row ${row} not within 0 and ${arr.length}`);
        }
    });
}

async function calcSum() {
    let sum = 0;
    for (let i = 0; i < array2D_1.length; i++) {
        sum += await sumOfARow(array2D_1, i);
    }

    return sum;
}

calcSum().then(sum => console.log(sum));

let promiseArr = [];

for(let x =0; x<array2D_1.length; x++) {
    promiseArr.push(sumOfARow(array2D_1, x));
}

Promise.all(promiseArr)
    .then((sums) => {
        let sum = 0;
        sums.forEach(s => sum+= s);
        console.log(sum);
    })
    .catch(error => console.log(error));