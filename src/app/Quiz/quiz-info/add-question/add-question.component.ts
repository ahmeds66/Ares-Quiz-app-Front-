import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionService } from 'src/app/services/question.service';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {
  newquestion = new Question();
  multipleChoices = true;
  valid = true;

  constructor(private questionService : QuestionService,
    private route: ActivatedRoute,
    private router : Router,) { }
  
  ngOnInit(): void {
  }

  addQuestion(){
    if (this.valid = true){
    console.log(this.newquestion);
    let id_quiz = this.route.snapshot.params['id_quiz'];
    //the id of the new question is the length of the table of questions +1
    this.newquestion.id_question = this.questionService.getQuestionsbyQuiz(id_quiz).length + 1;
    this.newquestion.id_quiz = this.route.snapshot.params['id_quiz']; 
    this.questionService.addQuestion(this.newquestion);
    this.router.navigate(['/quiz-info',id_quiz]);
    }
    else{
      alert("Please fill all the fields");
    }
  }

  checked(){
    this.multipleChoices = !this.multipleChoices;
  }

  CheckForm(){
    if(this.newquestion.question == null || this.newquestion.answer1 == null || this.newquestion.answer2 == null || this.newquestion.correct_answer1 == null){
      return this.valid=true;
    }
    else{
      return this.valid=false;
    }
  }
  
  

}
