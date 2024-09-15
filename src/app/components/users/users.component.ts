import { Component,OnInit  } from '@angular/core';
import { DataService } from '../../services/data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users:any;
  usersAgeFiltered:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  confirm(){
    this.dataService.getInfo().subscribe((resp:any)=>{
      this.users=resp;
      this.usersAgeFiltered = this.users.filter((user:any)=>user.age>30); //using rxjs filter operator
    });
  }

}
