import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResult } from '../model/auth-result';
import { Credentials } from '../model/credentials';
import { SignupDto } from '../model/signup-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageFieldName = 'current_user';

  private _currentUser?: Credentials;

  public redirectUrl?: string; 

  constructor(private http: HttpClient) {
    let data = localStorage.getItem(this.storageFieldName);
    if (data) {
      this._currentUser = JSON.parse(data);
    }
  }

  public isAuthenticated(): boolean {
    return !!this._currentUser;
  }

  authenticate(credentials: Credentials) : Observable<AuthResult> {
    const headers = new HttpHeaders(credentials ? { authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) } : {});
    return this.http.get<AuthResult>('/api/v1/login', {headers: headers})
    .pipe(
      map(resp => {
        if ('username' in resp) {
          this._currentUser = resp as unknown as Credentials;
          localStorage.setItem(this.storageFieldName, JSON.stringify(resp));
          return new AuthResult(this._currentUser, this.redirectUrl);
        }
        throw new Error('Authentication error');
      })
    )     
  }

  logout() {
    if (this.isAuthenticated()) {
      this._currentUser = undefined;
      localStorage.removeItem(this.storageFieldName);
      this.http.post('/api/v1/logout', {}).subscribe();
    }
  }

  signUp(signupDto: SignupDto) : Observable<number> {
    return this.http.post<number>('/api/v1/register', signupDto);
  }

}