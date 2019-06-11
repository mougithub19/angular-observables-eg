// student.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

students: Student[] = [
{
    id: 1,
    name: 'Rushabh',
    enrollmentnumber: 123,
    college: 'XYZCollege',
    university: 'GTU'
},
{
    id: 2,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'ABCCollege',
    university: 'GTU'
}];

  constructor() { }
  public getStudents(): any {
     const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.students);
            }, 1000);
     });

     return studentsObservable;
 }
}