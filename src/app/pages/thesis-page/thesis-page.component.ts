import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { STORAGE } from 'src/app/shared/helper/injection-tokens/storage.injection-token';
import { Answer } from 'src/app/shared/helper/models/answer';
import { CONFIG, Config, Thesis } from 'src/config';

@Component({
  selector: 'eschomat-thesis-page',
  templateUrl: './thesis-page.component.html',
  styleUrls: ['./thesis-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThesisPageComponent {
  index$: Observable<number>;
  thesis$: Observable<Thesis | undefined>;
  backUrl$: Observable<string>;
  skipUrl$: Observable<string>;

  constructor(
    @Inject(CONFIG) public config: Config,
    @Inject(INJECTOR) private _injector: Injector,
    private _router: Router,
    route: ActivatedRoute
  ) {
    this.index$ = route.params.pipe(
      map(params => +params.index)
    );

    this.thesis$ = this.index$.pipe(
      map(index => config.theses[index - 1])
    );

    this.backUrl$ = this.index$.pipe(
      map(i => i < config.theses.length ? `/thesen/${i + -1}` : '/ergebnis')
    )

    this.skipUrl$ = this.index$.pipe(
      map(i => i < config.theses.length ? `/thesen/${i + 1}` : '/ergebnis')
    )
  }

  answer(index: number, answer: Answer | string) {
    const storage = this._injector.get(STORAGE);
    storage.setItem(index.toString(), answer.toString());
    this.navigate(index + 1);
  }

  async navigate(index: number) {
    if (index > this.config.theses.length) {
      this._router.navigate(['/ergebnis']);
    } else {
      this._router.navigate(['/thesen/', index]);
    }
  }
}
