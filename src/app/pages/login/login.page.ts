import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    localStorage.setItem('name',this.name);
    this.router.navigate(['home']);
  }

}
