import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private tokenKey = '';


  constructor(private http: HttpClient) { }

  signup(user: { username: string,email: string, password: string }): Observable<any> {
    console.log(user);

    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(user: { username: string,email: string,password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setToken(response.token);
        }
      })
    );
  }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    return token || null;
  }
  

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
