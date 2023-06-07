import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
export interface IEmployees {
  id: number;
  name: string;
  email: string;
  address: string;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: ApiService) {}

  getdata(): Observable<IEmployees[]> {
    return this.http.getRecords<IEmployees[]>('employee');
  }

  getPostData(employee: IEmployees): Observable<Object> {
    console.log(employee)
    return this.http.getPostData('employee', employee);
  }
}
