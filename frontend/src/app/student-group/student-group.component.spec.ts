import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupsComponent } from './student-group.component';

describe('StudentGroupComponent', () => {
  let component: StudentGroupsComponent;
  let fixture: ComponentFixture<StudentGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentGroupsComponent]
    });
    fixture = TestBed.createComponent(StudentGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
