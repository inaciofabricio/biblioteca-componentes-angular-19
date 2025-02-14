import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent, CardPadding, CardRadius, CardShadow, TypographyDirective } from 'coin-ui';

@Component({
  selector: 'app-card-docs',
  templateUrl: './card-docs.component.html',
  styleUrl: './card-docs.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TypographyDirective,
    CardComponent
  ]
})
export class CardDocsComponent {

  radius: CardRadius = "md";
  shadow: CardShadow = "md";
  padding: CardPadding = "md";

  radiusSizes: CardRadius[] = ["xxs","xs","sm","md","lg","xl","xxl"];
  shadowSizes: CardShadow[] = ["sm","md","lg"];
  paddingSizes: CardPadding[] = ["xxs","xs","sm","md","lg","xl","xxl"];

  codeHtml: string = `
    <ci-card [radius]="radius" [shadow]="shadow" [padding]="padding">
      <p ci-typography="body-md" color="gray-600" weight="regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        ...
      </p>
    </ci-card>`;

  codeTypescript: string = `
    import {
      CardComponent, CardPadding,
      CardRadius, CardShadow
    } from 'coin-ui';

    @Component({
      selector: 'app-component-name',
      templateUrl: './component-name.component.html',
      styleUrl: './component-name.component.scss',
      standalone: true,
      imports: [
        CardComponent
      ]
    })
    export class ComponentNameComponent {

      radius: CardRadius = "md";
      shadow: CardShadow = "md";
      padding: CardPadding = "md";

      ...
    }`;

  setRadius(item:CardRadius): void {
    this.radius = item;
  }

  setShadow(item:CardShadow): void {
    this.shadow = item;
  }

  setPadding(item:CardPadding): void {
    this.padding = item;
  }
}
