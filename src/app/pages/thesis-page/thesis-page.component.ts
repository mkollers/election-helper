import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer } from 'src/app/shared/answer';
import { STORAGE } from 'src/app/shared/storage.injection-token';
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
    @Inject(STORAGE) private _storage: Storage,
    private _router: Router,
    route: ActivatedRoute
  ) {
    this.index$ = route.params.pipe(
      map(params => +params.index)
    );

    this.thesis$ = this.index$.pipe(
      map(index => config.theses[index - 1])
    );
  }

  answer(index: number, answer: Answer | string) {
    this._storage.setItem(index.toString(), answer.toString());
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
