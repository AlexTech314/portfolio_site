$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.top-nav .nav-link').on('click', function () {
        $(`.menu-toggler`).removeClass('open');
        $('.top-nav').removeClass('open');
    })

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top -100
        }, 2000);
       
    });

    $('#up').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 2000);
    })

    // $(`.submit`).click(function (event) {
        
    //     event.preventDefault();
    //     console.log('clicked submit');

    //     let name =  $(`.name`).val()
    //     let email = $(`.email`).val()
    //     let subject = $(`.subject`).val()

    //     if(!(email.length > 5 && email.includes('@') && email.includes('.'))) {
    //         window.confirm("Please enter a valid email!");
    //         event.preventDefault();
    //     }     

    //     console.log(name, email, subject);

    // })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

