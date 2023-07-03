import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from '../../model/theme.model';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  ngOnInit(): void {
  }
  themes: Theme[]; //table of theme
  modalTheme!: Theme;

  constructor(private themeService: ThemeService,
    private router : Router) {
    this.themes = themeService.getThemes();
  }
  deleteTheme(theme: Theme) {
    console.log(theme);
    let conf = confirm("Are you sure you want to delete this theme?");
    if (conf)
     this.themeService.deleteTheme(theme);
  }

  updateTheme(theme: Theme) {
    console.log(theme);
    this.modalTheme = theme;
    // this.themeService.updateTheme(theme);
    this.router.navigate(['/themes']);
  }

  saveChanges() {
    this.themeService.updateTheme(this.modalTheme);
  }
  
  

}
