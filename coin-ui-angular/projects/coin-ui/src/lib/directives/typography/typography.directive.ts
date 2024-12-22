import { Directive, ElementRef, Input, Renderer2, OnInit, OnChanges } from '@angular/core';
import { FontWeight, Typography } from '../../types/typography';
import { Color } from '../../types/color';

@Directive({
	selector: '[ci-typography]',
	standalone: true
})
export class TypographyDirective implements OnInit, OnChanges {

	@Input('ci-typography') typography!: Typography;
  @Input() color: Color | string = 'gray-900';
  @Input() weight: FontWeight = 'regular';

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	ngOnInit(): void {
		this.applyTypography();
	}

	ngOnChanges(): void {
		this.applyTypography();
	}

	private applyTypography(): void {
    this.clearClasses();
		this.setClass(`ci-typography-${this.typography}`);
		this.setClass(`ci-color-${this.color}`);
		this.setClass(`ci-font-weight-${this.weight}`);
	}

  private clearClasses(): void {
    const prefixList = ['ci-typography-', 'ci-color-', 'ci-font-weight-'];

    prefixList.forEach(prefix => {
      const classToRemove = Array.from(this.el.nativeElement.classList)
        .filter(cls => String(cls).startsWith(prefix));

      classToRemove.forEach(cls => this.el.nativeElement.classList.remove(cls));
    });
  }

	private setClass(className: string) {
		this.renderer.addClass(this.el.nativeElement, className);
	}
}
