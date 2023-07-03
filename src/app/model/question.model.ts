import { Quiz } from './quiz.model';
export class Question {
    id_question!: number;
    id_quiz!: Quiz["id_quiz"];
    question!: string;
    answer1!: string;
    answer2!: string;
    answer3!: string;
    answer4!: string;
    correct_answer1!: string;
    correct_answer2: string = "";
    toggled!: boolean;
}