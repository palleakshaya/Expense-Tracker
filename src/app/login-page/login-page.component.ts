import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  login() {
    throw new Error('Method not implemented.');
  }
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public expenseService: ExpenseService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    });
  }
  // login(): void {
  //   this.expenseService.login(this.email, this.password).subscribe((users) => {
  //     if (users.length > 0) {
  //       const user = users[0];
  //       // Store user ID in local storage or a service
  //       localStorage.setItem('userId', user.id);
  //       // Redirect to dashboard or another route
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   });
  // }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
