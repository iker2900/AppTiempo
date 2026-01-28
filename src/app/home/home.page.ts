import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../core/services/weather.service';
import { LocationService } from '../core/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private router: Router
  ) {}

  onSearch(city: string) {
    this.weatherService.getCurrentWeather(city).subscribe(() => {
      this.router.navigate(['/weather-detail']);
    });
    this.weatherService.getForecast(city).subscribe();
  }

  async onUseLocation() {
    const pos = await this.locationService.getCurrentPosition();
    if (pos) {
      this.weatherService.getWeatherByCoords(pos.coords.latitude, pos.coords.longitude).subscribe(() => {
        this.router.navigate(['/weather-detail']);
      });
      this.weatherService.getForecastByCoords(pos.coords.latitude, pos.coords.longitude).subscribe();
    }
  }
}
