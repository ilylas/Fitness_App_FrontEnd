import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  private Url = "http://localhost:3000";

  constructor(private http :HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get<any>(this.Url+"/Exercices")
  }


}
