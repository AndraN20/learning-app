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
import { AddFileComponent } from './pages/add-file/add-file.component';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';
import { TextFileComponent } from './components/text-file/text-file.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChooseMethodCardComponent } from './components/choose-method-card/choose-method-card.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AddFileComponent,
    TitleComponent,
    FilterButtonComponent,
    TextFileComponent,
    ChooseMethodCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [provideAngularSvgIcon()],
  bootstrap: [AppComponent],
})
export class AppModule {}
