import { Component } from '@angular/core';
import { DialogComponent, TypographyDirective } from 'coin-ui';
import { ALIGN_CONTENT, ALIGN_ITEMS, ALIGN_SELF, FLEX_BASIS, FLEX_GROW, FLEX_SHRINK, FLEX_WRAP, GAP, JUSTIFY_CONTENT } from '../../../app.constants';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-grid-docs',
	templateUrl: './grid-docs.component.html',
	styleUrl: './grid-docs.component.scss',
	standalone: true,
	imports: [
		CommonModule,
		TypographyDirective,
    DialogComponent
	],
})
export class GridDocsComponent {

	justifyContent: { id: string, name: string }[] = JUSTIFY_CONTENT;
	alignItems: { id: string, name: string }[] = ALIGN_ITEMS;
	alignContent: { id: string, name: string }[] = ALIGN_CONTENT;
	flexWrap: { id: string, name: string }[] = FLEX_WRAP;
	gap: { id: string, name: string }[] = GAP;

	flexGrow: { id: string, name: string }[] = FLEX_GROW;
	flexShrink: { id: string, name: string }[] = FLEX_SHRINK;
	flexBasis: { id: string, name: string }[] = FLEX_BASIS;
	alignSelf: { id: string, name: string }[] = ALIGN_SELF;

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
}
