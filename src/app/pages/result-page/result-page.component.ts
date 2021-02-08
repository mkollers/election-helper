import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Answer } from 'src/app/shared/answer';
import { CalculationGrid } from 'src/app/shared/calculation-grid';
import { STORAGE } from 'src/app/shared/storage.injection-token';
import { CONFIG, Config } from 'src/config';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultPageComponent {
  result: { [party: string]: number } = {};
  possible: number = 0;

  constructor(
    @Inject(CONFIG) public config: Config,
    @Inject(STORAGE) storage: Storage,
  ) {
    const result: { [party: string]: number } = this._initResult();

    for (let i = 0; i < config.theses.length; i++) {
      const thesis = config.theses[i];
      const answer = storage.getItem(i.toString());

      if (answer != Answer.SKIP && answer != null) this.possible += 2;

      for (const party in config.parties) {
        const position = thesis.evaluation[party];

        result[party] += CalculationGrid[answer || 'skip'][position];
      }
    }

    this.result = result;
  }

  private _initResult() {
    const result: { [party: string]: number } = {};

    for (const party of Object.keys(this.config.parties)) {
      result[party] = 0;
    }

    return result;
  }
}
