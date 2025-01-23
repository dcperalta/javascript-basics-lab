// Variables 
let student = {
    firstName: "Divine", // string 
    lastName: "Peralta", // string
    studentID: "01158944", // integer
    isEnrolled: true // boolean
} // object

console.log("The student's name is " + student.firstName + " " + student.lastName);
console.log("The student's ID is " + student.studentID);
console.log("The student is enrolled: " + student.isEnrolled);


// Ordered and Indexed Arrays 
let courses = ["Web Development", "JavaScript", "Algorithms", "Operating Systems", "Technical Writing"]; // array

console.log("The courses for this semester are ", courses);

console.log(courses[0]);
console.log(courses[2]);
console.log(courses[4]); 

// Using Arithmetic Operators
let a = 2;
let b = 4;
let c = a + b;
let d = c - a;
let e = c * d;

console.log(a, b, c, d, e);

// Using Comparison Operators
console.log( b !== d );
console.log(b > a);
console.log( c * d == e );
console.log( "Peralta" == student.lastName );

// Using Logical Operators
console.log( e > a || d == b );
console.log(!e);





