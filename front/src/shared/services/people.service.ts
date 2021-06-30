import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {PeopleModel} from "../models/people.model";

@Injectable()
export class PeopleService {

  private readonly peopleUrl: string;
  private peopleList!: PeopleModel[];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.peopleUrl = environment.url + '/people';
  }

  private findAll(): Observable<PeopleModel[]> {
    return this.http.get(this.peopleUrl + "/all").pipe(
      map((res: any) => {
        this.peopleList = res.map((people: any) => PeopleModel.fromJsonObject(people));
        return this.peopleList;
      }),
      catchError(() => {
        this.snackBar.open('Hubo un error al traer a las personas.', '', {
          duration: 2000,
        });
        return this.peoples;
      })
    );
  }

  public save(people: PeopleModel) {
    return this.http.post<PeopleModel>(this.peopleUrl, people).pipe(
      map((res: any) => {
        let resPeople: PeopleModel = PeopleModel.fromJsonObject(res);
        this.peopleList = [...this.peopleList, resPeople];
        this.snackBar.open('La persona fue guardada con éxito.', '', {
          duration: 2000,
        });
        return resPeople;
      }),
      catchError(() => {
        this.snackBar.open('Hubo un error al guardar a la persona.', '', {
          duration: 2000,
        });
        return this.peoples;
      })
    );
  }

  get peoples(): Observable<PeopleModel[]> {
    return this.peopleList
      ? new Observable<PeopleModel[]>((subscriber) => subscriber.next(this.peopleList))
      : this.findAll();
  }

  public delete(people: PeopleModel) {
    return this.http.delete<PeopleModel>(this.peopleUrl + "/" + people.id).pipe(
      map(() => {
        this.peopleList.splice(this.peopleList.findIndex(c => c.id === people.id), 1);
        this.snackBar.open('La persona fue eliminada con éxito.', '', {
          duration: 2000,
        });
        return this.peopleList;
      }),
      catchError(() => {
        this.snackBar.open('Hubo un error al eliminar a la persona.', '', {
          duration: 2000,
        });
        return this.peoples;
      })
    );
  }

  public getIds(name: string): Observable<number[]> {
    return this.http.get(this.peopleUrl + "/ids/" + name).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(() => {
        this.snackBar.open('Hubo un error al buscar los ids.', '', {
          duration: 2000,
        });
        return [];
      })
    )
  }
}
