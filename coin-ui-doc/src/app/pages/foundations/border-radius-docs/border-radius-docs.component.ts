import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogComponent, TypographyDirective } from 'coin-ui';
import { SIZES_BORDER_RADIUS } from '../../../app.constants';
import { IItenSize } from '../../../app.interfaces';

@Component({
	selector: 'app-border-radius-docs',
	templateUrl: './border-radius-docs.component.html',
	styleUrl: './border-radius-docs.component.scss',
	standalone: true,
	imports: [
		CommonModule,
		TypographyDirective,
		DialogComponent
	]
})
export class BorderRadiusDocsComponent {

    sizes: IItenSize[] = SIZES_BORDER_RADIUS;
    copied: boolean = false;
    content: string = "";

    copyText(item: IItenSize) {

        const text: string = this.getClassValue(item);

        navigator.clipboard.writeText(text).then(() => {
            this.content = text;
            this.copied = true;

            setTimeout(() => {
                this.copied = false;
            }, 1000);

        }).catch(err => {
            console.error('Erro ao copiar:', err);
        });
    }

    getClassValue(item: IItenSize): string {
        return `ci-border-radius-${item.name}`;
    }
}
