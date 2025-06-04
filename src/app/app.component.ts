import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('my-app');

  constructor() {
    //localStorage.setItem('token','un token falso');
  }

  onClickCrear() : void {
    this.title.set('clicked');
    console.log('creado');
  }

}
