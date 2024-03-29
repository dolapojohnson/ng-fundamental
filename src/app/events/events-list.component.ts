import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ToastrService } from '../common/toastr.service'
import { IEvent } from './shared/index'
import { EventService } from './shared/event.service'


@Component({
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
  events: IEvent[] = []

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
    console.log('clicked')
  }
}