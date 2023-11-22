import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-groups',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.css'],
  providers: [StudentService],
})
export class StudentGroupsComponent implements OnInit {
  groups: any[] = [];
  selectedGroup: any;

  constructor(public studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.studentService.getAllGroups().subscribe(
      (studentGroup) => {
        this.groups = studentGroup;
      },
      (error) => {
        console.error('Error fetching groups', error);
      }
    );
  }

  joinGroup(groupId: string): void {
    this.studentService.joinGroup(groupId).subscribe(
      (response) => {
        console.log(response.message);
        // Refresh the groups after joining (optional)
        this.loadGroups();

        // Navigate to the signup page
        this.router.navigate(['/signup']);
      },
      (error) => {
        console.error('Error joining group', error);
      }
    );
  }

  viewGroupDetails(group: any): void {
    // Set the selected group for details
    this.selectedGroup = group;
  }

  closeModal(): void {
    // Close the modal by resetting the selected group
    this.selectedGroup = null;
  }
}
