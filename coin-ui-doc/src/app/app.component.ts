import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TypographyDirective } from 'coin-ui';
import { MENU } from './app.constants';
import { IMenu } from './app.interfaces';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        NgClass,

        TypographyDirective
    ]
})
export class AppComponent {

    currentRoute: string | undefined;
    currentSubRoute: string | undefined;

    menu: IMenu[] = MENU;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = String(event.urlAfterRedirects).substring(1).split("/")
                this.currentRoute = url[0];
                this.currentSubRoute = url[1];
            }
        });
    }

    openSubMenu(item: any): void {

        if(!item.subMenu) {
            return
        }

        item.visible = !item.visible;
    }


}
