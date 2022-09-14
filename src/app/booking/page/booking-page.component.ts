import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RoomFacade } from '../../rooms/state/room.facade';
import { RoomService } from '../../rooms/service';
import { Room } from '../../rooms/common/room.interface';

@Component({
  selector: 'app-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPageComponent implements OnInit {
  rooms$!: Observable<Room[]>;

  constructor(private readonly roomFacade: RoomFacade, private readonly roomService: RoomService) {}

  ngOnInit(): void {
    this.roomFacade.loadRooms();

    this.rooms$ = this.roomService.rooms$;
  }
}
