import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { forkJoin } from 'rxjs';

const httpOptions = {
  hedears: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  getProducts() {
    return console.log( forkJoin(
        this.http.get('http://local.authen.vn/api/products')
    ));
  }
}

