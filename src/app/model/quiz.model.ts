import { Theme } from './theme.model';

export class Quiz{
    id_quiz?: number;
    name?: string;
    id_theme?: Theme["id_theme"];
    theme_name?: Theme["name"];
    description?: string;
    date?: Date;
    nb_questions?: number;
    
}