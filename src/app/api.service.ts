import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../config.json';

export class NewPost {
  constructor(public text?: string) {
    this.text = text || "";
  }
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loadPosts$() {
    return this.http.get(`${config.API_URL}/posts`);
  }
  createPost$(newPost: NewPost) {
    return this.http.post(
      `${config.API_URL}/posts`,
      JSON.stringify(newPost),
      { headers: {
        'Content-Type': 'application/json'
      } }
    );
  }

  deletePost$(id: string) {
    return this.http.delete(`${config.API_URL}/posts/${id}`);
  }
}
