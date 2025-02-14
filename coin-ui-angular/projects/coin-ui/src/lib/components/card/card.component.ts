import { Component, Input, OnInit } from '@angular/core';
import { CardPadding, CardRadius, CardShadow } from '../../types/card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ci-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [NgClass]
})
export class CardComponent implements OnInit {

  @Input() radius: CardRadius = "md";
  @Input() shadow: CardShadow = "md";
  @Input() padding: CardPadding = "md";

  ngOnInit(): void { }
}
