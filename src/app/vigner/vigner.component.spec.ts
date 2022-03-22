import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VignerComponent } from './vigner.component';

describe('VignerComponent', () => {
  let component: VignerComponent;
  let fixture: ComponentFixture<VignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
