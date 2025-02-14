import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, ButtonSize, ButtonType, DialogComponent, IconName, TypographyDirective } from 'coin-ui';
import { SIZES, TYPES } from './button-docs.constants';
import { ICON_NAMES } from '../components.constants';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html',
  styleUrl: './button-docs.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    TypographyDirective,
    ButtonComponent,
    DialogComponent
  ]
})
export class ButtonDocsComponent {

  type: ButtonType = "primary";
  size: ButtonSize = "md";
  text: string = "Lorem";
  icon: IconName = "ancient-gate";
  disabled: boolean = false;
  fakeDisabled: string = "false";
  full: boolean = false;
  fakeFull: string = "false";

  types: ButtonType[] = TYPES;
  sizes: ButtonSize[] = SIZES;
  icons: IconName[] = ICON_NAMES;
  booleanOptions: string[] = ["true", "false"];

  viewIcon: boolean = false;

  codeHtml: string = `
    <ci-button
      [type]="type" [size]="size" [text]="text"
      [icon]="icon" [disabled]="disabled" [full]="full">
    </ci-button>`;

  codeTypescript: string = `
    import {
      ButtonComponent
    } from 'coin-ui';

    @Component({
      selector: 'app-component-name',
      templateUrl: './component-name.component.html',
      styleUrl: './component-name.component.scss',
      standalone: true,
      imports: [
        ButtonComponent
      ]
    })
    export class ComponentNameComponent {

      type: ButtonType = "primary";
      size: ButtonSize = "md";
      text: string = "Lorem";
      icon: IconName = "ancient-gate";
      disabled: boolean = false;
      full: boolean = false;

      ...
    }`;

  openViewIcon(): void {
    this.viewIcon = !this.viewIcon;
  }

  closeViewIcon(): void {
    this.viewIcon = false;
  }

  setType(item: ButtonType): void {
    this.type = item;
  }

  setSize(item: ButtonSize): void {
    this.size = item;
  }

  setIcon(item: IconName): void {
    this.icon = item;
    this.closeViewIcon();
  }

  setDisabled(item: string): void {
    this.disabled = item === "true";
    this.fakeDisabled = item;
  }

  setFull(item: string): void {
    this.full = item === "true";
    this.fakeFull = item;
  }
}
