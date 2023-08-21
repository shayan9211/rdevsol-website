import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  fetchGreeting() {
      this.http.get<{message: string}>('http://127.0.0.1:5000/api/greeting').subscribe(data => {
          console.log(data.message);
      });
  }
}
