import { Component, OnInit } from '@angular/core';
import {
  EmployeeService,
  IEmployees,
} from '../../shared/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employess: IEmployees[] = [];
  list: any;
  // items: { name: string }[] = [
  //   { name: 'Item 1' },
  //   { name: 'Item 2' },
  //   { name: 'Item 3' },
  //   // Add more items as needed
  // ];
  constructor(private employeService: EmployeeService) {}
  items: any = [
    {
      id: 1,
      name: 'item1',
      email: 'item@gmail.com',
      address: 'karachi',
    },
    {
      id: 2,
      name: 'item2',
      email: 'item@gmail.com',
      address: 'karachi',
    },
    {
      id: 3,
      name: 'item3',
      email: 'item@gmail.com',
      address: 'karachi',
    },
    {
      id: 4,
      name: 'item4',
      email: 'item@gmail.com',
      address: 'karachi',
    },
  ];
  // constructor() {}
  ngOnInit() {
    this.list = this.items;
    this.loadEmployees();
  }

  private loadEmployees() {
    this.employess = [];
    this.employeService.getdata().subscribe({
      next: (res) => {
        if (res.length >= 0) {
          this.employess = res;
          console.log(this.employess);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  onClick() {
    alert('hello');
  }

  addItem() {
    console.log();
  }

  deleteItem(id: number) {
    alert(id);
  }

  editItem(id: number) {
    alert(id);
  }
}
