import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {}

  async getCurrentPosition(): Promise<Position | undefined> {
    try {
      const permission = await Geolocation.checkPermissions();
      
      if (permission.location !== 'granted' && permission.location !== 'granted-limited') {
        const request = await Geolocation.requestPermissions();
        if (request.location !== 'granted') {
          return undefined;
        }
      }
      
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates;
    } catch (error) {
      console.error('Error getting location', error);
      return undefined;
    }
  }
}
