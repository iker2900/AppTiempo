import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { WeatherData } from 'src/app/core/interfaces/weather.interface';
import { WeatherIconComponent } from '../../atoms/weather-icon/weather-icon.component';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, WeatherIconComponent]
})
export class CurrentWeatherComponent {

  @Input() weather: WeatherData | null = null;
  private weatherService = inject(WeatherService);

  get uvIndex(): number {
    if (!this.weather) return 0;
    return this.weatherService.getUVIndex(this.weather.coord.lat, this.weather.coord.lon);
  }

  constructor() { }

  get iconUrl(): string {
    return this.weather?.weather[0]?.icon ? `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png` : '';
  }
}
