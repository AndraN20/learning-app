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
  { component: HomepageComponent, path: PATHS.HOMEPAGE },
  { component: SettingsComponent, path: PATHS.SETTINGS },
  { component: StatisticsComponent, path: PATHS.STATISTICS },
  { component: ChooseMethodComponent, path: PATHS.CHOOSEMETHOD },
  { component: FillTheBlanksComponent, path: PATHS.FILLTHEBLANKS },
  { component: FlashCardsComponent, path: PATHS.FLASHCARDS },
  { component: MultipleChoiceComponent, path: PATHS.MULTIPLECHOICE },
  { component: QuestionComponent, path: PATHS.QUESTION }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
