import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonSize, ButtonType } from '../../types/button';
import { IconName } from '../../types/icon';

@Component({
  selector: 'ci-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [NgClass, IconComponent],
  standalone: true
})
export class ButtonComponent implements OnInit {

  @Input() public type: ButtonType = 'primary';
  @Input() public size: ButtonSize = 'md';
  @Input() public text: string = '';
  @Input() public icon!: IconName;

  ngOnInit(): void {

  }
}
