import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserInfoComponent } from './logged-user-info.component';

describe('LoggedUserInfoComponent', () => {
  let component: LoggedUserInfoComponent;
  let fixture: ComponentFixture<LoggedUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
