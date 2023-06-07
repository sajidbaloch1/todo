import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../shared/employee/employee.service';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  data!: FormGroup;
  constructor(
    private employeeSerice: EmployeeService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.data = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
    // console.log(this.data);
  }
  onSubmit() {
    const employee = this.data.value;
    this.employeeSerice.getPostData(employee).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.route.navigate(['/']);
      },
    });
  }
}
