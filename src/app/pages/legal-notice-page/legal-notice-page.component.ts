import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CONFIG, Config } from 'src/config';

@Component({
  selector: 'app-legal-notice-page',
  templateUrl: './legal-notice-page.component.html',
  styleUrls: ['./legal-notice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalNoticePageComponent {
  constructor(@Inject(CONFIG) public config: Config) { }
}
