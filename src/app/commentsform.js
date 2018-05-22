angular
  .module("app")
  .controller("formCtrl", function() {
    this.handleClick = () => {
      this.post();
      this.commentText = "";
    };

    this.handleKeyUp = () => {
      this.post();
      this.commentText = "";
    };
  })
  .component("commentsForm", {
    controller: "formCtrl",
    bindings: {
      service: "<",
      comments: "<",
      comic: "<",
      post: "<"
    },
    templateUrl: "app/views/templates/commentsform.html"
  });
