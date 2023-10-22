import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  host: {
    class: 'max-w-md shadow-xl bg-white rounded-3xl min-w-[320px]',
  },
  imports: [FontAwesomeModule],
})
export class PostComponent {
  faUser = faUser;
  @Input() userName!: string;
  @Input() date!: string;
  @Input() content!: string;
}
