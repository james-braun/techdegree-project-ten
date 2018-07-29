$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      for (i = 0; i < data.results.length; ++i) {
        $(`.person-${i} > img`).attr('src', `${data.results[i].picture.thumbnail}`);
        console.log($(`person-0`).outerHTML);
        $(`.person-${i} > div[class="name"]`).innerHTML = data.results[i].name.first + " " + data.results[i].name.last;
      }
    }
  });