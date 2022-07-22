import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="container well hoverwell thumbnail margin-bottom">
            <h2>{{event.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div>Time: {{event?.time}}</div>
            <div [ngSwitch]="event?.time"]>
                <span *ngSwitchCase="'8:00 am'">Early Start</span>
                <span *ngSwitchCase="'10:00 am'">Late Start</span>
                <span *ngSwitchDefault>Normal Start</span>
            </div>
            <div>Price: \${{event?.price}}</div>
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
    @Input() event:any

    logFoo() {
        console.log('foo')
    }
}