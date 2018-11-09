import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddUpdateUserComponent } from './popup-add-update-user.component';

describe('PopupAddUpdateUserComponent', () => {
  let component: PopupAddUpdateUserComponent;
  let fixture: ComponentFixture<PopupAddUpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAddUpdateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
