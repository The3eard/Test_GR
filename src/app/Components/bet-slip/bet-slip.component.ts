import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NumberChangeService } from 'src/services/number-change.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent {
  @Output() winNumberEvent = new EventEmitter<{
    winNumber: number;
    bet: number;
    win: boolean;
  }>();
  public bet: FormControl;
  public ball: number = 0;
  public balls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public spinner: boolean = false;

  constructor(private numberChangeService: NumberChangeService) {
    this.bet = new FormControl('');
    this.numberChangeService.currentNumber.subscribe((ball) => {
      this.ball = ball;
    });
  }

  /**
   * If there is a selected ball and a valid bet,
   * the raffle is executed.
   * @returns true if bet is placed
   */
  public placeBet(): boolean {
    if (this.ball !== 0) {
      if (this.bet.value >= 5) {
        this.spinnerSwitch();
        setTimeout(() => {
          this.raffle(this.ball, this.generateWinNumber());
          this.spinnerSwitch();
        }, 2000);
        return true;
      } else {
        alert('The minimum bet is 5€');
        return false;
      }
    } else {
      alert('You must to choose a number to play');
      return false;
    }
  }

  /**
   * Check if the selected number is the winner.
   * @param myNumber
   * @param winNumber
   * @returns true if win
   */
  public win(myNumber: number, winNumber: number): boolean {
    return myNumber === winNumber;
  }

  /**
   * Generate the winning number.
   * @returns win number
   */
  generateWinNumber(): number {
    return this.balls[Math.floor(Math.random() * this.balls.length)];
  }

  /**
   * Executes the raffle and emits the result
   * to the parent component to display it.
   * @param ball
   */
  public raffle(ball: number, winNumber: number): void {
    this.winNumberEvent.emit({
      winNumber: winNumber,
      bet: +this.bet.value,
      win: this.win(ball, winNumber),
    });
  }

  /**
   * Activates or deactivates the spinner
   * according to its status
   */
  public spinnerSwitch(): void {
    this.spinner = !this.spinner;
  }
}
