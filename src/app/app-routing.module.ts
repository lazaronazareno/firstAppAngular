import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QDetailsComponent } from './q-details/q-details.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'list', component: QuotesListComponent},
  {path: `details/:id`, component: QDetailsComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
