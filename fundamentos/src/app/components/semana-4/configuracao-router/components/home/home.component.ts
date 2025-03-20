import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  id: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  paginaCarros() {
    this.router.navigate(['dashboard/carros']);
  }
}
