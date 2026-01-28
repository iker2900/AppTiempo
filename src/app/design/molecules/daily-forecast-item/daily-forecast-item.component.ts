import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { WeatherIconComponent } from '../../atoms/weather-icon/weather-icon.component';

@Component({
  selector: 'app-daily-forecast-item',
  templateUrl: './daily-forecast-item.component.html',
  styleUrls: ['./daily-forecast-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, WeatherIconComponent] // DatePipe not needed in imports if used in template via CommonModule/platform pipes? Wait, DatePipe is in CommonModule.
})
export class DailyForecastItemComponent {

  @Input() item: any; // Using 'any' for now, or specific Forecast list item type if I extract it.

  constructor() { }

}
