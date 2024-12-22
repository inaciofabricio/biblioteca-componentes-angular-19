import { Routes } from '@angular/router';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ComponentsComponent } from './pages/components/components.component';
import { ButtonDocsComponent } from './pages/components/button-docs/button-docs.component';
import { CardDocsComponent } from './pages/components/card-docs/card-docs.component';
import { IconDocsComponent } from './pages/components/icon-docs/icon-docs.component';
import { FoundationsComponent } from './pages/foundations/foundations.component';
import { BackgroundDocsComponent } from './pages/foundations/background-docs/background-docs.component';
import { ColorDocsComponent } from './pages/foundations/color-docs/color-docs.component';
import { MarginDocsComponent } from './pages/foundations/margin-docs/margin-docs.component';
import { PaddingDocsComponent } from './pages/foundations/padding-docs/padding-docs.component';
import { TypographyDocsComponent } from './pages/foundations/typography-docs/typography-docs.component';
import { BorderDocsComponent } from './pages/foundations/border-docs/border-docs.component';
import { BorderRadiusDocsComponent } from './pages/foundations/border-radius-docs/border-radius-docs.component';
import { BoxShadowDocsComponent } from './pages/foundations/box-shadow-docs/box-shadow-docs.component';

export const routes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/button', component: ButtonDocsComponent },
  { path: 'components/card', component: CardDocsComponent },
  { path: 'components/icon', component: IconDocsComponent },
  { path: 'foundations', component: FoundationsComponent },
  { path: 'foundations/background', component: BackgroundDocsComponent },
  { path: 'foundations/border', component: BorderDocsComponent },
  { path: 'foundations/border-radius', component: BorderRadiusDocsComponent },
  { path: 'foundations/box-shadow', component: BoxShadowDocsComponent },
  { path: 'foundations/color', component: ColorDocsComponent },
  { path: 'foundations/margin', component: MarginDocsComponent },
  { path: 'foundations/padding', component: PaddingDocsComponent },
  { path: 'foundations/typography', component: TypographyDocsComponent },
  { path: '', redirectTo: 'get-started', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]