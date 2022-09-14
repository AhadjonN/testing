import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LayoutModule } from '@app/ui/theme/layout';
import { BookingPageComponent } from './booking/page/booking-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      //routes
    ],
  },
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
