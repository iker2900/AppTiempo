import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchFormComponent } from '../design/organisms/search-form/search-form.component';
import { CurrentWeatherComponent } from '../design/organisms/current-weather/current-weather.component';
import { ForecastListComponent } from '../design/organisms/forecast-list/forecast-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    SearchFormComponent,
    CurrentWeatherComponent,
    ForecastListComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
