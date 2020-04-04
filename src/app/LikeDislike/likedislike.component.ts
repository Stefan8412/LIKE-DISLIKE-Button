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

  likeButtonClick(){
    if (this.numberOfLikes===100 && this.numberOfDislike===25){
    this.numberOfLikes++;this.chooseclassl=false;}
    else if (this.numberOfLikes===100 && this.numberOfDislike===26){
    this.numberOfLikes++;this.chooseclassl=false;this.numberOfDislike--;this.chooseclassd=true;}
    else{
      this.numberOfLikes--;this.chooseclassl=true;
    }
  }
  dislikeButtonClick(){
    if(this.numberOfDislike===25 && this.numberOfLikes===100){
    this.numberOfDislike++;this.chooseclassd=false;
  }
else if(this.numberOfDislike===25 && this.numberOfLikes===101){
  this.numberOfDislike++;this.numberOfLikes--;this.chooseclassd=false;this.chooseclassl=true;}

    else{
      this.numberOfDislike--;this.chooseclassd=true;
    }
  }
}
