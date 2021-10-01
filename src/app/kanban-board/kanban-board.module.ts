import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardComponent } from './kanban-board.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxNavbarModule, IgxIconModule, IgxAvatarModule, IgxInputGroupModule, IgxButtonModule, IgxCardModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KanbanBoardComponent,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxCardModule,
    FormsModule
  ]
})
export class KanbanBoardModule {
}
