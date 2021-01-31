import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CONFIG, Config, Thesis } from 'src/config';

@Component({
  selector: 'app-thesis-page',
  templateUrl: './thesis-page.component.html',
  styleUrls: ['./thesis-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThesisPageComponent {
  index$: Observable<number>;
  thesis$: Observable<Thesis | undefined>;

  constructor(
    @Inject(CONFIG) public config: Config,
    route: ActivatedRoute
  ) {
    this.index$ = route.params.pipe(
      map(params => params.index)
    );

    this.thesis$ = this.index$.pipe(
      map(index => config.theses[index - 1])
    );
  }
}
