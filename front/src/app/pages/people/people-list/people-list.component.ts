import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PeopleService} from "../../../../shared/services/people.service";
import {PeopleModel} from "../../../../shared/models/people.model";
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ConfirmDialogComponent} from "../../../components/confirm-dialog/confirm-dialog.component";
import {MatPaginator} from "@angular/material/paginator";
import {PeopleAddComponent} from "../people-add/people-add.component";
import {PeopleDetailsComponent} from "../people-details/people-details.component";
import {PeopleSearchComponent} from "../people-search/people-search.component";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['id', 'name', 'options'];
  peopleList!: PeopleModel[];
  dataSource: MatTableDataSource<PeopleModel> = new MatTableDataSource<PeopleModel>([]);
  loading: boolean = true;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private peopleService: PeopleService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getPeopleList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
  }

  getPeopleList() {
    this.loading = true;
    this.peopleService.peoples.subscribe((data: PeopleModel[]) => {
      this.peopleList = data;
      this.loading = false;
      this.dataSource.data = this.peopleList;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PeopleAddComponent, {
      width: '800px',
      data: new PeopleModel(0, "")
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPeopleList();
    });
  }

  openSearch(): void {
    const dialogRef = this.dialog.open(PeopleSearchComponent, {width: '800px'});

    dialogRef.afterClosed().subscribe(() => {
      this.getPeopleList();
    });
  }

  deletePeople(people: PeopleModel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: "¿Está seguro de que desea eliminar la persona " + people.name + "?"
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.peopleService.delete(people).subscribe(() => {
            this.getPeopleList();
          });
        }
      })
  }

  openPeopleDetails(element: PeopleModel): void {
    const dialogRef = this.dialog.open(PeopleDetailsComponent, {
      width: '800px',
      data: element
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPeopleList();
    })
  }
}
