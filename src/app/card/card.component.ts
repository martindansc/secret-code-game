import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {

  @Input()  color: string;
  @Input()  name: string;
  @Input()  narrator: boolean;
  h1Style = null;
  constructor() { }

  ngOnInit() {
  
  }

  change(){
    this.h1Style = this.color;
    this.name ='';
  }

}
