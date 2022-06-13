import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name: string = '';
  @Input() img: string = '';
  @Input() spicies: string = '';
  @Input() id: number = NaN;

}
