import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="container well hoverwell thumbnail margin-bottom">
            <h2>{{event.name | uppercase}}</h2>
            <div>Date: {{event?.date | date: 'shortDate'}}</div>
            <div>Time: {{event?.time}}</div>
            <div>Price: {{event?.price | currency: 'USD'}}</div>
            <div>
                <span>Location: {{event?.location.address}}</span>
                <span class="pad-left">{{event?.location.city}}, {{event.location.country}}</span>
            </div>
        <div>
    `,
    styles: [`
        .pad-left { margin-left: 7px; }
        .margin-bottom {margin-bottom: 20px;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: any

    logFoo() {
        console.log('foo')
    }
}