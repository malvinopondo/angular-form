import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from'@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  name = new FormControl('');
}
