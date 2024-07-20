import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TermsComponent } from './terms/terms.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TermsComponent,
    ReviewComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
