import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Travel Wishlist';
  agregar(titulo: HTMLInputElement)
  {
    this.title = titulo.value;
    console.log(titulo.value);
  }
}
