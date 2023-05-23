import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api='https://jsonplaceholder.typicode.com'

  constructor(private httpclient:HttpClient) { }

  getUserData() {
  return this.httpclient.get(`${this.api}/users`)

  }
  getPostData() {
    return this.httpclient.get(`${this.api}/posts`)

    }
}
