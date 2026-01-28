import { Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { WeatherData } from 'src/app/core/interfaces/weather.interface';
import { WeatherIconComponent } from '../../atoms/weather-icon/weather-icon.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, WeatherIconComponent]
})
export class CurrentWeatherComponent {

  @Input() weather: WeatherData | null = null;

  constructor() { }

  get iconUrl(): string {
    return this.weather?.weather[0]?.icon ? `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png` : '';
  }
}
