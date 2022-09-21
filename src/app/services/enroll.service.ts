import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userTest } from '../user-test';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/enroll';

  enroll(user: userTest) {
    return this.http.post(this.url, user);
  }
}
