import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TYPOGRAPHYS } from '../../../app.constants';
import { Typography, TypographyDirective } from 'coin-ui';
import { ITypografy } from '../../../app.interfaces';

@Component({
  selector: 'app-typography-docs',
  templateUrl: './typography-docs.component.html',
  styleUrl: './typography-docs.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TypographyDirective
  ]
})
export class TypographyDocsComponent {

  typographys: ITypografy[] = TYPOGRAPHYS;

  getTypography(category:string, size:string): Typography {
    return `${category}-${size}` as unknown as Typography;
  }
}
