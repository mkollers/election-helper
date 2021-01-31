import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thesis-page',
  templateUrl: './thesis-page.component.html',
  styleUrls: ['./thesis-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThesisPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
