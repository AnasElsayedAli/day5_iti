import { Component } from '@angular/core';
import { UserCard } from '../user-card/user-card';

@Component({
  selector: 'app-body',
  imports: [UserCard],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
