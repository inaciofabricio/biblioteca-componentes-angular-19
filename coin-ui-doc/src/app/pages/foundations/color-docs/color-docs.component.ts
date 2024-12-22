import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COLORS } from '../../../app.constants';
import { TypographyDirective, CardComponent, DialogComponent, Color } from 'coin-ui';

@Component({
    selector: 'app-color-docs',
    templateUrl: './color-docs.component.html',
    styleUrl: './color-docs.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        CardComponent,
        TypographyDirective,
        DialogComponent
    ],
})
export class ColorDocsComponent {

    colors: any = COLORS;
    copied: boolean = false;
    content: string = "";

    copyText(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            this.content = text;
            this.copied = true;

            setTimeout(() => {
                this.copied = false;
            }, 2000);

        }).catch(err => {
            console.error('Erro ao copiar:', err);
        });
    }

    getColorValue(color: any, item: any): Color {

        if(!color || !item) {
            return "gray-900";
        }

        return `${color.id}-${item.name}` as unknown as Color;
    }

}
