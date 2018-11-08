import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashRootComponent } from './user-dash-root.component';

describe('UserDashRootComponent', () => {
  let component: UserDashRootComponent;
  let fixture: ComponentFixture<UserDashRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
