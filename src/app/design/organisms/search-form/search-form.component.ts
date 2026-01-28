import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, TranslateModule]
})
export class SearchFormComponent {

  @Output() search = new EventEmitter<string>();
  @Output() requestLocation = new EventEmitter<void>();

  searchControl = new FormControl('', [Validators.required]);

  constructor() { }

  onSearch() {
    if (this.searchControl.valid && this.searchControl.value) {
      this.search.emit(this.searchControl.value);
    } else {
      this.searchControl.markAsTouched();
    }
  }

  onLocationClick() {
    this.requestLocation.emit();
  }
}
