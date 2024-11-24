import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const success = this.userService.register(this.username, this.password, this.email);

    if (success) {
      this.message = 'Registration successful! Redirecting to login...';
      setTimeout(() => this.router.navigate(['/login']), 2000);
    } else {
      this.message = 'User with this email already exists.';
    }
  }
}
