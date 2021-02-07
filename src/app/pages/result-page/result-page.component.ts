import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
