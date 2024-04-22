"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var teacher = new student_1.default();
console.log(teacher.data);
var student = new teacher_1.default();
console.log(student.data);
