import { Component, Input } from "@angular/core";
import { ISession } from "../shared";

@Component({
     selector: 'session-list',
     templateUrl: 'session-list.component.html',
     styles: [
          `
               .pad { padding: 20px; }
               .marg-bottom { margin-bottom: 20px; }
          `
     ]
})

export class SessionListComponent {
     @Input() sessions: ISession[] = [];
}