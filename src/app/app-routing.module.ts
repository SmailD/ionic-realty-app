import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'property-list', pathMatch: 'full' },
  { path: 'property-list', loadChildren: './pages/property-list/property-list.module#PropertyListPageModule' },
  { path: 'property-details/:id', loadChildren: './pages/property-details/property-details.module#PropertyDetailsPageModule' },
  { path: 'favorite-list', loadChildren: './pages/favorite-list/favorite-list.module#FavoriteListPageModule' },
  { path: 'broker-list', loadChildren: './pages/broker-list/broker-list.module#BrokerListPageModule' },
  { path: 'broker-details/:id', loadChildren: './pages/broker-details/broker-details.module#BrokerDetailsPageModule' },
  { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
