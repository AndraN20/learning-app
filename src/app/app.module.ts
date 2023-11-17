import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChooseMethodComponent } from './pages/choose-method/choose-method.component';
import { FillTheBlanksComponent } from './pages/fill-the-blanks/fill-the-blanks.component';
import { FlashCardsComponent } from './pages/flash-cards/flash-cards.component';
import { MultipleChoiceComponent } from './pages/multiple-choice/multiple-choice.component';
import { QuestionComponent } from './pages/question/question.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddFileComponent } from './pages/add-file/add-file.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StatisticsComponent,
    SettingsComponent,
    ChooseMethodComponent,
    FillTheBlanksComponent,
    FlashCardsComponent,
    MultipleChoiceComponent,
    QuestionComponent,
    NavbarComponent,
<<<<<<< HEAD
    AddFileComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
=======
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [provideAngularSvgIcon()],
  bootstrap: [AppComponent]
>>>>>>> 3b3067196be427622361474849aa46e00573eff2
})
export class AppModule {}
