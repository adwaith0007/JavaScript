// 20. Write a program to print the following pattern using for loop


function printPattern(rows) {
    let counter = 1;

    for (let i = 1; i <= rows; i++) {
        let rowPattern = '';

        for (let j = 1; j <= i; j++) {
            rowPattern += counter + '\t';
            counter++;
        }

        console.log(rowPattern);
    }
}

const numRows = 4; 

printPattern(numRows);