import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PATHS } from './constants/paths';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ChooseMethodComponent } from './pages/choose-method/choose-method.component';
import { FillTheBlanksComponent } from './pages/fill-the-blanks/fill-the-blanks.component';
import { FlashCardsComponent } from './pages/flash-cards/flash-cards.component';
import { MultipleChoiceComponent } from './pages/multiple-choice/multiple-choice.component';
import { QuestionComponent } from './pages/question/question.component';

const routes: Routes = [
  { path: PATHS.HOMEPAGE, component: HomepageComponent },
  { path: PATHS.SETTINGS, component: SettingsComponent },
  { path: PATHS.STATISTICS, component: StatisticsComponent },
  { path: PATHS.CHOOSEMETHOD, component: ChooseMethodComponent },
  { path: PATHS.FILLTHEBLANKS, component: FillTheBlanksComponent },
  { path: PATHS.FLASHCARDS, component: FlashCardsComponent },
  { path: PATHS.MULTIPLECHOICE, component: MultipleChoiceComponent },
  { path: PATHS.QUESTION, component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
