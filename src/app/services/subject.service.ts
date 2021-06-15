import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Teacher } from '../models/teacher';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private URI: string = "http://localhost:8000/api"

  constructor(private http: HttpClient,private router: Router) { }


  getSubjectsByTeacher(teacherId: number): Observable<any> {

    return this.http.get<Subject[]>(this.URI + "/asignaturas/teacher/" + teacherId).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
