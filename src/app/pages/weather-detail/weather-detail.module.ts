import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { WeatherDetailPageRoutingModule } from './weather-detail-routing.module';
import { WeatherDetailPage } from './weather-detail.page';
import { CurrentWeatherComponent } from '../../design/organisms/current-weather/current-weather.component';
import { ForecastListComponent } from '../../design/organisms/forecast-list/forecast-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherDetailPageRoutingModule,
    TranslateModule,
    CurrentWeatherComponent,
    ForecastListComponent
  ],
  declarations: [WeatherDetailPage]
})
export class WeatherDetailPageModule {}
