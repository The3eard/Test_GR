import { Component } from '@angular/core';
import { NumberChangeService } from 'src/services/number-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Test_GR';
  public winNumber: number | undefined;
  public earnings: number | undefined;
  public win: boolean = false;

  constructor(private numberChangeService: NumberChangeService) {}

  /**
   * Sets the result emitted by the child component
   * in the variables of the parent component.
   * @param output
   */
  result(output: { winNumber: number; bet: number; win: boolean }) {
    this.winNumber = output.winNumber;
    this.earnings = output.bet * 1.5;
    this.win = output.win;
  }

  /**
   * Restart the game.
   */
  public tryAgain(): void {
    this.numberChangeService.setCurrentNumber(0);
    this.winNumber = undefined;
    this.earnings = undefined;
    this.win = false;
  }
}
