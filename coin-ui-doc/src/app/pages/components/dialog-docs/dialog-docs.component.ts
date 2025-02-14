import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, TypographyDirective } from 'coin-ui';

@Component({
  selector: 'app-dialog-docs',
  templateUrl: './dialog-docs.component.html',
  styleUrl: './dialog-docs.component.scss',
  imports: [
    CommonModule,
    TypographyDirective,
    DialogComponent
  ],
})
export class DialogDocsComponent {

  viewDialog: boolean = false;

  codeHtml: string =`
    <ng-container *ngIf="viewDialog">
      <ci-dialog>
        <div class="ci-fr ci-jce ci-px-sm ci-cursor-pointer"
          (click)="closeViewDialog()">
          <span ci-typography="heading-xs" color="gray-900" weight="bold">
            X
          </span>
        </div>
        <div class="ci-p-xl">
          <p ci-typography="body-md" color="gray-600" weight="regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </ci-dialog>
    </ng-container>`;

    codeTypescript: string = `
    import { CommonModule } from '@angular/common';
    import {
      DialogComponent,
      TypographyDirective
    } from 'coin-ui';

    @Component({
      selector: 'app-component-name',
      templateUrl: './component-name.component.html',
      styleUrl: './component-name.component.scss',
      standalone: true,
      imports: [
        CommonModule,
        TypographyDirective,
        DialogComponent
      ]
    })
    export class ComponentNameComponent {

      viewDialog: boolean = false;

      openViewDialog(): void {
        this.viewDialog = true;
      }

      closeViewDialog(): void {
        this.viewDialog = false;
      }

      ...
    }`;

  openViewDialog(): void {
    this.viewDialog = true;
  }

  closeViewDialog(): void {
    this.viewDialog = false;
  }
}
