import { Component, OnInit } from '@angular/core'
import { ToastrService } from '../common/toastr.service'
import { EventService } from './shared/event.service'


@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-4">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" #thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .marg-bottom { margin-bottom: 10px; }
        `
    ]
})

export class EventsListComponent implements OnInit {
  events: any = []

  constructor(private eventService: EventService, private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
    console.log('clicked')
  }
}