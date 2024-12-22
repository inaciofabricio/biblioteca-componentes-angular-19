import { Component } from '@angular/core';
import { TypographyDirective } from 'coin-ui';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  imports: [
    TypographyDirective
  ],
  standalone: true
})
export class GetStartedComponent {

}
