import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public items!: MenuItem[];
  public activeItem!: MenuItem;

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Acasa',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Servicii',
        icon: 'pi pi-fw pi-cog',
      },
      {
        label: 'Dotari',
        icon: 'pi pi-fw pi-briefcase',
      },
      {
        label: 'Despre noi',
        icon: 'pi pi-fw pi-id-card',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-book',
      },
    ];

    this.activeItem = this.items[0];
  }
}
