import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should set winNumber, earnings and win', () => {
    component.result({ winNumber: 1, bet: 2, win: true });
    expect(component.winNumber).toEqual(1);
    expect(component.earnings).toEqual(3);
    expect(component.win).toBeTrue();
  });

  it('Should reset winNumber, earnings and win', () => {
    component.tryAgain();
    expect(component.winNumber).toBeUndefined();
    expect(component.earnings).toBeUndefined();
    expect(component.win).toBeFalse();
  });
});
