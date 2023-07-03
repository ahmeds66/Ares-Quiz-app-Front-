import { Injectable } from '@angular/core';
import { Question } from '../model/question.model';
import { Quiz } from '../model/quiz.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions!: Question[]; //table of questions
  quiz!:Quiz;


  constructor() {
    //the set of questions about the quiz theme "Angular","Java","C#","C++","Python","PHP","JavaScript
    this.questions = [
      {id_question: 1, id_quiz: 1, question: "What is Angular?", answer1: "A framework", answer2: "A language", answer3: "A library", answer4: "A compiler", correct_answer1: "A framework",correct_answer2: "" , toggled: false},
      {id_question: 2, id_quiz: 1, question: "What is the name of the Angular team?", answer1: "Angular Team", answer2: "AngularJS Team", answer3: "Angular Team", answer4: "Angular Team", correct_answer1: "Angular Team",correct_answer2: "", toggled: false},
      {id_question: 3, id_quiz: 2, question: "What is Java?", answer1: "A framework", answer2: "A language", answer3: "A library", answer4: "A compiler", correct_answer1: "A language",correct_answer2: "", toggled: false},
      {id_question: 4, id_quiz: 2, question: "What is the name of the Java team?", answer1: "Java Team", answer2: "Java Team", answer3: "Java Team", answer4: "Java Team", correct_answer1: "Java Team",correct_answer2: "", toggled: false},
      {id_question: 5, id_quiz: 3, question: "What is C#?", answer1: "A framework", answer2: "A language", answer3: "A library", answer4: "A compiler", correct_answer1: "A language",correct_answer2: "", toggled: false},
    ];
  }

  getQuestionsbyQuiz(id_quiz: number) {
    return this.questions.filter(question => question.id_quiz == id_quiz);
  }

  addQuestion(question: Question) {
    this.questions.push(question);
  }

  getQuestion(id_question: number) {
    return this.questions.find(question => question.id_question == id_question);
  }

  countQuestions() {
    return this.questions.length;
  }

  updateQuestion(question: Question) {
    const index = this.questions.indexOf(question, 0);
    if (index > -1) {
      this.questions[index] = question;
    }
  }
  
  deleteQuestion(question: Question) {
    let index = this.questions.indexOf(question, 0);
    if (index > -1) {
      this.questions.splice(index, 1);
    }
  }

  correctAnswerisNull(question: Question) {
    if(question.correct_answer2 == ""){
      return true;
    }
    return false;
  }

  
  
  
  
}

