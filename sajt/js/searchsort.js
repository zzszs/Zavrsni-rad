jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };                  
           $('#search').keyup(function (){
              $('.card').removeClass('d-none');
              var filter = $(this).val();
              $('.card').find('.card-body a:not(:icontains("'+filter+'"))').parent().parent().addClass('d-none');
          })
  
          $('#nasc').click(function (){
      $('.card').sort(function(a,b) {
          return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
      }).appendTo("#carddeck");
  })
  
  $('#ndesc').click(function (){
      $('.card').sort(function(a,b) {
          return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? -1 : 1;
      }).appendTo("#carddeck");
  })
  
  $('#pasc').click(function (){
      $('.card').sort(function(a,b) {
          return $(a).find(".card-text .price").text() - $(b).find(".card-text .price").text();
      }).appendTo("#carddeck");
  })
  
  $('#pdesc').click(function (){
      $('.card').sort(function(a,b) {
          return $(b).find(".card-text .price").text() - $(a).find(".card-text .price").text();
      }).appendTo("#carddeck");
  })
