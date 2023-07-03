import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { Theme } from '../model/theme.model';
import { ThemeService } from './theme.service';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizes! : Quiz[];//table of quiz
  themes!: Theme[];
  constructor(private themeservice : ThemeService) {
    this.themes = this.themeservice.getThemes();
    this.quizes = [
      {id_quiz: 1, id_theme: 1, theme_name: "Angular", name: "Quiz 1", description: "Quiz 1 description", date: new Date(), nb_questions: 0},
      {id_quiz: 2, id_theme: 2, theme_name: "Java", name: "Quiz 2", description: "Quiz 2 description", date: new Date(), nb_questions: 0},
      {id_quiz: 3, id_theme: 3, theme_name: "C#", name: "Quiz 3", description: "Quiz 3 description", date: new Date(), nb_questions: 0},
      {id_quiz: 4, id_theme: 4, theme_name: "C++", name: "Quiz 4", description: "Quiz 4 description", date: new Date(), nb_questions: 0},
      {id_quiz: 5, id_theme: 5, theme_name: "Python", name: "Quiz 5", description: "Quiz 5 description", date: new Date(), nb_questions: 0},
      {id_quiz: 6, id_theme: 6, theme_name: "PHP", name: "Quiz 6", description: "Quiz 6 description", date: new Date(), nb_questions: 0},
      {id_quiz: 7, id_theme: 7, theme_name: "JavaScript", name: "Quiz 7", description: "Quiz 7 description", date: new Date(), nb_questions: 0},
    ];
  }

  getQuizes() {
    return this.quizes;
  }

  addQuiz(quiz: Quiz) {
    console.log(quiz);
    this.quizes.push(quiz);
    // this part inisialize the nb_questions of the quiz
    let index = this.quizes.findIndex(q => q.id_quiz == quiz.id_quiz);
    this.quizes[index].nb_questions = 0;
  }
  
  savechanges(quiz: Quiz) {
    const index = this.themes.indexOf(quiz, 0);
    if (index > -1) {
      this.themes[index] = quiz;
    }
  }

  listThemes() {
    return this.themes;
  }

  consultTheme(id_theme: number) {
    return this.themes.find(theme => theme.id_theme == id_theme);
  }

  listQuizinfo(id_quiz: number) {
    return this.quizes.find(quiz => quiz.id_quiz == id_quiz);
  }

  updateQuizInfo(quizInfos: any) {
    let index = this.quizes.findIndex(q => q.id_quiz == quizInfos.id_quiz);
    this.quizes[index] = quizInfos;
  }

  deleteQuizInfo(quizInfos: any) {
    let index = this.quizes.findIndex(q => q.id_quiz == quizInfos.id_quiz);
    this.quizes.splice(index, 1);
  }
  
  
}
