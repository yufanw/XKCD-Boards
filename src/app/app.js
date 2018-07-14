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
    this.currentComic;
    this.getcomic = getComic;
    this.commentText = "";
    this.commentName = "";
    this.comments = [];
    this.loading = {
      comments: true,
      comic: true
    };

    this.setNewComic = comic => {
      this.currentComic = comic;
      this.setComments();
    };

    this.setNewComments = comments => {
      this.loading.comments = false;
      this.comments = comments;
    };

    this.goHome = () => {
      this.currentComic = this.home;
      this.setComments();
    };

    this.setComments = () => {
      this.loading.comments = true;
      this.comments = [];
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

    // Show loader before loading comic;
    setTimeout(() => {
      this.getcomic.getLatest(this.setNewComic);
    }, 0);
  })
  .component("appMain", {
    controller: "AppCtrl",
    templateUrl: "app/views/templates/app.html"
  });
