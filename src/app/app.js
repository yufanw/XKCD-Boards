angular
  .module("app", [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(["self", "https://xkcd.com/**"]);
  })
  .controller("AppCtrl", function(getComic) {
    this.home = {
      img: "https://imgs.xkcd.com/comics/types.png",
      num: 1537,
      title: "Types",
      year: "2015",
      alt: "My new language is great, but it has a few quirks"
    };
    this.currentComic = this.home;
    this.getcomic = getComic;
    this.commentText = "";
    this.commentName = "";
    this.comments = [];

    this.setNewComic = comic => {
      this.currentComic = comic;
      this.setComments();
    };

    this.setNewComments = comments => {
      this.comments = comments;
    };

    this.goHome = () => {
      this.currentComic = this.home;
      this.setComments();
    };

    this.setComments = () => {
      this.getcomic.getComments(this.currentComic.num, this.setNewComments);
    };

    this.postText = () => {
      if (this.commentText) {
        this.getcomic.postComment(
          this.commentName,
          this.commentText,
          this.currentComic.num
        );
        this.commentText = "";
        this.setComments();
      }
    };

    this.postText = this.postText.bind(this);

    this.setComments();
  })
  .component("appMain", {
    controller: "AppCtrl",
    templateUrl: "app/views/templates/app.html"
  });
