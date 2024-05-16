import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment, Student } from '../model/students.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  public getAllPayments(): Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>("http://localhost:8020/payments")
  }

  public getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>("http://localhost:8020/students")
  }

  public getStudentPayments(code: string): Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(`http://localhost:8020/students/${code}/payments`);
  }

  public savePayment(formData: any): Observable<Payment> {
    return this.http.post<Payment>("http://localhost:8020/payments/",formData);
  }

  getPaymentDetails(paymentId:number) {
    return this.http.get(`http://localhost:8020//payments/${paymentId}/file`,{responseType:'blob'});
  }
}


