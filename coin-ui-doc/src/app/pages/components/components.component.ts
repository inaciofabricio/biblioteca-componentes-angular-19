import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent, CardComponent, IconComponent, TypographyDirective } from 'coin-ui';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    TypographyDirective,
    ButtonComponent,
    CardComponent,
    IconComponent
  ]
})
export class ComponentsComponent {

}
