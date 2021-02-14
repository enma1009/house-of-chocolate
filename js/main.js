$(document).ready(function(){
    let content = setContent("topViews");
    $("#trending-items").html(content);
    $("#topViews").addClass("active-itm");
    initializeSlick();

      // Data for the carousel
      $("#topViews").on("click", function() {
        $('#trending-items').slick('unslick');
        $("#topViews").addClass("active-itm");
        $("#topComments, #topShares").removeClass("active-itm");
        content = setContent(this.id);
        $("#trending-items").html(content);
        initializeSlick();
      });
      $("#topComments").on("click", function() {
        $('#trending-items').slick('unslick');
        $("#topComments").addClass("active-itm");
        $("#topViews, #topShares").removeClass("active-itm");
        content = setContent(this.id);
        $("#trending-items").html(content);
        initializeSlick();
      });
      $("#topShares").on("click", function() {
        $('#trending-items').slick('unslick');
        $("#topShares").addClass("active-itm");
        $("#topViews, #topComments").removeClass("active-itm");
        content = setContent(this.id);
        $("#trending-items").html(content);
        initializeSlick();
      });
  });

  function setContent(id) {
    //console.log(id);
    let result = "";
    switch(id) {
        case "topViews":
            for(let x of mostViewed) {
                result += `<div class="p-2 text-center"><img src="imgs/news/most-viewed/${x.img}" width="100%" alt="" class="pb-2">
                <h4 class="trending-title fs-5 fw-bold light-red-font">${x.title}</h4><img src="imgs/views-icon.svg" alt="" width="25px" class="d-inline-block align-middle"> <a href="#" class="trending-link fst-italic dark-red-font mb-5">${x.viewNumber} views / Read More &#62;</a></div>`;
            }
        break;
        case "topComments":
            for(let x of mostCommented) {
                result += `<div class="p-2 text-center"><img src="imgs/news/most-commented/${x.img}" width="100%" alt="" class="pb-2">
                <h4 class="trending-title fs-5 fw-bold light-red-font">${x.title}</h4><img src="imgs/comments-icon.svg" alt="" width="20px" class="d-inline-block align-middle"> <a href="#" class="trending-link fst-italic dark-red-font mb-5">${x.commentNumber} comments / Read More &#62;</a></div>`;
            }
        break;
        case "topShares":
            for(let x of mostShared) {
                result += `<div class="p-2 text-center"><img src="imgs/news/most-shared/${x.img}" width="100%" alt="" class="pb-2">
                <h4 class="trending-title fs-5 fw-bold light-red-font">${x.title}</h4><img src="imgs/shares-icon.svg" alt="" width="20px" class="d-inline-block align-middle"> <a href="#" class="trending-link fst-italic dark-red-font mb-5">${x.sharesNumber} shares / Read More &#62;</a></div>`;
            }
        break;
    }
    //console.log(result);
    return result;
  }

  function initializeSlick() {
    $('#trending-items').slick({
        dots: true,
        infinite: true,
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
  }