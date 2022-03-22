import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptageComponent } from './decryptage.component';

describe('DecryptageComponent', () => {
  let component: DecryptageComponent;
  let fixture: ComponentFixture<DecryptageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecryptageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
