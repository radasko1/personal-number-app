import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalCodeModule } from './code-module/personal-code.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, PersonalCodeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
