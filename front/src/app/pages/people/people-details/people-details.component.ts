import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PeopleModel} from "../../../../shared/models/people.model";
import {ConfirmDialogComponent} from "../../../components/confirm-dialog/confirm-dialog.component";
import {PeopleService} from "../../../../shared/services/people.service";

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PeopleDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public people: PeopleModel,
    public dialog: MatDialog,
    public peopleService: PeopleService,
  ) {}

  ngOnInit(): void {
  }

  closeDetails() {
    this.dialogRef.close();
  }

  deleteUser() {
    this.dialog.open(ConfirmDialogComponent, {
      data: "¿Está seguro de que desea eliminar a la persona " + this.people.name + "?"
    })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.peopleService.delete(this.people).subscribe();
          this.closeDetails();
        }
      })
  }
}
