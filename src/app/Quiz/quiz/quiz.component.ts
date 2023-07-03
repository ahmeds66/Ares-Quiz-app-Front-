import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizes! : Quiz[];//table of quiz
modalQuiz!: Quiz;
quiz!: Quiz;
  constructor(private quizService: QuizService,
    private router: Router) {
    this.quizes= quizService.getQuizes();
   }

  ngOnInit(): void {
  }
  updateTheme(quiz: Quiz) { 
    console.log(quiz);
    this.modalQuiz = quiz;
    this.router.navigate(['/quiz']);
  }

  saveChanges() {
    this.quizService.savechanges(this.modalQuiz);
  }
}
