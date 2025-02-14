import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonSize, ButtonType } from '../../types/button';
import { IconName, IconSize } from '../../types/icon';
import { Color, Typography } from '../../types';
import { TypographyDirective } from '../../directives';

@Component({
  selector: 'ci-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [
    CommonModule,
    NgClass,
    IconComponent,
    TypographyDirective
  ],
  standalone: true
})
export class ButtonComponent implements OnInit {

  @Input() public type: ButtonType = 'primary';
  @Input() public size: ButtonSize = 'md';
  @Input() public text: string = '';
  @Input() public icon!: IconName;
  @Input() public disabled: boolean = false;
  @Input() public full: boolean = false;

  ngOnInit(): void { }

  getTypography(): Typography {
    if(this.size === 'lg') {
      return 'heading-xs';
    }else if(this.size === 'md') {
      return 'body-sm';
    } else {
      return 'body-xxs';
    }
  }

  getSizeIcon(): IconSize {
    if(this.size === 'lg') {
      return 'md';
    }else if(this.size === 'md') {
      return 'sm';
    } else {
      return 'xs';
    }
  }

  getColor(): Color {

    if(this.type === 'primary') {

      if(this.disabled) {
        return 'gray-100';
      }

      return 'gray-0';
    }
    else if(this.type === 'secundary') {

      if(this.disabled) {
        return 'gray-300';
      }

      return 'gray-500';
    }
    else {

      if(this.disabled) {
        return 'gray-300';
      }

      return 'gray-500';
    }
  }

  getButtonClasses() {
    return {
      ['ci-button-' + this.type]: true,
      'ci-button-full': this.full,
      'ci-px-lg ci-py-md': this.size === 'lg',
      'ci-px-md ci-py-sm': this.size === 'md',
      'ci-px-sm ci-py-xs': this.size === 'sm'
    };
  }

}
