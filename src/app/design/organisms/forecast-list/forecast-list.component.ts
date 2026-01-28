import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ForecastData } from 'src/app/core/interfaces/weather.interface';
import { DailyForecastItemComponent } from '../../molecules/daily-forecast-item/daily-forecast-item.component';
import { WeatherIconComponent } from '../../atoms/weather-icon/weather-icon.component';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, DailyForecastItemComponent, WeatherIconComponent]
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
  
  // Hourly: Next 24h (approx 8 items * 3h)
  get hourlyForecast() {
    return this.forecast?.list.slice(0, 8) || [];
  }

  // Daily: Aggregate remaining days (simplified: take noon value or max/min)
  // For this demo, we'll pick one reading per day (e.g. 15:00) to represent the day
  get dailyForecasts() {
    if (!this.forecast) return [];
    
    const dailyMap = new Map<string, any>();
    
    this.forecast.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      // Logic: Prefer 15:00 forecast, or default to first found
      if (!dailyMap.has(date)) {
        dailyMap.set(date, item);
      } else {
        const existing = dailyMap.get(date);
        const itemHour = new Date(item.dt * 1000).getHours();
        // If current item is closer to 15:00, replace
        if (Math.abs(itemHour - 15) < Math.abs(new Date(existing.dt * 1000).getHours() - 15)) {
          dailyMap.set(date, item);
        }
      }
    });

    // Convert map to array and skip today if it's already redundant with hourly (optional, but requested "next 4 days")
    // We keep all unique days found in list.
    return Array.from(dailyMap.values()).slice(0, 5); 
  }

  trackByFn(index: number, item: any): number {
    return item.dt;
  }
}
