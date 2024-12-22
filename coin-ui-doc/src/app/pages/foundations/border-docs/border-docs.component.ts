import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent, Color, DialogComponent, TypographyDirective } from 'coin-ui';
import { COLORS, SIZES_BORDER, SIZES_CATEGORY } from '../../../app.constants';

@Component({
    selector: 'app-border-docs',
    templateUrl: './border-docs.component.html',
    styleUrl: './border-docs.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        CardComponent,
        TypographyDirective,
        DialogComponent
    ]
})
export class BorderDocsComponent {

    colors: any = COLORS;
    categories: any = SIZES_CATEGORY;
    sizes: any = SIZES_BORDER;
    copied: boolean = false;
    content: string = "";

    copyText(category: string, color: any, itemColor: any, size:any) {

        if (!category || !color || !itemColor || !size) {
            return
        }

        const text = this.getBorderValue(category, color, itemColor, size);

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

    getBorderValue(category: string, color: any, itemColor: any, size:any): string {

        if (!category || !color || !itemColor || !size) {
            return ""
        }

        const c = category === 'Complete' ? '' : category.toLowerCase();

        if(c) {
          return `ci-border-${c}-${color.id}-${itemColor.name}-${size.name}`;
        } else {
          return `ci-border-${color.id}-${itemColor.name}-${size.name}`;
        }

    }
}
