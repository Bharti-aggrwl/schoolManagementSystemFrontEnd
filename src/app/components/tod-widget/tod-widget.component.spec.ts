import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodWidgetComponent } from './tod-widget.component';

describe('TodWidgetComponent', () => {
  let component: TodWidgetComponent;
  let fixture: ComponentFixture<TodWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
