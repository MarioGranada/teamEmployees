import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'select-box-option',
  templateUrl: './select-box-option.component.html',
  styleUrls: ['./select-box-option.component.css']
})
export class SelectBoxOptionComponent implements OnInit {
  @Input() optionLabel: String;
  @Input() optionValue: String;

  constructor() {}

  ngOnInit() {}
}
