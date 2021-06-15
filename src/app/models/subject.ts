import { Course } from './course';
import { Student } from './student';
import { Teacher } from './teacher';

export class Subject {
    id: number;
    nombre:String;
    curso:Course;
    estudiantes:Student[];
    profesor: Teacher;
}