import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boots-show',
  templateUrl: './boots-show.component.html',
  styleUrls: ['./boots-show.component.css']
})
export class BootsShowComponent {
  @Input() image= '';
  @Input() price= '';
}
