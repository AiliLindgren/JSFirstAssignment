// FIRST ASSIGNMENT

// 1. Store values in variables.
// 2. Compare areas.
// 3. Print total areas and which one has the largest area.


// Case 1
const triangleOneArea = (10 * 13) / 2;
const triangleTwoArea = (16.5 * 20.3) / 2;

if (triangleOneArea > triangleTwoArea) {
    console.log(`Triangle One has an area of ${triangleOneArea} cm2 and TriangleTwo has an area of ${triangleTwoArea} cm2. The triangle with the largest area is Triangle One.`);
} else if (triangleTwoArea > triangleOneArea) {
    console.log(`Triangle One has an area of ${triangleOneArea} cm2 and Triangle Two has an area of ${triangleTwoArea} cm2. The triangle with the largest area is Triangle Two.`);
} else if (triangleOneArea === triangleTwoArea) {
    console.log(`Triangle One has an area of ${triangleOneArea} cm2 and Triangle Two has an area of ${triangleTwoArea} cm2. Both triangles have the same area.`);
} else {
    // This is for any type of error, if user input is incorrect or anything else.
    console.log("Oops, something went wrong.")
}

// Alternative, single line solution, only works if we're sure that either one of the triangles is larger than the other.

// console.log(`Triangle One has an area of ${(10 * 13) / 2} cm2 and TriangleTwo has an area of ${(16.5 * 20.3) / 2} cm2. The triangle with the largest area is ${triangleOneArea > triangleTwoArea ? "Triangle One" : "Triangle Two"}.`);


// CASE 2
const triangleThreeArea = (16.5 * 20.3) / 2;
const triangleFourArea = (20.3 * 16.5) /2;

if (triangleThreeArea > triangleFourArea) {
    console.log(`Triangle Three has an area of ${triangleThreeArea} cm2 and Triangle Four has an area of ${triangleFourArea} cm2. The triangle with the largest area is Triangle Three.`);
} else if (triangleFourArea > triangleThreeArea) {
    console.log(`Triangle Three has an area of ${triangleThreeArea} cm2 and Triangle Four has an area of ${triangleFourArea} cm2. The triangle with the largest area is Triangle Four.`);
} else if (triangleThreeArea === triangleFourArea) {
    console.log(`Triangle Three has an area of ${triangleThreeArea} cm2 and Triangle Four has an area of ${triangleFourArea} cm2. Both triangles have the same area.`)
} else {
    console.log("Oops, something went wrong.")
}

// CASE 3
const triangleFiveArea = (7.8 * 5.6) / 2;
const triangleSixArea = (9.3 * 12.4) / 2;

if (triangleFiveArea > triangleSixArea) {
    console.log(`Triangle Five has an area of ${triangleFiveArea} cm2 and Triangle Six has an area of ${triangleSixArea} cm2. The triangle with the largest area is Triangle Five.`);
} else if (triangleSixArea > triangleFiveArea) {
    console.log(`Triangle Five has an area of ${triangleFiveArea} cm2 and Triangle Six has an area of ${triangleSixArea} cm2. The triangle with the largest area is Triangle Six.`);
} else if (triangleFiveArea === triangleSixArea) {
    console.log(`Triangle Five has an area of ${triangleFiveArea} cm2 and Triangle Six has an area of ${triangleSixArea} cm2. Both triangles have the same area.`);
} else {
    console.log("Oops, something went wrong.");
}

// EXTRA CASE
// 1. Store user-input in variables.
// 2. Calculate areas.
// 3. Compare areas and output.
function calculate() {
    
    // User types input in an element. The code gets the user input by the element's id. User input is a string, string gets parsed it into a number, which becomes the value below.
    const triangleABase = parseFloat(document.getElementById("base-triangle-A").value);
    const triangleAHeight = parseFloat(document.getElementById("height-triangle-A").value);

    // Calculates the areas of the triangles.
    const triangleAArea = (triangleABase * triangleAHeight) / 2;
    
    const triangleBBase = parseFloat(document.getElementById("base-triangle-B").value);
    const triangleBHeight = parseFloat(document.getElementById("height-triangle-B").value);
    const triangleBArea = (triangleBBase * triangleBHeight) / 2;
    
    // Comparison of areas. Depending on what triangle is the largest (or if they are equal), different if-statements get executed. The string gets placed as the innerHTML of the element that is selected by id. If something goes wrong, e.g. if user types letters instead of numbers, the last else-statement gets executed.
    if (triangleAArea > triangleBArea) {
        document.getElementById("result").innerHTML = `Triangle A has an area of ${triangleAArea} cm2 and Triangle B has an area of ${triangleBArea} cm2. The triangle with the largest area is Triangle A.`;
    } else if (triangleBArea > triangleAArea) {        
        document.getElementById("result").innerHTML = `Triangle A has an area of ${triangleAArea} cm2 and Triangle B has an area of ${triangleBArea} cm2. The triangle with the largest area is Triangle B.`;
    } else if (triangleAArea === triangleBArea) {        
        document.getElementById("result").innerHTML = `Triangle A has an area of ${triangleAArea} cm2 and Triangle B has an area of ${triangleBArea} cm2. Both triangles have the same area.`;
    } else {
        document.getElementById("result").innerHTML = "Oops, something went wrong.";
    }
}