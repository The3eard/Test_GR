import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;
  let parentComponent: AppComponent;
  let parentFixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetSlipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    parentFixture = TestBed.createComponent(AppComponent);
    parentComponent = parentFixture.componentInstance;
    fixture.detectChanges();
    parentFixture.detectChanges();
  });

  it('Should place the bet if the amount of the bet is equal to or greater than 5€ and if a ball is selected.', () => {
    component.bet.setValue(5);
    component.ball = 5;
    expect(component.placeBet()).toBeTrue();
  });

  it('Should return true if the selected number and the winning number are the same.', () => {
    expect(component.win(1, 1)).toBeTrue();
  });

  const repeats: number = 100;
  for (let index = 0; index < repeats; index++) {
    // checkRandomNumber();
    it(`Should return a random number between 1 and 10 - ${
      index + 1
    } of ${repeats}`, () => {
      const possibleNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(
        possibleNumbers.includes(component.generateWinNumber())
      ).toBeTrue();
    });
  }

  it('Should emit winNumber, bet and win to AppComponent', () => {
    component.bet.setValue(2);
    spyOn(component.winNumberEvent, 'emit');
    component.raffle(1, 1);
    expect(component.winNumberEvent.emit).toHaveBeenCalledWith({
      winNumber: 1,
      bet: 2,
      win: true,
    });
  });

  it('Should change the state of the boolean "spinner.', () => {
    component.spinner = true;
    component.spinnerSwitch();
    expect(component.spinner).toBeFalse();
    component.spinner = false;
    component.spinnerSwitch();
    expect(component.spinner).toBeTrue();
  });
});
