import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    const success = this.userService.login(this.email, this.password);

    if (success) {
      this.message = 'Login successful! Redirecting to dashboard...';
      setTimeout(() => this.router.navigate(['/dashboard']), 2000);
    } else {
      this.message = 'Invalid email or password.';
    }
  }
}
