import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { CsCoreComponent } from './cs-core/cs-core.component';
import { SGComponent } from './sg/sg.component';
import { AMComponent } from './am/am.component';
import { AlumniComponent } from './alumni/alumni.component';

const peopleRoutes: Routes = [
  { path: '', redirectTo: 'cscoreteam', pathMatch: 'full'},
  { path: 'cscoreteam', component: CsCoreComponent },
  { path: 'studentguides', component: SGComponent },
  { path: 'academicmentors', component: AMComponent },
  { path: 'alumni-memoirs', component: AlumniComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(peopleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeopleRouterModule {}
