import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [RouterModule, HeaderModule, MainModule, FooterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
