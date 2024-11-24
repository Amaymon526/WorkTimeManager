import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { username: string, password: string, email: string }[] = [];

  constructor() {}

  // Register a new user
  register(username: string, password: string, email: string): boolean {
    const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password
    const existingUser = this.users.find(user => user.email === email);

    if (existingUser) {
      return false; // User already exists
    }

    this.users.push({ username, password: hashedPassword, email });
    return true;
  }

  // Login user
  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email);

    if (user && bcrypt.compareSync(password, user.password)) {
      return true; // Login successful
    }

    return false; // Invalid credentials
  }
}
