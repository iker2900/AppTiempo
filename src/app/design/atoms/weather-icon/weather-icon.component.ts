import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-weather-icon',
  template: `
    <div class="icon-wrapper" [class]="size">
      <img [src]="iconUrl" *ngIf="icon" alt="weather icon">
    </div>
  `,
  styles: [`
    .icon-wrapper { display: flex; align-items: center; justify-content: center; }
    .large img { width: 150px; height: 150px; }
    .medium img { width: 80px; height: 80px; }
    .small img { width: 50px; height: 50px; }
  `],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class WeatherIconComponent {
  @Input() icon: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get iconUrl(): string {
    return this.icon ? `https://openweathermap.org/img/wn/${this.icon}@4x.png` : '';
  }
}
