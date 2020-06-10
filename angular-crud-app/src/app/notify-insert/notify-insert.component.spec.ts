import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyInsertComponent } from './notify-insert.component';

describe('NotifyInsertComponent', () => {
  let component: NotifyInsertComponent;
  let fixture: ComponentFixture<NotifyInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
