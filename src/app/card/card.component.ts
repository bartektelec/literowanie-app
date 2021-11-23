import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() imgAlt!: string;
  constructor() {}

  ngOnInit() {}
}
