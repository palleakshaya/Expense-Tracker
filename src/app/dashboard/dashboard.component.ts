import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatListModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  balance: any;
  recentTransactions: any;
  savingsGoals: any;
  isLoading: boolean = true;
  msg = '';
  user: any;

  trustedUrl!: SafeUrl;

  constructor(
    private movieService: ExpenseService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.movieService
      .getUserDetailsById(id)
      .then((data) => {
        this.user = data;
        this.isLoading = false;
        // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(

        // );
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
}
