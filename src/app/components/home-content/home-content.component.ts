import { Component, OnInit } from '@angular/core';
import { AuthClientConfig } from '@first-line/firstline-angular';
import { NewPost, ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  posts: any[] | null;
  audience = this.configFactory.get()?.audience;
  hasApiError = false;

  form: FormGroup;
  model: NewPost; 

  constructor(
    private api: ApiService,
    private configFactory: AuthClientConfig,
    private formBuilder: FormBuilder
  ) {
    this.posts = null;
  }
  
  ngOnInit() {
    this.model = new NewPost();
    this.form = this.formBuilder.group({
      text: [this.model.text, Validators.required],
    });
    this.loadPosts();
  }

  onSubmit({ value, valid }: { value: NewPost, valid: boolean }) {
    this.api.createPost$(value).subscribe({
      next: (res) => {
        this.hasApiError = false;
        const newPosts = this.posts || [];
        this.posts = [ ...newPosts, res ];
        this.form.reset();
      },
      error: (res) => {
        this.hasApiError = true
        console.error("Failed!", res);
      }
    });
  }

  loadPosts() {
    this.api.loadPosts$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        if (Array.isArray(res)) {
          this.posts = res;
        }
      },
      error: (res) => {
        this.hasApiError = true
        console.error("Failed!", res);
      }
    });
  }

  deletePost(id: string) {
    this.api.deletePost$(id).subscribe({
      next: (res) => {
        this.hasApiError = false;
        const newPosts = this.posts || [];
        this.posts = newPosts.filter(post => post.id !== id);
        console.log(this.posts);
      },
      error: (res) => {
        this.hasApiError = true
        console.error("Failed!", res);
      }
    });
  }
}
