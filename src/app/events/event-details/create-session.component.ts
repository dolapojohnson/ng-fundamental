import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISession, restrictedWords } from "../shared";


@Component({
     templateUrl: './create-session.component.html',
     styles: [
          `
              em { float: right; color: #E05C65; padding-left: 10px; }
              .error input, .error select, .error textarea { background-color: #E3C3C5; }
              .error ::-webkit-input-placeholder { color: #999; }
              .error ::-moz-placeholder { color: #999; }
              .error :-moz-placeholder { color: #999; }
              .error :ms-input-placeholder { color: #999; }
              .marg-left { margin-left: 10px;}
          `
      ]
})

export class CreateSessionComponent {

     constructor(private router: Router){}

     newSessionForm:any = FormGroup
     name:any = FormControl
     presenter:any = FormControl
     duration:any = FormControl
     level:any = FormControl
     abstract:any = FormControl

     ngOnInit() {
          this.name = new FormControl('', Validators.required)
          this.presenter = new FormControl('', Validators.required)
          this.duration = new FormControl('', Validators.required)
          this.level = new FormControl('', Validators.required)
          this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])

          this.newSessionForm = new FormGroup({
               name: this.name,
               presenter: this.presenter,
               duration: this.duration,
               level: this.level,
               abstract: this.abstract
          })
     }


     saveSession(formValues: any) {
          let session:ISession = {
               id: 1,
               name: formValues.name,
               presenter: formValues.presenter,
               duration: +formValues.duration,
               level: formValues.level,
               abstract: formValues.abstract,
               voters: []
          }
          console.log(session)
          this.router.navigate(['/events'])
     }
}