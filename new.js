// arrays
const students = [
  { name: "Ali", grade: 75 },
  { name: "Sara", grade: 92 },
  { name: "Mona", grade: 88 }
];

const users = [
  { name: "Malak", role: "Student" },
  { name: "Omar", role: "Mentor" }
];

const products = [
  { id: 1, name: "Mouse" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Screen" }
];

const numbers = [1, 2, 3, 4, 5, 6];

const employees = [
  { name: "Nour", department: "HR" },
  { name: "Youssef", department: "IT" }
];

const words = ["js", "ts", "js", "react", "js", "ts"];

const person = { name: "Laila", age: 21, city: "Cairo" };

const student = { name: "Hana", grade: 84, level: 2 };


// 1. 
const topStudents = students.filter(student => student.grade > 80);
console.log("Students with grade > 80:", topStudents);


// 2. 
const formattedUsers = users.map(user => `${user.name} - ${user.role}`);
console.log("Formatted Users:", formattedUsers);


// 3. 
const product = products.find(p => p.id === 3);
console.log("Product with id 3:", product);


// 4. 
const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);


// 5. 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);


// 6. 
const updatedStudent = {
  ...student,
  grade: 90
};
console.log("Updated Student:", updatedStudent);


// 7. 
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);


// 8. 
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// 9. 
const itEmployee = employees.find(emp => emp.department === "IT");
console.log("IT Employee:", itEmployee);
