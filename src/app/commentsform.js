angular
  .module("app")
  .controller("formCtrl", function() {
    this.handleClick = () => {
      this.post();
    };

    this.handleKeyUp = () => {
      this.post();
    };
  })
  .component("commentsForm", {
    controller: "formCtrl",
    bindings: {
      service: "<",
      comments: "<",
      comic: "<",
      post: "<",
      text: "=",
      name: "="
    },
    templateUrl: "app/views/templates/commentsform.html"
  });
