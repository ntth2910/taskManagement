import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'kanban-board', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'kanban-board', loadChildren: () => import('./kanban-board/kanban-board.module').then(m => m.KanbanBoardModule) },
  { path: 'list-view', component: ListViewComponent, data: { text: 'List View' } },
  { path: 'search-bar', component: SearchBarComponent, data: { text: 'Search Bar' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
