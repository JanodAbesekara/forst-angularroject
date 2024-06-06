import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofillComponent } from './autofill.component';

describe('AutofillComponent', () => {
  let component: AutofillComponent;
  let fixture: ComponentFixture<AutofillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutofillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
