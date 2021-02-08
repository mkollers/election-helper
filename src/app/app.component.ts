import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Config, CONFIG } from 'src/config';

@Component({
  selector: 'app-root, [app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'eschomat-root'
  }
})
export class AppComponent {
  constructor(@Inject(CONFIG) public config: Config) {
  }
}
