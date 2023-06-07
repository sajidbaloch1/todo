import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../Entitiy/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeRepo: Repository<Employee>
  ) {}

  async getEmployees(employee: Employee) {
    // console.log(employee);
    const data = employee;
    return await this.employeRepo.save(data);
  }

  async getRecords() {
    return await this.employeRepo.find();
  }
}
