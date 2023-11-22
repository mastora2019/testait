import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'; 


@Component({
  selector: 'app-student-groups',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.css'],
  providers: [StudentService], // Make sure the service is provided here
})
export class StudentGroupsComponent implements OnInit {
viewGroupDetails(arg0: any) {
throw new Error('Method not implemented.');
}
  groups: any[] = [];

  constructor(public studentService: StudentService) {}

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
        
      },
      (error) => {
        console.error('Error joining group', error);
        
      }
      
    );
   
  }

}



