import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";
import { Student } from "../student";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    students: Student[];
    activeStudentGrades: string = '';

    constructor(private studentService: StudentService) {

    }

    ngOnInit() {
        this.students = this.studentService.getStudents();
    }

    detailGrades(grades: number[]) {
        this.activeStudentGrades = grades.join(', ');
    }

    alertDetail(grades: number[]) {
        let options = {
            title: "Détails des notes",
            message: grades.join(', '),
            okButtonText: "OK"
        };

        alert(options).then(() => {
            console.log("test");
            this.detailGrades(grades);
        });
    }

}