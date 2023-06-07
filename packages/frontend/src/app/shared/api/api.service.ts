import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'packages/frontend/src/environmet/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private Http: HttpClient) {}

  public getRecords<T>(uri: string, data?: any): Observable<T> {
    return this.Http.get<T>(`${environment.apiUrl}${uri}`, { params: data });
  }

  public getPostData(uri: string, data: any) {
    return this.Http.post(`${environment.apiUrl}${uri}`, data);
  }
}
