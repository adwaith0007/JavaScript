
// 18. Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.


const prompt = require("prompt-sync")({sigint:true})

function calculateGrade(writtenTest, labExams, assignments) {
    const writtenTestWeight = 0.7;
    const labExamsWeight = 0.2;
    const assignmentsWeight = 0.1;

    const overallGrade = (writtenTest * writtenTestWeight +
                         labExams * labExamsWeight +
                         assignments * assignmentsWeight);

    return overallGrade;
}

function main() {
    const writtenTest = parseFloat(prompt("Enter the marks for the written test: "));
    const labExams = parseFloat(prompt("Enter the marks for the lab exams: "));
    const assignments = parseFloat(prompt("Enter the marks for the assignments: "));

    const overallGrade = calculateGrade(writtenTest, labExams, assignments);

    console.log(`Grade of the student is ${overallGrade.toFixed(1)}`);
}

main();