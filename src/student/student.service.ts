import { Injectable } from "@angular/core";
import { Student } from "./student";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    students: Student[] = [
        { firstname: 'Jessy', lastname: 'Vautour', grades: [14, 5, 10] },
        { firstname: 'James', lastname: 'Lacoste', grades: [2, 1, 20] },
        { firstname: 'Léa', lastname: 'Messaoudi', grades: [18, 19, 18] }
    ];

    getStudents() {
        return this.students;
    }

    studentGradesAvg(notes: number[]) {
        let sum: number = 0;
        notes.forEach(note => sum += note);
        return (sum / notes.length).toFixed(2);
    }
}