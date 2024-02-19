import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  public content = `Curatarea geamurilor, balustradelor, usilor, tocurilor,
  intrerupatoarelor, lustrelor, etc. Aspirarea prafului, a peretilor,
  canapelelor si fotolilor. Dezinfectarea grupurilor sanitare. Curatarea
  geamurilor, balustradelor, usilor, tocurilor, intrerupatoarelor,
  lustrelor, etc. Aspirarea prafului, a peretilor, canapelelor si
  fotolilor. Dezinfectarea grupurilor sanitare.Curatarea geamurilor, balustradelor, usilor, tocurilor,
  intrerupatoarelor, lustrelor, etc. Aspirarea prafului, a peretilor,
  canapelelor si fotolilor. Dezinfectarea grupurilor sanitare. Curatarea
  geamurilor, balustradelor, usilor, tocurilor, intrerupatoarelor,
  lustrelor, etc. Aspirarea prafului, a peretilor, canapelelor si
  fotolilor. Dezinfectarea grupurilor sanitare.Curatarea geamurilor, balustradelor, usilor, tocurilor,
  intrerupatoarelor, lustrelor, etc. Aspirarea prafului, a peretilor,
  canapelelor si fotolilor. Dezinfectarea grupurilor sanitare. Curatarea
  geamurilor, balustradelor, usilor, tocurilor, intrerupatoarelor,
  lustrelor, etc. Aspirarea prafului, a peretilor, canapelelor si
  fotolilor. Dezinfectarea grupurilor sanitare.`;

  public showContent = false;

  public getDisplayedContent() {
    return this.showContent ? this.content : this.content.substring(0, 100);
  }

  public toggleContent() {
    this.showContent = !this.showContent;
  }
}
