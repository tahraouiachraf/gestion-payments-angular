import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../model/students.model';
import { MatTableDataSource } from '@angular/material/table';
import { Route } from '@react-navigation/native';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  students!: Array<Student>;
  StudentsDataSource!: MatTableDataSource<Student>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'code', 'programId','payments']
  constructor(private studentService: StudentsService,private router:Router) {

  }

  ngOnInit() {
    this.studentService.getAllStudents()
      .subscribe({
        next: value => {
          this.students = value;
          this.StudentsDataSource = new MatTableDataSource<Student>(this.students);
        },
        error: err => {
          console.log(err);
        }
      })
  }

  studentPayments(student:Student) {
    this.router.navigateByUrl(`/admin/student-details/${student.code}`);
  }
}
