import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TermsComponent } from './terms/terms.component';
import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'review', component: ReviewComponent},
  { path: 'forms', component: FormComponent},
  { path: '', component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule]
})

export class AppRoutesModule{}
