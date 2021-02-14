$(document).ready(function(){
    // Image carousel
    $('#trending-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      // Data for the carousel
      $("#topViews").on("click", function() {
        let content = setContent(this.id);
        $("#trending-items").html(content);
      })
  });

  function setContent(id) {
    console.log(id);
    return "<p>hello from function</p>";
  }