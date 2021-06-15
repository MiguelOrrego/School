import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject';
import { Teacher } from '../models/teacher';
import { SubjectService } from '../services/subject.service';
import { TeacherService } from '../services/teacher.service';
import { RouterModule, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {


  post: Subject[];


  teachers: Teacher[];
  showTable: boolean = false;
  errorMsg: String;
  showError: boolean = false;

  subject: Subject = new Subject();

  constructor(private teacherService: TeacherService, private subjectService: SubjectService, private router: Router, private _builder: FormBuilder) {


  }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(response => this.teachers = response)
  }

  Consult() {

    this.subjectService.getSubjectsByTeacher(this.subject.id)
      .subscribe(data => {
        console.log(data);

        this.post = data;

        this.showTable = true;
        this.showError = false;
        this.router.navigate(["main"]);
        this.subject = new Subject();
      },
        err => {
          this.showTable = false;
          this.showError = true;
          this.errorMsg = "Por favor seleccione un profesor";
          this.router.navigate(["ConsultarFacturas"]);
          this.subject = new Subject();
        }

      );
  }



}
