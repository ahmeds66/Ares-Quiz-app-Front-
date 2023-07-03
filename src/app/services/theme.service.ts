import { Theme } from './../model/theme.model';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes!: Theme[]; //table of theme

  constructor() {
    this.themes = [
      { id_theme: 1, name: 'Angular', description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.', date: new Date('2021-01-01') },
      { id_theme: 2, name: 'React', description: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.', date: new Date('2021-01-01') },
      { id_theme: 3, name: 'Vue', description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.', date: new Date('2021-01-01') },
      { id_theme: 4, name: 'Node', description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.', date: new Date('2021-01-01') },
      { id_theme: 5, name: 'Express', description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.', date: new Date('2021-01-01') },
      { id_theme: 6, name: 'MongoDB', description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.', date: new Date('2021-01-01') },
      { id_theme: 7, name: 'Bootstrap', description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.', date: new Date('2021-01-01') }
    ];
   }
    getThemes(): Theme[] {
      return this.themes;
    }
    addTheme(theme: Theme) {
      console.log(theme);
      this.themes.push(theme);
      
    }
    deleteTheme(theme: Theme) {
      const index = this.themes.indexOf(theme, 0);
      if (index > -1) {
        this.themes.splice(index, 1);
      }
    }
    updateTheme(theme: Theme) {
      const index = this.themes.indexOf(theme, 0);
      if (index > -1) {
        this.themes[index] = theme;
      }
    //the time of modification is updated
    theme.date = new Date();
    
    }
}
