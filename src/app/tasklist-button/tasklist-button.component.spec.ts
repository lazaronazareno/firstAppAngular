import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistButtonComponent } from './tasklist-button.component';

describe('TasklistButtonComponent', () => {
  let component: TasklistButtonComponent;
  let fixture: ComponentFixture<TasklistButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
