// Prompt the user to enter their basic salary including benefits
let oppo = prompt(" Please input your basic salary with benefits: ");

// Function to calculate PAYE (tax) based on salary brackets
function payE(oppo) {
    if (oppo <= 24000) {
        // If salary is less than or equal to 24,000 → 10% tax
        return Math.floor((oppo * 10) / 100);
    } else if (oppo > 24000 && oppo <= 32333) {
        // Between 24,001 and 32,333 → 25% tax
        return Math.floor((oppo * 25) / 100);
    } else if (oppo > 32333 && oppo <= 500000) {
        // Between 32,334 and 500,000 → 30% tax
        return Math.floor((oppo * 30) / 100);
    } else if (oppo > 500000 && oppo <= 800000) {
        // Between 500,001 and 800,000 → 32.5% tax
        return Math.floor((oppo * 32.5) / 100);
    } else if (oppo > 800000) {
        // Above 800,000 → 35% tax
        return Math.floor((oppo * 35) / 100);
    } else {
        // If input is invalid (like negative numbers)
        return 0;
    }
}

// Function to calculate NSSF (pension contribution)
// Both below and above 8000 are charged 6%
function nssf(oppo) {
    return Math.floor((oppo * 6) / 100);
}

// Function to calculate SHIF (health insurance contribution)
// Always 2.75% of salary
function calculateShif(oppo) {
    return (oppo * 2.75) / 100;
}

// Function to calculate net salary after deductions
function calculateNetSalary(oppo) {
    const paye = payE(oppo);              // Tax deduction
    const nssfDeduction = nssf(oppo);     // Pension deduction
    const shif = calculateShif(oppo);     // Health deduction

    // Net Salary = Gross Salary - (All Deductions)
    const netSalary = oppo - (paye + nssfDeduction + shif);
    return netSalary;
}

// Output all results to the console
console.log(`CALCULATED SHIF : ${calculateShif(Number(oppo))}`);
console.log(`CALCULATED PAYE : ${payE(Number(oppo))}`);
console.log(`CALCULATED NSSF Deduction : ${nssf(Number(oppo))}`);
console.log(`CALCULATED NET SALARY : ${calculateNetSalary(Number(oppo))}`);
