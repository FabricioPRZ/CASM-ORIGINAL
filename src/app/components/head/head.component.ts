// head.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-head',
  imports: [],
  standalone: true,
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent {
  user: User = {
    id: 0,
    name: 'Jose Martinez',
    email: '',
    password: '',
    specialty: '',
    phone: '',
    role: '',
    profileImage: ''
  };

  constructor(private dialog: MatDialog, private userService: UserService) {
    this.userService.getUserProfile().subscribe((userData) => {
      this.user = userData;
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '400px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe((updatedData: User) => {
      if (updatedData) {
        this.userService.updateUserProfile(updatedData).subscribe((updatedUser) => {
          this.user = updatedUser;
        });
      }
    });
  }
}