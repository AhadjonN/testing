import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomStateModule } from '../../rooms/state/room-state.module';
import { RoomServiceModule } from '../../rooms/service';
import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';

@NgModule({
  imports: [CommonModule, BookingPageRoutingModule, RoomStateModule, RoomServiceModule],
  declarations: [BookingPageComponent],
})
export class BookingPageModule {}
