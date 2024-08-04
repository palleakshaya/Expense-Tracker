import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private API = `https://669a42819ba098ed61fef6ab.mockapi.io/users`;
  constructor() {}
  getUserDetailsById(id: string) {
    return fetch(
      `https://669a42819ba098ed61fef6ab.mockapi.io/users/${id}`
    ).then((res) => res.json());
  }
  // login(email: string, password: string) {
  //   return fetch(`${this.API}/users?email=${email}&password=${password}`);
  // }
}
