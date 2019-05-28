import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawComponent } from './test-draw.component';

describe('TestDrawComponent', () => {
  let component: TestDrawComponent;
  let fixture: ComponentFixture<TestDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
