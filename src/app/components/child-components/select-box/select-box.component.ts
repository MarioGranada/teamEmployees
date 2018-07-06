import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { IOption } from 'ng-select';
import * as _ from 'lodash';

@Component({
  selector: 'select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit, OnChanges {
  @Input() optionsList: any[];
  @Input() optionsValueField: string;
  @Input() optionsLabelField: string;
  @Input() placeholder: String;
  @Output() valueChange = new EventEmitter();

  items: any[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.prepareItems();
  }

  emitSelectedOption(option: IOption) {
    this.valueChange.emit(option.value);
  }

  prepareItems(): void {
    this.items = _.map(this.optionsList, option => {
      return {
        value: option[this.optionsValueField],
        label: option[this.optionsLabelField]
      };
    });
  }
}
