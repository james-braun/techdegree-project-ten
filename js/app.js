$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      for (i = 0; i < data.results.length; ++i) {
        $(`.person-${i} img`).attr('src', `${data.results[i].picture.thumbnail}`);
        $(`.person-${i} img`).attr('alt', `${data.results[i].name.first} ${data.results[i].name.last}`);
        $(`.person-${i} .name`).html(data.results[i].name.first + " " + data.results[i].name.last);
        $(`.person-${i} .email`).html(data.results[i].email);
        $(`.person-${i} .city`).html(data.results[i].location.city);
        $(`.person-${i} .phone`).html(data.results[i].phone);
        $(`.person-${i} .street`).html(data.results[i].location.street);
        $(`.person-${i} .state`).html(data.results[i].location.state);
        $(`.person-${I} .postcode`).html(data.results[i].location.postcode);
      }
    }
  });

  $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
  
      e.preventDefault();
    });
  
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
  
      e.preventDefault();
    });
  });