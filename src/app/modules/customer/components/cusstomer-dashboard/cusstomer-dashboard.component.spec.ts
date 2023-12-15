import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusstomerDashboardComponent } from './cusstomer-dashboard.component';

describe('CusstomerDashboardComponent', () => {
  let component: CusstomerDashboardComponent;
  let fixture: ComponentFixture<CusstomerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusstomerDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusstomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
