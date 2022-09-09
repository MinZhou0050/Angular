import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { SidebartComponent } from './components/sidebart/sidebart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebartComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    SidebartComponent
  ]
})
export class SharedModule { }
