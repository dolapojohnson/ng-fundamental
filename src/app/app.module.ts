import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { EventAppComponent } from './events-app.component';

import {
    EventDetailsComponent,
    EventsListComponent,
    EventListResolver,
    EventRouteActivator,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent
} from './events/index'

import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './route';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator, 
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver
  ],
  bootstrap: [EventAppComponent]
})

export class AppModule { }

export function checkDirtyState( component: CreateEventComponent ) {
  if (component.isDirty)
    return window.confirm('You have not save this event, do you really want to cancel?')
  return true
}
