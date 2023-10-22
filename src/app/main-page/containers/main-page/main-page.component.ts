import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [
    PostComponent,
    NavBarComponent,
    CommonModule,
    NgxMasonryModule,
    FormsModule,
  ],
})
export class MainPageComponent {
  searchInput: string = '';
  iterationNumber: number = 0;
  public filteredPosts: any[] = [];
  public posts: any[] = [
    {
      userName: 'Marco Kapinos',
      date: '22.10.2023',
      content: 'Siema z tej strony marco ',
    },
    {
      userName: 'John Doe',
      date: '23.10.2023',
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      userName: 'Jane Smith',
      date: '24.10.2023',
      content:
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      userName: 'Michael Johnson',
      date: '25.10.2023',
      content:
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      userName: 'Emily Williams',
      date: '26.10.2023',
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      userName: 'Chris Brown',
      date: '27.10.2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      userName: 'Jessica Miller',
      date: '28.10.2023',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      userName: 'Alex Johnson',
      date: '29.10.2023',
      content:
        'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      userName: 'Emma Davis',
      date: '30.10.2023',
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      userName: 'Andrew Wilson',
      date: '31.10.2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  constructor() {
    this.filteredPosts = this.posts;
  }

  iteration() {
    this.iterationNumber += 1;
    console.log(this.iterationNumber);

    if (this.searchInput === '') {
      this.filteredPosts = this.posts;
      return;
    }
    this.filteredPosts = this.posts.filter((post) =>
      post.content.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
}
