import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogComponent, TypographyDirective } from 'coin-ui';
import { SIZES_BOX_SHADOW, SIZES_CATEGORY } from '../../../app.constants';

@Component({
	selector: 'app-box-shadow-docs',
	templateUrl: './box-shadow-docs.component.html',
	styleUrl: './box-shadow-docs.component.scss',
	standalone: true,
	imports: [
		CommonModule,
		TypographyDirective,
		DialogComponent
	]
})
export class BoxShadowDocsComponent {

	categories: any = SIZES_CATEGORY;
	sizes: any = SIZES_BOX_SHADOW;
	copied: boolean = false;
	content: string = "";

	copyText(category: string, size: any) {

		if (!category || !size) {
			return
		}

		const text = this.getBorderValue(category, size);

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

	getBorderValue(category: string, size: any): string {

		if (!category || !size) {
			return ""
		}

		const c = category === 'Complete' ? '' : category.toLowerCase();

		if (c) {
			return `ci-box-shadow-${c}-${size.name}`;
		} else {
			return `ci-box-shadow-${size.name}`;
		}

	}

	getBorderCatgoryValue(category: string): string {

		if (!category) {
			return ""
		}

		return category === 'Complete' ? '' : `${category.toLowerCase()}-`;
	}

}
