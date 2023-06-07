import { Route } from '@angular/router';
import { NgrxComponent } from './ngrx/ngrx.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
  },
];
