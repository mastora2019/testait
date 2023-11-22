import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  joinGroup(groupId: string): Observable<any> {
    // Dummy implementation - send a request to join the group
    return this.http.post<any>(`${this.apiUrl}/${groupId}/join`, {});
  }
}
