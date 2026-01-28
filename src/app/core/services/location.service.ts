import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {}

  async getCurrentPosition(): Promise<Position | undefined> {
    try {
      // Direct call handles permission request automatically on most platforms
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates;
    } catch (error) {
      console.error('Error getting location', error);
      return undefined;
    }
  }
}
