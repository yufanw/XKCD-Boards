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
    this.loading = true;

    this.setNewComic = comic => {
      this.currentComic = comic;
      this.setComments();
    };

    this.setNewComments = comments => {
      this.loading = false;
      this.comments = comments;
    };

    this.goHome = () => {
      this.currentComic = this.home;
      this.setComments();
    };

    this.setComments = () => {
      this.loading = true;
      this.comments = [];
      this.getcomic.getComments(this.currentComic.num, this.setNewComments);
    };

    this.fetch = () => {
      this.getcomic.getComments(this.currentComic.num, this.setNewComments);
    }

    this.postText = () => {
      if (this.commentText) {
        this.getcomic.postComment(
          this.commentName,
          this.commentText,
          this.currentComic.num
        );
        this.commentText = "";
        this.fetch();
      }
    };

    this.postText = this.postText.bind(this);

    this.getcomic.getLatest(this.setNewComic);

    setInterval(this.fetch.bind(this), 700);
  })
  .component("appMain", {
    controller: "AppCtrl",
    templateUrl: "app/views/templates/app.html"
  });
