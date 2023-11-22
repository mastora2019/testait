import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private apiUrl = 'http://localhost:3000/groups';

  constructor(private http: HttpClient) {}

  createGroup(groupData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, groupData);
  }
}
