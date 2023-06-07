import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../Entitiy/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeSerice: EmployeeService) {}

  @Post()
  getEmployee(@Body() data: Employee) {
    // console.log(data);
    return this.employeeSerice.getEmployees(data);
  }

  @Get()
  getRecords() {
    return this.employeeSerice.getRecords();
  }
}
