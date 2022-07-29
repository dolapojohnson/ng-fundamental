import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Create Event Form will go here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="marg-left btn btn-secondary" (click)="cancel()">Cancel</button>
        </div>
    `,
    styles: [
        `.marg-left { margin-left: 10px;}`
    ]
})

export class CreateEventComponent {
    isDirty:boolean = true
    constructor(private router: Router) {}
    
    cancel() {
        this.router.navigate(['/events'])
    }
}