import { Component } from '@angular/core';
import { Item } from 'src/assets/core/item';

@Component({
  selector: 'diretivas-atributo',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasAtributoComponent {
  canSave = true;
  isUnchanged = true;
  isSpecial = true;

  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};

  currentItem: Item = { name: '' };

  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      save: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
}
