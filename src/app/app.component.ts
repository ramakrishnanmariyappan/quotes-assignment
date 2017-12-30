import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes: any = 'click to get the qoutes';
  constructor(private http: Http) {
  }
  getQuotes() {
    this.http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').subscribe((data) => {
      this.quotes = data.json();
    });
  }
}
