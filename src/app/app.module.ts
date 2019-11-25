import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CourseTableComponent} from './course-table/course-table.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app-routing.module';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient, TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
