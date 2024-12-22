import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { COLORS } from '../../constants/color.constants';
import { ICON_NAMES, ICON_SIZES } from '../../constants/icon.constants';
import { IconName, IconSize, IconType } from '../../types/icon';
import { Color } from '../../types/color';

@Component({
    selector: 'ci-icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
    standalone: true,
    imports: [],
})
export class IconComponent implements OnInit {

    @Input() name!: IconName;
    @Input() type!: IconType;
    @Input() size!: IconSize;
    @Input() color!: Color;

    sizePX!: number;
    colorHex!: string;
    pathImg!: string;
    svgContent: SafeHtml | null = null;

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {

        const sizes = ICON_SIZES;
        const sizePX = sizes[this.size];
        this.sizePX = sizePX ? sizePX : sizes['sm'];

        const colors = COLORS;
        const colorHex = colors[this.color];
        this.colorHex = colorHex ? colorHex : colors['gray-0'];

        if(!this.type) {
            console.error("IconComponent - 'type' não existem ou não informado!")
            return
        }

        const icon = this.findIconName(this.name);

        if (!icon) {
            console.error("IconComponent - 'name' não existem ou não informado!")
            return
        }

        this.loadIcon(icon);
    }

    private loadIcon(icon: { category: string; name: string }) {
        const path = `assets/coin-ui/imgs/${this.type}/${icon.category}/${icon.name}.svg`;
        this.http.get(path, { responseType: 'text' }).subscribe({
            next: (svg) => {
                const extractedPath = this.cleanSvg(svg);
                console.log(extractedPath)
                this.svgContent = this.sanitizer.bypassSecurityTrustHtml(extractedPath);
            },
            error: (err) => console.error(`IconComponent - Erro ao carregar o ícone: Type: ${this.type}, Name: ${this.name}`, err),
        });
    }

    private cleanSvg(svg: string): string {

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svg, 'image/svg+xml');

        const paths = svgDoc.querySelectorAll('path');
        paths.forEach((path) => path.removeAttribute('fill'));

        return Array.from(paths).map((p) => p.outerHTML).join('');
    }

    private findIconName(name: string): { category: string; name: string } | null {

        if(!name) {
            return null;
        }

        const iconNames = ICON_NAMES;

        for (const [category, icons] of Object.entries(iconNames) as [string, string[]][]) {
            if (icons.includes(name)) {
                return { category, name };
            }
        }

        return null;
    }

}
