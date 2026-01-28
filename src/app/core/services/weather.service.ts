import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData, ForecastData } from '../interfaces/weather.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.openWeatherApiKey;
  private apiUrl = environment.openWeatherApiUrl;

  // Signals
  currentWeather = signal<WeatherData | null>(null);
  forecast = signal<ForecastData | null>(null);

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('lang', 'es'); // Default to Spanish, or make dynamic

    return this.http.get<WeatherData>(`${this.apiUrl}/weather`, { params }).pipe(
      tap(data => this.currentWeather.set(data))
    );
  }

  getForecast(city: string): Observable<ForecastData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('lang', 'es');

    return this.http.get<ForecastData>(`${this.apiUrl}/forecast`, { params }).pipe(
      tap(data => this.forecast.set(data))
    );
  }

  getWeatherByCoords(lat: number, lon: number): Observable<WeatherData> {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('lang', 'es');

    return this.http.get<WeatherData>(`${this.apiUrl}/weather`, { params }).pipe(
      tap(data => this.currentWeather.set(data))
    );
  }

  getForecastByCoords(lat: number, lon: number): Observable<ForecastData> {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('lang', 'es');

    return this.http.get<ForecastData>(`${this.apiUrl}/forecast`, { params }).pipe(
      tap(data => this.forecast.set(data))
    );
  }

  // Mock UV Index since it requires OneCall API (Paid)
  // We derive a fake reasonable value based on clouds and time of day if needed, 
  // or just return a random realistic value for demo purposes.
  getUVIndex(lat: number, lon: number): number {
    // Simplified consistency: pseudo-random based on coords
    const pseudoRandom = (Math.abs(lat) + Math.abs(lon)) % 10; 
    return Math.floor(pseudoRandom);
  }
}
