import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsService } from 'src/app/Service/news/news.service';
import { News } from 'src/app/Service/news/news';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  public Editor = ClassicEditor;
  news: News[] = []
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private http: HttpClient,
    private router: Router,
    ) {

     }

     ngOnInit(): void {
      this.form = this.fb.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        // name: ['', Validators.required],
        content: ['', Validators.required],
      });
    }

    onSubmit(): void {
      const product = this.form.value;
      this.newsService.createNews(product).subscribe(
        response => {console.log(response),
          this.router.navigate(['/ManagerNews', response.id]);
        },
        error => console.log(error),
        
      );
    }
}
