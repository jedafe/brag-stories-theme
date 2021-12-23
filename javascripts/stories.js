window.addEventListener('DOMContentLoaded', (event) => {
  var $stories = $('body.stories, body.story');
  var $subscribeModal = $stories.find(".modal.subscribe");
  var $subscribeBtn = $stories.find(".btn-subscribe");

  $stories.find($subscribeBtn).on('click', function(e) {
    if ($(this).hasClass('user')) {
      $subscribeModal.addClass("active");
    } else {
      window.location.href = '/login'
    }
  });

  $subscribeModal.find(".modal.subscribe .modal-close").on('click', function(e) {
    $subscribeModal.removeClass("active");
  });

  $stories.on('click', function(e) {
    if ($(e.target).closest(".modal.subscribe .modal-content, .btn-subscribe").length == 0) {
      $subscribeModal.removeClass("active");
    }
  });

  $stories.find('.canvas p').each(function() {
    let $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
      $this.remove();
    }
  });
});