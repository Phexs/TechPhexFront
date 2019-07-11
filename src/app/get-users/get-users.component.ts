import { Component, OnInit } from '@angular/core';
import { Users } from '../api/user';
import { MysqlService } from '../mysql.service';

@Component({

  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
    usersMysql: Users[];
  // usersLocal = [];
  // textLocal: String;
public Users = [];
  
constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
          this._mysqlService.getUsers()
            .subscribe(data => this.Users = data);
    // this.getTextLocal();
    // this.getUsersMysql();
    // this.getUsersLocal();
  }

  // private getUsersMysql() {
  //   this._mysqlService.getMysqlUsersDatas()
  //     .subscribe(
  //       res => this.usersMysql = res,
  //       err => console.error(err.status)
  //     );
  // }

  // private getUsersLocal() {
  //   this._mysqlService.getLocalUsersDatas()
  //     .subscribe(
  //       res => this.usersLocal = res,
  //       err => console.error(err.status)
  //     );
  // }

  // private getTextLocal() {
  //   this._mysqlService.getLocalTextDatas()
  //     .subscribe(
  //       res => this.textLocal = res,
  //       err => console.error(err.status)
  //     );
  // }
}
