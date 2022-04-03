import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberChangeService } from 'src/services/number-change.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent {
  constructor(private numberChangeService: NumberChangeService) {}

  public balls: { number: number; selected: boolean }[] = [
    { number: 1, selected: false },
    { number: 2, selected: false },
    { number: 3, selected: false },
    { number: 4, selected: false },
    { number: 5, selected: false },
    { number: 6, selected: false },
    { number: 7, selected: false },
    { number: 8, selected: false },
    { number: 9, selected: false },
    { number: 10, selected: false },
  ];

  public selectedNumber: Observable<number> =
    this.numberChangeService.currentNumber;

  /**
   * Select a ball and pass its number to the
   * NumberChangeService service.
   * @param ball
   */
  public selection(ball: { number: number; selected: boolean }): void {
    this.balls.map((_ball) => (_ball.selected = _ball.number === ball.number));
    this.numberChangeService.setCurrentNumber(ball.number);
  }
}
