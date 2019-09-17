import { Component } from "@angular/core";
import { Student } from "../student";
import { StudentService } from "../student.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'student-add',
    templateUrl: './student-add.component.html'
})
export class StudentAddComponent {
    newStudent: Student = {firstname: '', lastname: '', grades: []};
    newGrade: string = '';
    
    constructor(
        private studentService: StudentService,
        private router: RouterExtensions
        ) {}

    saveStudent() {
        this.studentService.addStudent(this.newStudent);
        // console.log(this.studentService.getStudents());
        this.router.navigateByUrl('/students');
    }

    addGrade() {
        this.newStudent.grades.push(parseInt(this.newGrade));
        this.newGrade = ''; // clear input
    }

}