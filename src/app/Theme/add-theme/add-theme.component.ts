import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Theme } from '../../model/theme.model';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {
  newTheme = new Theme();//new theme
  constructor(private themeService: ThemeService,
              private router : Router) { }//inject the service

  //the method addTheme() is called when the user clicks on the button "Add Theme"
  addTheme() {
    console.log(this.newTheme);
    //the id of the new theme is set to the number of themes + 1
    this.newTheme.id_theme = this.themeService.getThemes().length + 1;
    //the  date of the new theme is set to the current date
    this.newTheme.date = new Date();
    this.themeService.addTheme(this.newTheme);
    this.router.navigate(['/themes']);
  }
  ngOnInit() {
  }
}
