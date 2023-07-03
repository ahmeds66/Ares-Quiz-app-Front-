import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ThemesComponent } from './Theme/themes/themes.component';
import { AddThemeComponent } from './Theme/add-theme/add-theme.component';
import { QuizComponent } from './Quiz/quiz/quiz.component';
import { AddQuizComponent } from './Quiz/add-quiz/add-quiz.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuizInfoComponent } from './Quiz/quiz-info/quiz-info.component';
import { AddQuestionComponent } from './Quiz/quiz-info/add-question/add-question.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ThemesComponent,
    AddThemeComponent,
    QuizComponent,
    AddQuizComponent,
    QuizInfoComponent,
    AddQuestionComponent,
    UsersComponent,
    AddUserComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
