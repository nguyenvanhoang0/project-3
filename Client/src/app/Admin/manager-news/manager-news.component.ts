import { Component } from '@angular/core';
import { NewsService } from 'src/app/Service/news/news.service';
import { News } from 'src/app/Service/news/news';
@Component({
  selector: 'app-manager-news',
  templateUrl: './manager-news.component.html',
  styleUrls: ['./manager-news.component.css']
})
export class ManagerNewsComponent {
  news: News[] | null = null;
  filteredNews: News[] | null = null;
  currentPage = 1

  isIndexClass = false;


  constructor(private NewsService: NewsService) {
    this.NewsService.getNews()
      .subscribe((response: News[]) => {
        this.news = response;
      });
  }
}

