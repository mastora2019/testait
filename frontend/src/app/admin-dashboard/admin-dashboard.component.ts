// admin-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  groups: string[] = []; // Assuming groups are represented as strings in this example
  groupForm: FormGroup;

  constructor(private groupService: GroupService, private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    // Load existing groups (you may fetch them from your service)
    this.groups = ['Academic Group', 'Activities Group', 'Volunteer Group'];
  }

  createGroup(): void {
    const groupData = this.groupForm.value;

    // Assuming your service returns the created group
    this.groupService.createGroup(groupData).subscribe(
      (createdGroup) => {
        // Add the created group to the list
        this.groups.push(createdGroup.name);

        // Optionally, you can reset the form
        this.groupForm.reset();
      },
      (error) => {
        console.error('Error creating group', error);
      }
    );
  }
}
