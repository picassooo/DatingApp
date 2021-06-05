import { Member } from './../_models/member';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl=environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMembers():Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl+'users');
  }

  getMember(username:string){
    return this.http.get<Member>(this.baseUrl+'users/'+username);
  }
}