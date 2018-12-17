import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "rct-forms";
  userRegForm;
  constructor() {
    this.userRegForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      age: new FormControl(),
      parents: new FormGroup({
        mother: new FormControl(),
        father: new FormControl()
      }),
      password: new FormControl(),
      location: new FormGroup({
        state: new FormControl(),
        address: new FormGroup({
          permanent: new FormControl(),
          temporary: new FormControl()
        }),
        country: new FormControl()
      }),
      skills: new FormArray([])
    });
  }

  addSkills() {
    const skillsFG = new FormGroup({
      name: new FormControl(),
      exp: new FormControl()
    });

    this.userRegForm.get("skills").push(skillsFG);
  }

  collectData() {
    console.log(this.userRegForm.value);
  }

  removeSkills(index) {
    this.userRegForm.get("skills").removeAt(index);
  }
}
