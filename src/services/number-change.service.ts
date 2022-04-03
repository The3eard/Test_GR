import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberChangeService {
  private number: BehaviorSubject<any> = new BehaviorSubject(0);
  public readonly currentNumber: Observable<any> = this.number.asObservable();

  constructor() {}

  /**
   * Sets current number
   * @param currentNumber
   */
  setCurrentNumber(currentNumber: number): void {
    this.number.next(currentNumber);
  }

  /**
   * Returns the selected ball number
   * For testing purposes only
   * @returns selected ball number
   */
  getCurrentNumber() {
    return this.number.getValue();
  }
}
