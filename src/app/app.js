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
    this.delay = 500 + (Math.random() * 3500);
    this.toggle = false;

    this.setNewComic = comic => {
      this.delay = 500 + (Math.random() * 1500);
      this.currentComic = comic;
      this.setComments();
      const context = this;
      setTimeout(() => {
        context.delay = 0;
      }, this.delay + 700);
    };

    this.setNewComments = comments => {
      this.comments = comments;
      const context = this;
      setTimeout(() => {
        context.loading = false;
      }, this.delay);
    };

    this.goHome = () => {
      this.currentComic = this.home;
      this.setComments();
    };

    this.setComments = () => {
      this.toggle = false;
      this.loading = true;
      this.comments = [];
      this.getcomic.getComments(this.currentComic.num, this.setNewComments);
    };

    this.fetch = () => {
      this.getcomic.getComments(this.currentComic.num, this.setNewComments);
    };

    this.toggleComments = () => {
      this.toggle = !this.toggle;
    };

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

    this.getcomic.getLatest((comic) => {
      this.currentComic = comic;
      this.setComments();
      this.delay = 0;
    });

    setInterval(this.fetch.bind(this), 700);
  })
  .component("appMain", {
    controller: "AppCtrl",
    templateUrl: "app/views/templates/app.html"
  });