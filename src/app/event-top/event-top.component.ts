import { Component } from '@angular/core';

@Component({
  selector: 'app-event-top',
  templateUrl: './event-top.component.html',
  styleUrls: ['./event-top.component.css']
})
export class EventTopComponent {

  addHidden:Function = () =>{
    var top = document.querySelector("p") as HTMLElement;
    top.style.padding = '0';
    top.style.height = '0';
  }
}
