import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISize } from '../../../app.interfaces';
import { SIZES } from '../../../app.constants';
import { DialogComponent, TypographyDirective } from 'coin-ui';

@Component({
	selector: 'app-padding-docs',
	templateUrl: './padding-docs.component.html',
	styleUrl: './padding-docs.component.scss',
	standalone: true,
	imports: [
		CommonModule,
		TypographyDirective,
		DialogComponent
	]
})
export class PaddingDocsComponent {

	sizes: ISize[] = SIZES;
	copied: boolean = false;
	content: string = "";

	copyText(text: string) {
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

	getClassValue(size: any, item: any): string {
		return `ci-p${size.id}-${item.name}`;
	}

}