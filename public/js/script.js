// Header Scrolled
$(document).on('scroll', function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").addClass("scrolled");
        }
        else{
            $(".navbar").removeClass("scrolled");
        }
    });
});

// Side Menu
$(".toggle-menu").click(function () {
    $("header").toggleClass("active");
    $(this).toggleClass("active");
    $(".side-wrapper").toggleClass("active");
})

// Mega Menu
$(document).ready(function () {
    $(window).width() > 991 && $(".navbar .dropdown-mega").hover(function () {
        $(".navbar").toggleClass("activeMegaMenu");
        $(this).children(".dropdown-menu").toggleClass("show");
    })
})
// world-beauty
$('.owl-carousel.world-beauty-slider').owlCarousel({
    mouseDrag: false,
    touchDrag  : false,
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
    }
})
$('.owl-carousel.world-beauty-slider2').owlCarousel({
    loop: false,
    nav: true,
    touchDrag  : false,
    mouseDrag  : false,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 25,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:2,
        }
    }
})
// Team
$('.owl-carousel.team-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:3,
        },
    }
})
$('.owl-carousel.team-slider2').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 20,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        992:{
            items:4,
        },
    }
})
// Testimonials
$('.owl-carousel.testimonials-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:4,
        },
    }
})
// Handpicked Articles
$('.owl-carousel.handpicked-articles-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:3,
        },
    }
})
$('.owl-carousel.category-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
    }
})

// Trending
$('.owl-carousel.trending-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:2,
        }
    }
})
// Related news
$('.owl-carousel.related-news-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:3,
        }
    }
})

// Related news
$('.owl-carousel.related-articles-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:3,
        }
    }
})
// Technology video
$('.owl-carousel.technology-video-slider').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    dots: false,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
    }
})


$(' .slider-tabs').owlCarousel({
    dots: false,
    items: 4,
    loop:false,
    nav: true,
    navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
    margin: 20,
    autoWidth: true,
    responsiveClass:false,
})

$(document) .ready(function(){
    let tab =  $(".slider-tabs .nav-item .nav-link");
    tab.click(function(){
        tab.removeClass('active');
        $(this).addClass("active")
    });
});
// Technology
$(document).ready(function() {

    var big_images = $(document.getElementsByName("big_images"));
    var thumb_images = $(document.getElementsByName("thumb_images"));
    console.log(big_images);
        big_images
        .owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: false,
            navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
        })
        .on("changed.owl.carousel", syncPosition);

        thumb_images
        .on("initialized.owl.carousel", function() {
            thumb_images
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: false,
            nav: false,
            slideBy: 1,
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumb_images
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumb_images.find(".owl-item.active").length - 1;
        var start = thumb_images
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumb_images
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumb_images.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumb_images.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            big_images.data("owl.carousel").to(number, 100, true);
        }
    }

    thumb_images.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        big_images.data("owl.carousel").to(number, 300, true);
    });
});
$(document).ready(function() {
    var big_images1 = $(document.getElementsByName("big_images_right"));
    var thumb_images1 = $(document.getElementsByName("thumb_images_right"));
    console.log(big_images1);
    big_images1
        .owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: false,
            navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
        })
        .on("changed.owl.carousel", syncPosition);


        thumb_images1
        .on("initialized.owl.carousel", function() {
            thumb_images1
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: false,
            nav: false,
            slideBy: 1,
        })
        .on("changed.owl.carousel", syncPosition2);


    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumb_images1
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumb_images1.find(".owl-item.active").length - 1;
        var start = thumb_images1
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumb_images1
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumb_images1.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumb_images1.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            big_images1.data("owl.carousel").to(number, 100, true);
        }
    }

    thumb_images1.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        big_images1.data("owl.carousel").to(number, 300, true);
    });
});


// $(document).ready(function() {
//     var bigimage = $("#big3");
//     var thumbs = $("#thumbs3");
//     var syncedSecondary = true;

//     bigimage
//         .owlCarousel({
//             items: 1,
//             nav: true,
//             dots: false,
//             loop: false,
//             navText: ['<img src="/images/arrow-prev-yellow.svg" alt="Prev">','<img src="/images/arrow-next-yellow.svg" alt="Next">'] ,
//         })
//         .on("changed.owl.carousel", syncPosition);

//     thumbs
//         .on("initialized.owl.carousel", function() {
//             thumbs
//                 .find(".owl-item")
//                 .eq(0)
//                 .addClass("current");
//         })
//         .owlCarousel({
//             items: 3,
//             dots: false,
//             nav: false,
//             slideBy: 1,
//         })
//         .on("changed.owl.carousel", syncPosition2);

//     function syncPosition(el) {
//         //if loop is set to false, then you have to uncomment the next line
//         //var current = el.item.index;

//         //to disable loop, comment this block
//         var count = el.item.count - 1;
//         var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

//         if (current < 0) {
//             current = count;
//         }
//         if (current > count) {
//             current = 0;
//         }
//         //to this
//         thumbs
//             .find(".owl-item")
//             .removeClass("current")
//             .eq(current)
//             .addClass("current");
//         var onscreen = thumbs.find(".owl-item.active").length - 1;
//         var start = thumbs
//             .find(".owl-item.active")
//             .first()
//             .index();
//         var end = thumbs
//             .find(".owl-item.active")
//             .last()
//             .index();

//         if (current > end) {
//             thumbs.data("owl.carousel").to(current, 100, true);
//         }
//         if (current < start) {
//             thumbs.data("owl.carousel").to(current - onscreen, 100, true);
//         }
//     }

//     function syncPosition2(el) {
//         if (syncedSecondary) {
//             var number = el.item.index;
//             bigimage.data("owl.carousel").to(number, 100, true);
//         }
//     }

//     thumbs.on("click", ".owl-item", function(e) {
//         e.preventDefault();
//         var number = $(this).index();
//         bigimage.data("owl.carousel").to(number, 300, true);
//     });


// });
