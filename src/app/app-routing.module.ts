import {Routes, RouterModule} from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
const appRoutes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CourseTableComponent},
  {path: 'courses/:courseId/modules', component: CourseNavigatorComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseNavigatorComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseNavigatorComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets', component: CourseNavigatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
