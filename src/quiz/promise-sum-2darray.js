const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow( arr, row) {
    return new Promise((resolve, reject) => {
        if (arr.length > row) {
            setTimeout(() => {
                let sum = 0;
                for (let i=0;i<arr.length;i++) {
                    sum+= arr[row][i];
                }
                resolve(sum);
            }, 0);
        }
        else {
            reject(`Row ${row} not within 0 and ${arr.length}`);
        }
    })
}

promisesArr = []

for(let x =0; x<array2D.length; x++) {
    promisesArr.push(sumOfARow(array2D, x));
}

x = new Date()
Promise.all(promisesArr)
    .then((sums) => {
        let sum = 0;
        sums.forEach(s => sum+= s);
        console.log(sum);
        console.log(new Date() - x)
    })
.catch(error => console.log(error));