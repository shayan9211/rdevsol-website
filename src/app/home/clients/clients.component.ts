import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://127.0.0.1:5000/').subscribe((data) => {
      console.log(data);
    });
  }
}
