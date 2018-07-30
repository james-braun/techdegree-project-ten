$.ajax({
    url: 'https://randomuser.me/api/?results=12&?nat=us',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      for (i = 0; i < data.results.length; ++i) {
        $(`.person-${i} > img`).attr('src', `${data.results[i].picture.thumbnail}`);
        $(`.person-${i} .name`).html(data.results[i].name.first + " " + data.results[i].name.last);
        $(`.person-${i} .email`).html(data.results[i].email);
        $(`.person-${i} .city`).html(data.results[i].location.city);
        console.log($(`.name`).innerHTML);
      }
    }
  });