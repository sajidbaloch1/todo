import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './shared/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  data!: FormGroup;
  constructor(
    private employeeSerice: EmployeeService,
    private fb: FormBuilder
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
        window.location.reload();
      },
    });
  }
}
