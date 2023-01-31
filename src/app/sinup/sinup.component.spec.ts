import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinupComponent } from './sinup.component';

describe('SinupComponent', () => {
  let component: SinupComponent;
  let fixture: ComponentFixture<SinupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
