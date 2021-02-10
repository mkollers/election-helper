import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-legal-notice-page',
  templateUrl: './legal-notice-page.component.html',
  styleUrls: ['./legal-notice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalNoticePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
