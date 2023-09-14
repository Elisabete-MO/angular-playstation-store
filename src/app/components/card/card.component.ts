import { Component } from '@angular/core';
import { data } from '../../data/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  data:{id:number, img:string, name:string, label?:string, value:string, consoles:string[]}[] = data;
}
