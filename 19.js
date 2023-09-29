
// 19. Income tax is calculated as per the following table 

const prompt = require ('prompt-sync')({sigint:true});




function calculateIncomeTax(annualIncome) {
    if (annualIncome <= 250000) {
        return 0;
    } else if (annualIncome <= 500000) {
        return annualIncome * 0.05;
    } else if (annualIncome <= 1000000) {
        return annualIncome * 0.2;
    } else {
        return annualIncome * 0.3;
    }
}

function main() {
    const annualIncome = parseFloat(prompt("Enter the annual income: "));

    const taxAmount = calculateIncomeTax(annualIncome);

    console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
}

main();