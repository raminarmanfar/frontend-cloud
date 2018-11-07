import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashRootComponent } from './admin-dash-root.component';

describe('AdminDashRootComponent', () => {
  let component: AdminDashRootComponent;
  let fixture: ComponentFixture<AdminDashRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
