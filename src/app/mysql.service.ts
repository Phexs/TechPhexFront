import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users} from './api/user';
// import { Observable } from 'rxjs/Observable';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MysqlService {
  private _url: string = "127.0.0.1:3306";
  constructor(public _http: HttpClient ) {
  }
getUsers(): Observable<Users[]>{
  return this._http.get<Users[]>(this._url);
}
}
//   public addMysqlUserDatas(_email: string, _password: string) {
//     const url = 'http://www.***127.0.0.1:3306***/post_users.php';
//     const headers = new HttpHeaders();
//     headers.append('Content-Type', 'application/x-www-form-urlencoded');
//     return this._http.post(url, {id: '', email: _email, password: _password}, { headers: headers})
//       .get((res: Response) => res.text())
//       .subscribe(res => {
//         console.log(res.toString());
//       }); 
//   }

//   public getMysqlUsersDatas() {
//     return this._http.get('http://www.***127.0.0.1:3306***/get_users.php')
//     /*.do(x => console.log(x))**/
//       .map(rep => rep.json());
//   }

//   public getLocalUsersDatas() {
//     return this._http.get('./assets/users.json')
//     /* .do(x => console.log(x))**/
//       .map(rep => rep.json());
//   }

//   public getLocalTextDatas() {
//     return this._http.get('./assets/read.txt')
//     /* .do(x => console.log(x))**/
//       .map(rep => rep.text());
//   }
// }


