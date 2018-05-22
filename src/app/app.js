angular
  .module("app", [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(["self", "https://xkcd.com/**"]);
  })
  .controller("AppCtrl", function(getComic) {
    this.default = {
      img: "https://imgs.xkcd.com/comics/types.png",
      num: 1537,
      title: "Types",
      year: "2015",
      alt: "My new language is great, but it has a few quirks"
    };
    this.currentComic = this.default;
    this.home = this.default;
    this.getcomic = getComic;
    this.commentText = "";
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

    this.setHome = () => {
      this.home = this.currentComic;
    };

    this.resetHome = () => {
      this.home = this.default;
    };

    this.setComments = () => {
      this.getcomic.getComments(this.currentComic.num, this.setNewComments);
    };

    this.setComments();
  })
  .component("appMain", {
    controller: "AppCtrl",
    templateUrl: "app/views/templates/app.html"
  });
