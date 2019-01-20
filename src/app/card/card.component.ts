import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input()  color: string;
  @Input()  name: string;
  @Input('narrator') 
  get inarrator(): boolean {
    return this.narrator;
  }
  set inarrator(value: boolean) {
    this.narrator = "" + value !== "false";
  }

  cardColor = 'white';
  narrator : boolean;
  
  constructor() { }

  ngOnInit() {
    console.log(this.narrator);
    if(this.narrator) {
      this.cardColor = this.color;
    }
  }

  change(){
    this.cardColor = this.color;
    this.name ='';
  }

}
