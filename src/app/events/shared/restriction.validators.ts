import { FormControl } from "@angular/forms"

//Custom Validator
export const restrictedWords = (words: any) => {
     return (control: FormControl): {[key: string]: any} => {
          if (!words) return {}

          var invalidWords = words
          .map((w: any) => control.value.includes(w) ? w: {})
          .filter((w: any) => w != true)
          return invalidWords && invalidWords.length > 0
          ? {'restrictedWords': invalidWords.join(',')}
          : {}
     }
}
//End of Custom Validation