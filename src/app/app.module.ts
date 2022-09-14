import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@app/ui/theme/layout';
import { HttpClientModule } from '@angular/common/http';
import { BookingPageRoutingModule } from './booking/page/booking-page-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, HttpClientModule, RouterModule.forRoot([])],
  providers: [AppComponent, BookingPageRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
