import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {FormControl, Validators} from "@angular/forms";
import {PeopleModel} from "../../../../shared/models/people.model";
import {PeopleService} from "../../../../shared/services/people.service";

@Component({
  selector: 'app-people-add',
  templateUrl: 'people-add.component.html',
  styleUrls: ['./people-add.component.scss']
})

export class PeopleAddComponent implements OnInit {
  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    //  To accept only alphabets and space.
    Validators.pattern('^[a-zA-Z ]*$')
  ])

  constructor(
    public dialogRef: MatDialogRef<PeopleAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeopleModel,
    public peopleService: PeopleService
  ) {
  }

  ngOnInit(): void {
  }

  get invalid() { return this.name.invalid }

  close(): void {
    this.dialogRef.close();
  }

  savePeople() {
    if (this.name.valid) {
      this.data.name = this.name.value;

      this.peopleService.save(this.data).subscribe(() => {
        this.dialogRef.close();
      })
    }
  }

}
