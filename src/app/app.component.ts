import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Config, CONFIG } from 'src/config';

@Component({
  selector: 'app-root, [app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(@Inject(CONFIG) config: Config) {
    console.log(config);
  }
}
