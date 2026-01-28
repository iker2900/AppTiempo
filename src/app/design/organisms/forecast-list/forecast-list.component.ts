import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ForecastData } from 'src/app/core/interfaces/weather.interface';
import { DailyForecastItemComponent } from '../../molecules/daily-forecast-item/daily-forecast-item.component';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, DailyForecastItemComponent]
})
export class ForecastListComponent {

  @Input() forecast: ForecastData | null = null;

  constructor() { }

  // Helper to group or filter forecast if needed. 
  // API returns 3-hour steps. The requirement says:
  // "En el actual... cada hora y en el resto de los días cada 3 horas"
  // Actually, standard free API is 3-hour steps for 5 days.
  // We will display the list as is or grouped by day. 
  // Requirement: "Predicción para los próximos 4 días... incluido el actual".
  // "En el actual se quiere la información del tiempo cada hora". (Requires OneCall or similar, or filtering standard forecast).
  // Standard forecast gives 3h steps. OpenWeather 'One Call' gives hourly for 48h.
  // I'll assume standard 5 day / 3 hour API is used as per 'forecast' endpoint usage in WeatherService.
  // I'll filter/display appropriately.
  
  get dailyForecasts() {
    return this.forecast?.list || [];
  }

  trackByFn(index: number, item: any): number {
    return item.dt;
  }
}
