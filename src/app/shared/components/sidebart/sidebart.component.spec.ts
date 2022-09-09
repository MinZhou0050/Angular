import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartComponent } from './sidebart.component';

describe('SidebartComponent', () => {
  let component: SidebartComponent;
  let fixture: ComponentFixture<SidebartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
