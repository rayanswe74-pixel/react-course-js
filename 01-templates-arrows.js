import { students } from "./data.js"
const discribe = student => `${student.name} (${student.city}) :${student.grade}`;
for (const student of students) {
  console.log(describe(student));
}