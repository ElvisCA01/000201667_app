import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {solicitudCar} from "../models/solicitudcar";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiURL = 'http://localhost:3000/Usuarios'

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url); //GET
  }
  public post(url:string,body:any){
    return this.http.post(url,body); //POST
  }
}
