import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHealthUiComponent } from './customer-health-ui.component';

describe('CustomerHealthUiComponent', () => {
  let component: CustomerHealthUiComponent;
  let fixture: ComponentFixture<CustomerHealthUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHealthUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHealthUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
