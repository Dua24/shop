import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegisComponent } from './log-regis.component';

describe('LogRegisComponent', () => {
  let component: LogRegisComponent;
  let fixture: ComponentFixture<LogRegisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogRegisComponent]
    });
    fixture = TestBed.createComponent(LogRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
