import { Component } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.page.html',
  styleUrls: ['./weather-detail.page.scss'],
  standalone: false,
})
export class WeatherDetailPage {

  currentWeather = this.weatherService.currentWeather;
  forecast = this.weatherService.forecast;

  constructor(private weatherService: WeatherService) { }

}
