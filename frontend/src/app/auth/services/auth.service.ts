<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
// import { User } from "../types/user";
import { Customer } from "../../bank/types/customer";

export class AuthService {
  

 
  constructor(private http: HttpClient) {}

  login(user: Partial<Customer>): Observable<{ [key: string]: string }> {
    
  }

  getToken() {
    
  }
  getRole()
  {
    
  }
  getUsers(): Observable<Customer[]> {
    
  }

  createUser(user: Customer): Observable<Customer> {
  }
=======

export class AuthService {
  
>>>>>>> 9068d3cb007e3facb0f775f6314a5efc24ec142c
}
