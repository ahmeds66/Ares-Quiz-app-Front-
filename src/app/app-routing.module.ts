import { AddQuestionComponent } from './Quiz/quiz-info/add-question/add-question.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ThemesComponent } from './Theme/themes/themes.component';
import { AddThemeComponent } from './Theme/add-theme/add-theme.component';
import { QuizComponent } from './Quiz/quiz/quiz.component';
import { AddQuizComponent } from './Quiz/add-quiz/add-quiz.component';
import { QuizInfoComponent } from './Quiz/quiz-info/quiz-info.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashbord' , component: DashbordComponent },
  { path: '' , redirectTo: '/dashbord' , pathMatch: 'full' },
  { path:'themes', component: ThemesComponent },
  { path:'quiz', component: QuizComponent },
  { path: 'users', component: UsersComponent},
  { path:'add-theme', component: AddThemeComponent },
  { path:'add-quiz', component: AddQuizComponent },
  { path:'add-user', component: AddUserComponent },
  { path: 'quiz-info/:id_quiz', component: QuizInfoComponent },
  { path: 'quiz-info/:id_quiz/add-question', component: AddQuestionComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
