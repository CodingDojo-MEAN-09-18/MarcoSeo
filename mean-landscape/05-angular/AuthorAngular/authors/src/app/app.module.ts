import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorNewComponent,
    AuthorHomeComponent,
    AuthorDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
