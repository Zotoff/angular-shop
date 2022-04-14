import { Component, EventEmitter, Output } from '@angular/core';
@Component({ // декоратор компонента со свойствами 
    selector: 'app-header', // селектор, куда компонент будет вставляться 
    templateUrl: 'header.component.html', // файл шаблона компонента 
    styleUrls: ['header.component.scss'] // файл стилизации 
  }) 
export class HeaderComponent{
  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>(); // to the parent component

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  
}