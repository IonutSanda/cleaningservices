import { ButtonModule } from 'primeng/button';
import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TabMenuModule, DividerModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly router = inject(Router);

  public items!: MenuItem[];
  public activeItem!: MenuItem;

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Acasa',
        icon: 'bi bi-house-door',
        routerLink: '/home',
      },
      {
        label: 'Servicii',
        icon: 'bi bi-list-check',
        routerLink: '/offers',
      },
      {
        label: 'Dotari',
        icon: 'bi bi-box',
        routerLink: '/equipment',
      },
      {
        label: 'Despre noi',
        icon: 'pi pi-fw pi-id-card',
        routerLink: '/about',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-book',
        routerLink: '/contact',
      },
    ];

    this.activeItem = this.items[0];
  }

  public navigateHome() {
    this.router.navigate(['/home']);
  }
}
