import {Component, OnInit} from '@angular/core';
import {
  MatDialogRef,
} from '@angular/material/dialog';
import {FormControl, Validators} from "@angular/forms";
import {PeopleService} from "../../../../shared/services/people.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-people-search',
  templateUrl: 'people-search.component.html',
  styleUrls: ['./people-search.component.scss']
})

export class PeopleSearchComponent implements OnInit {
  displayedColumns: string[] = ['id'];
  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    //  To accept only alphabets and space.
    Validators.pattern('^[a-zA-Z ]*$')
  ]);
  ids!: number[];
  dataSource: MatTableDataSource<number> = new MatTableDataSource<number>([]);
  isLoading: boolean = false;
  isSended: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PeopleSearchComponent>,
    public peopleService: PeopleService
  ) {
  }

  ngOnInit(): void {
  }

  get invalid() {
    return this.name.invalid
  }

  close(): void {
    this.dialogRef.close();
  }

  findPeople() {
    this.isLoading = true;
    this.isSended = true;
    if (this.name.valid) {
      this.peopleService.getIds(this.name.value).subscribe((data: number[]) => {
        this.ids = data;
        this.dataSource.data = this.ids;
        this.isLoading = false;
      });
    }
  }

}
