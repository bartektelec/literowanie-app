import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() imgSrc!: string;
  @Input() imgAlt!: string;
  currentIndex = 0;
  filledOutLetters = [];
  splitLetters = [];
  isShaking = false;
  constructor() {}

  getMixedLetters = () =>
    this.imgAlt.split('').sort(() => (Math.random() > 0.5 ? -1 : 1));

  clickLetter = (e: PointerEvent) => {
    const target = e.target as HTMLDivElement;
    console.log(this.imgAlt[this.currentIndex]);
    console.log(target.innerText);

    if (this.imgAlt[this.currentIndex] !== target.innerText.toLowerCase()) {
      this.shakeScreen();
      return;
    }

    this.currentIndex += 1;
    this.filledOutLetters = this.imgAlt
      .split('')
      .map((letter, i) => (i < this.currentIndex ? letter : null));
  };

  shakeScreen = () => {
    this.isShaking = true;
    setTimeout(() => {
      this.isShaking = false;
    }, 500);
  };

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    this.filledOutLetters = this.imgAlt.split('').map((x) => null);
    this.splitLetters = this.imgAlt.split('');

    while (this.splitLetters.join('') === this.imgAlt) {
      this.splitLetters = this.getMixedLetters();
    }
  }
}
