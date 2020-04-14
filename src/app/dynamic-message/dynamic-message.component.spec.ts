import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMessageComponent } from './dynamic-message.component';

describe('DynamicMessageComponent', () => {
  let component: DynamicMessageComponent;
  let fixture: ComponentFixture<DynamicMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
