import { Quiz } from './../../model/quiz.model';
import { Question } from './../../model/question.model';
import { QuestionService } from './../../services/question.service';
import { ThemeService } from './../../services/theme.service';
import { QuizService } from './../../services/quiz.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/theme.model';



@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent {
  quizInfos: any;//quiz info
  quiz!: Quiz;//quiz to be modified
  isEditEnable : boolean = true; // to show and hide the edit button
  themes!:Theme[];//table of themes
  questions!: Question[]; //table of questions
  newQuestion!: Question;//new question
  AddModelQuestion!: Question;//question to be added
  Modalquestion!: Question;//question to be modified
  question!: Question;//question to be modified
  nb_questions!: number;//number of questions
  isNull:Boolean = true;//to show and hide the second correct answer
  multipleChoices = false;
  
  constructor(private quizService : QuizService,
    private route: ActivatedRoute,
    private Router: Router,
    private questionService: QuestionService,
    private themeService: ThemeService) {
    let quizId = this.route.snapshot.params['id_quiz'];
    this.quizInfos = this.quizService.listQuizinfo(quizId);
    this.themes = this.themeService.getThemes();
    this.questions = this.questionService.getQuestionsbyQuiz(quizId);
    console.log(this.quizInfos);
    this.quizInfos.nb_questions = this.questions.length;
  }

  saveChanges(quizInfos: any) {
    this.quizService.updateQuizInfo(this.quizInfos);
  }

  deleteQuizInfo(quizInfos: any) {
    this.quizService.deleteQuizInfo(quizInfos);
    this.Router.navigate(['/quiz']);
  }

  onEdit(){
    this.isEditEnable =!this.isEditEnable;
  }
  
  toggleQuestion(q: Question){
    q.toggled = !q.toggled
  }

  updateQuestion(question: Question){
    console.log(question);
    this.Modalquestion = question;
  }

  deleteQuestion(question: Question){
    console.log(question);
    let conf = confirm("Do you want to delete this question?");
    if (conf)
      this.questionService.deleteQuestion(question);
  }
  
  
  addQuestion(question: Question){
    console.log(question);
    this.AddModelQuestion = question;
    this.questionService.addQuestion(this.AddModelQuestion);
  }

  correctAnswerisNull(question : Question){
    if
    (this.questionService.correctAnswerisNull(question)==true){
      this.multipleChoices = true;
    }
    else{
      this.multipleChoices = false;
    }
    console.log(this.isNull);
  }
  checked(){
    this.multipleChoices = !this.multipleChoices;
  }
  
  

 
}
