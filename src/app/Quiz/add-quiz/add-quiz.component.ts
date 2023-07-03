import { Theme } from './../../model/theme.model';
import { QuizService } from 'src/app/services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{
newQuiz: Quiz = new Quiz();

themes!: Theme[];
newid_theme!: number;
newtheme!:any;
valid=true;

constructor(private quizService: QuizService,
            private router: Router) { }

ngOnInit(){
  this.themes = this.quizService.listThemes();
}
addQuiz() {
  this.newtheme=this.quizService.consultTheme(this.newid_theme);
  this.newQuiz.id_theme=this.newid_theme;
  this.newQuiz.theme_name=this.newtheme.name;
  //the id of the new quiz is a random number between 100000 and 999999 and check if it is not already used
  let id_quiz = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  while (this.quizService.listQuizinfo(id_quiz) != undefined) {
    id_quiz = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
  this.newQuiz.id_quiz = id_quiz;
  this.newQuiz.date = new Date();
  this.quizService.addQuiz(this.newQuiz);
  this.router.navigate(['quiz']);
}

checkform() {
  if (this.newQuiz.name == undefined || this.newQuiz.theme_name == '' || this.newQuiz.name.length > 50) {
    return this.valid=true;
  }
  if (this.newQuiz.description == undefined || this.newQuiz.description == '' || this.newQuiz.description.length > 200) {
    return this.valid=true;
  }
  if (this.newid_theme == undefined) {
    return this.valid=true;
  }
  return this.valid=false;
}

}
