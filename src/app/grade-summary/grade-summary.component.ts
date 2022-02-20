// Title: Exercise 7.4
// Author: Evan Durkin
// Date: February 19, 2022

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string | undefined;
  @Input() course: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
