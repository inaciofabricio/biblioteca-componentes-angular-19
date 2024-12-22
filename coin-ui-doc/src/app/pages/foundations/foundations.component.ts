import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, TypographyDirective } from 'coin-ui';

@Component({
  selector: 'app-foundations',
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.scss',
  imports: [
    RouterLink,
    CardComponent,
    TypographyDirective
  ],
  standalone: true
})
export class FoundationsComponent {

}
