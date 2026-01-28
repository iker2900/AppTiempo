import { Component } from '@angular/core';
import { WeatherService } from '../core/services/weather.service';
import { LocationService } from '../core/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  currentWeather = this.weatherService.currentWeather;
  forecast = this.weatherService.forecast;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) {}

  onSearch(city: string) {
    this.weatherService.getCurrentWeather(city).subscribe();
    this.weatherService.getForecast(city).subscribe();
  }

  async onUseLocation() {
    const pos = await this.locationService.getCurrentPosition();
    if (pos) {
      this.weatherService.getWeatherByCoords(pos.coords.latitude, pos.coords.longitude).subscribe();
      this.weatherService.getForecastByCoords(pos.coords.latitude, pos.coords.longitude).subscribe();
    }
  }
}
