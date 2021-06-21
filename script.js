function wikisearch(search) {
  $.ajax({
    headers: {
      "Accept": "application/json"
    },
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + search,
    success: function (wikilist) {
      var title = wikilist[1];
      var description = wikilist[2];
      var link = wikilist[3];
      var html = "";
      for (i = 0; i < title.length; i++) {
        html += '<div class="search-item">';
        html += '<a target="_blank" class="search-item-underline" href=' + link[i] + '>';
        html += '<h1>' + title[i] + '</h1>';
        html += '<p>' + description[i] + '</p>';
        html += '</a>';
        html += '</div>';
      }
      // wikilist execute here
      $(".result").html('');
      $(".result").append(html);

      // for headline animation
      $('.headline').css('margin', '20px 0px 10px 0px');
      $('.headline').css('animation-duration', '0.5s');
      $('.headline').css('animation-name', 'headline-slide');

      // for random article animation
      $('.click-box').css('margin', '20px 0px 10px 0px');
      $('.click-box').css('animation-duration', '0.5s');
      $('.click-box').css('animation-name', 'click-box-slide');

      // for search-box animation
      $('.search-box').css('margin', '20px 0px 10px 0px');
      $('.search-box').css('animation-duration', '0.5s');
      $('.search-box').css('animation-name', 'search-box-slide');

      // for result animation
      $('.result').css('animation-duration', '5.0s');
      $('.result').css('animation-name', 'result-fade');
    }
  });
}

$(document).ready(function () {
  //on press enter key
  document.onkeypress = function (event) {
    if (event.which === 13 || event.keyCode === 13) {
      var search = $("#search-text-box").val();
      wikisearch(search);
      return false;
    }
    return true;
  };

  // on button click
  $("#search-btn").click(function () {
    var search = $("#search-text-box").val();
    wikisearch(search);
  });
});

// url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + search + "&format=json",

// url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+search+"&explaintext&prop=extracts&srwhat=text&srprop=timestamp&continue=&format=json",
