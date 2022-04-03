import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberChangeService } from 'src/services/number-change.service';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let service: NumberChangeService;
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BallSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(NumberChangeService);
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should change number via BehaviourSubject/Observable', () => {
    component.selection({ number: 3, selected: true });
    expect(service.getCurrentNumber()).toEqual(3);
  });
});
