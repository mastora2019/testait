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
  groups: any[] = [];
  groupForm: FormGroup;

  constructor(public groupService: GroupService, private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      name: [''],
      description: [''],
      // Add other form controls as needed
    });
  }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupService.getAllGroups().subscribe(
      (groups) => {
        this.groups = groups;
      },
      (error) => {
        console.error('Error fetching groups', error);
      }
    );
  }

  createGroup(): void {
    const groupData = this.groupForm.value;
    this.groupService.createGroup(groupData).subscribe(
      (response) => {
        // Handle success
        this.loadGroups(); // Reload the groups after creating a new one
      },
      (error) => {
        console.error('Error creating group', error);
      }
    );
  }

  // Implement methods for updating and deleting groups
  
}
