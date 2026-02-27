import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpService } from '../../services/wp.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private wpService = inject(WpService);
  posts: any[] = [];

  ngOnInit() {
    this.wpService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}