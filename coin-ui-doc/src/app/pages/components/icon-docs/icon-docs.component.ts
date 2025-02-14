import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Color, DialogComponent, IconComponent, IconName, IconSize, IconType, TypographyDirective } from 'coin-ui';
import { ICON_COLORS } from './icon-docs.constants';
import { ICON_NAMES } from '../components.constants';

@Component({
  selector: 'app-icon-docs',
  templateUrl: './icon-docs.component.html',
  styleUrl: './icon-docs.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TypographyDirective,
    IconComponent,
    DialogComponent
  ],
})
export class IconDocsComponent {

  name: IconName = "ancient-gate";
  type: IconType = "line";
  size: IconSize = "md";
  color: Color = "brand-300";

  iconNames: IconName[] = ICON_NAMES;
  sizeSizes: IconSize[] = ["xs","sm","md","lg","xl"];
  typeSizes: IconType[] = ["fill", "line"];
  iconColors: Color[] = ICON_COLORS;

  codeHtml: string =`
    <ci-icon [name]="name" [size]="size" [type]="type" [color]="color"></ci-icon>`;

  codeTypescript: string = `
    import {
      IconComponent,
      Color, IconName,
      IconSize, IconType
    } from 'coin-ui';

    @Component({
      selector: 'app-component-name',
      templateUrl: './component-name.component.html',
      styleUrl: './component-name.component.scss',
      standalone: true,
      imports: [
        IconComponent
      ]
    })
    export class ComponentNameComponent {

      name: IconName = "ancient-gate";
      type: IconType = "line";
      size: IconSize = "md";
      color: Color = "brand-300";

      ...
    }`;

  viewIconName: boolean = false;
  viewIconColor: boolean = false;

  openViewIconName(): void {
    this.viewIconName = !this.viewIconName;
  }

  closeViewIconName(): void {
    this.viewIconName = false;
  }

  openViewIconColor(): void {
    this.viewIconColor = !this.viewIconColor;
  }

  closeViewIconColor(): void {
    this.viewIconColor = false;
  }

  setName(item:IconName): void {
    this.name = item;
    this.openViewIconName();
  }

  setType(item:IconType): void {
    this.type = item;
  }

  setSize(item:IconSize): void {
    this.size = item;
  }

  setColor(item:Color): void {
    this.color = item;
    this.openViewIconColor();
  }
}
