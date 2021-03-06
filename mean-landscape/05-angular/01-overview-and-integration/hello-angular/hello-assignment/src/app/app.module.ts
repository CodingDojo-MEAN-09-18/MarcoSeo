import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fromBooks from './books';

import * as fromServices from './services';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [AppComponent, ...fromBooks.components, SearchPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
