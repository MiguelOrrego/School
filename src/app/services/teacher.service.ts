import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Teacher } from '../models/teacher';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private URI: string = "http://localhost:8000/api"

  constructor(private http: HttpClient, private router: Router) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.URI + "/teachers").pipe(
      catchError(e => {
        return throwError(e);
      })
    );

  }

}
