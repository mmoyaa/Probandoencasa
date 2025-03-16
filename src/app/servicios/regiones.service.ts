import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  private apiUrl = 'http://localhost:3000/regiones';  

  

  constructor(private http: HttpClient) { }

  getRegiones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
}


// otrogetregiones(){
//   return this.http.get<any>(this.apiUrl);
// }

}
