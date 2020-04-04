import { Component} from "@angular/core";
@Component({
  selector: "like-dislike",
  template: `
  <div>

<button (click)="likeButtonClick()" [ngClass]="chooseclassl ? 'like-button' : 'liked'"> Like | {{numberOfLikes}} </button>
<button (click)="dislikeButtonClick()" [ngClass]="chooseclassd ? 'dislike-button' : 'disliked'"> Dislike | {{numberOfDislike}} </button>

  </div>
`,

styles:[`
  .like-button,.dislike-button {
    font-size: 1rem;
    padding: 5px 10px;
    color: #585858;
  }
.liked, .disliked {
  font-weight: bold;
  color:#1565c0;
}
  `]
})
export class LikeDislikeComponent {
  numberOfLikes : number=100;
  numberOfDislike: number=25;
  chooseclassl:boolean = true;
  chooseclassd:boolean = true;

  likeButtonClick() {
    if (this.likesCounter === true && this.dislikeCounter === true) {
      this.numberOfLikes++;
      this.likesCounter = false;
    } else if (this.likesCounter === true && this.dislikeCounter === false) {
      this.numberOfLikes++;
      this.likesCounter = false;
      this.numberOfDislike--;
      this.dislikeCounter = true;
    } else if (this.likesCounter === false && this.dislikeCounter === true) {
      this.numberOfLikes--;
      this.likesCounter = true;
    }
  }
  dislikeButtonClick() {
    if (this.dislikeCounter === true && this.likesCounter === true) {
      this.numberOfDislike++;
      this.dislikeCounter = false;
    } else if (this.dislikeCounter === true && this.likesCounter === false) {
      this.numberOfDislike++;
      this.numberOfLikes--;
      this.dislikeCounter = false;
      this.likesCounter = true;
    } else if (this.dislikeCounter === false && this.likesCounter === true) {
      this.numberOfDislike--;
      this.dislikeCounter = true;
    }
  }
}
