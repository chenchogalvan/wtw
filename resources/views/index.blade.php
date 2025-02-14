<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Welcome to woof</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet">

    <link rel="stylesheet" href="/css/styles.css">
    <script src="https://kit.fontawesome.com/15a0d76b97.js" crossorigin="anonymous"></script>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">

    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"> --}}


</head>

<body data-mobile-nav-trigger-alignment="right" data-mobile-nav-align="left" data-mobile-nav-style="modern"
    data-mobile-nav-shceme="gray" data-mobile-header-scheme="gray" data-mobile-nav-breakpoint="1199">

    <div id="page-loader"><span class="preloader-interior"><img src="/images/loader/loader.png" alt=""></span></div>

    <div id="wrap">
        <header class="main-header main-header-overlay" data-sticky-header="true"
            data-sticky-options='{ "stickyTrigger": "first-section" }'>
            <div class="mainbar-wrap">
                <div class="megamenu-hover-bg"></div>
                <div class="container-fluid mainbar-container">
                    <div class="mainbar">
                        <div class="row mainbar-row align-items-lg-stretch px-4">
                            <div class="col-auto pr-5">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="#" rel="home">
                                        <span class="navbar-brand-inner">
                                            <img class="logo-dark" src="/images/logo.png" alt="Welcome to woof"
                                                style="height:50px">
                                            <img class="logo-sticky" src="/images/logo.png" alt="Welcome to woof"
                                                style="height:50px">
                                            <img class="mobile-logo-default" src="/images/logo.png"
                                                alt="Welcome to woof" style="height:50px">
                                            <img class="logo-default" src="/images/logo.png" alt="Welcome to woof"
                                                style="height:50px">
                                        </span>
                                    </a>
                                    <button type="button" class="navbar-toggle collapsed nav-trigger style-mobile"
                                        data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false"
                                        data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'>
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="bars">
                                            <span class="bar"></span>
                                            <span class="bar"></span>
                                            <span class="bar"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div class="collapse navbar-collapse" id="main-header-collapse">
                                    <ul id="primary-nav"
                                        class="main-nav nav align-items-lg-stretch justify-content-lg-start"
                                        data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'
                                        data-localscroll="true">
                                        <li>
                                            <a href="#content">
                                                <span class="link-icon"></span>
                                                <span class="link-txt">
                                                    <span class="link-ext"></span>
                                                    <span class="txt">Home</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#services">
                                                <span class="link-icon"></span>
                                                <span class="link-txt">
                                                    <span class="link-ext"></span>
                                                    <span class="txt">Services</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about">
                                                <span class="link-icon"></span>
                                                <span class="link-txt">
                                                    <span class="link-ext"></span>
                                                    <span class="txt">About Denise</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">
                                                <span class="link-icon"></span>
                                                <span class="link-txt">
                                                    <span class="link-ext"></span>
                                                    <span class="txt">Testimonials</span>
                                                </span>
                                            </a>
                                        </li>
                                        {{-- <li>
                                            <a href="#location">
                                                <span class="link-icon"></span>
                                                <span class="link-txt">
                                                    <span class="link-ext"></span>
                                                    <span class="txt">Locations</span>
                                                </span>
                                            </a>
                                        </li> --}}
                                        <li>
                                            <a href="#contact">
                                                <span class="link-icon"></span>
                                                <span class="link-txt">
                                                    <span class="link-ext"></span>
                                                    <span class="txt">Make an appointment</span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main id="content" class="content">

            <div id="app">

                <section class="vc_row fullheight d-flex flex-wrap align-items-center ">
                    <div class="lqd-particles-bg-wrap">
                        <div class="ld-particles-container">
                            {{-- <div class="ld-particles-inner" id="ld-1527244273759-519b63e0-a9d6" data-particles="true"
                                data-particles-options='{"particles":{"number":{"value":5,"density":2},"color":{"value":["#f9b851","#60eacb","#ff97af","#4e6bff"]},"shape":{"type":["circle","edge","triangle"]},"size":{"value":55,"random":true,"anim":{"enable":true,"size_min":40,"speed":5}},"move":{"enable":true,"direction":"right","speed":1,"random":true,"out_mode":"out","attract":{"enable":true,"rotateX":1200,"rotateY":600}}},"interactivity":[],"retina_detect":true}'>
                        </div> --}}
                    </div>
            </div>
            <div class="container">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="lqd-column col-lg-5 col-md-6 lqd-column">
                        <div class="ld-fancy-heading mask-text pt-50">
                            <img src="/images/logo.png" alt="" srcset="">

                        </div>
                        <div class="ld-fancy-heading mask-text ">
                            <h1>
                                {{-- <span class="ld-fh-txt"> Love has four paws</span> --}}
                            </h1>
                        </div>
                        <div class="row">
                            <div class="lqd-column col-sm-6 mb-3 mb-md-0">
                                <a href="#"
                                    class="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-14 font-weight-semibold"
                                    data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
                                    <span>
                                        <span class="btn-txt">ver más</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="lqd-column col-lg-7 col-md-6 hidden-xs hidden-sm hidden-md">
                        <div class="ld-masked-image" data-dynamic-shape="true">
                            <svg version="1.1" class="scene" width="0" height="0" preserveAspectRatio="none"
                                viewBox="0 0 1440 800">
                                <defs>
                                    <clipPath id="masked-image-1">
                                        <path fill="black"
                                            d="M131,40 C84.135,83.534 96.819,148.446 63.283,217.394 C31.508,282.723 -3.621,324.812 1.461,394.323 C3.451,421.533 12.117,449.828 29.796,480.002 C87.412,578.34 -15.301,663.448 94.611,833.387 C156.302,928.77 316.559,918.015 435.971,936.052 C572.741,956.711 653.384,1003.601 753.566,971.715 C877.689,932.209 924.99262,809.932822 972.63862,707.700822 C1063.84662,512.000822 1038.71071,197.732895 884.476705,67.2268952 C788.919705,-13.6291048 714.704,70.008 529,43 C339.693,15.468 212.609,-35.808 131,40 Z"
                                            pathdata:id="
                                                                    M175.270836,26.7977911 C128.405836,70.3317911 129.938279,144.739124 96.4022789,213.687124 C64.6272789,279.016124 41.242383,286.071679 46.324383,355.582679 C48.314383,382.792679 79.5246278,459.251586 88.7738696,492.334164 C116.497714,591.496483 -75.3047466,680.552915 34.6072534,850.491915 C96.2982534,945.874915 281.559,906.015 400.971,924.052 C537.741,944.711 678.161685,902.348368 778.343685,870.462368 C902.466685,830.956368 927.354,806.232 975,704 C1066.208,508.3 1058.68971,185.848951 904.455709,55.3429506 C808.898709,-25.5130494 786.027661,117.60054 600.323661,90.5925401 C411.016661,63.0605401 256.879836,-49.0102089 175.270836,26.7977911 Z;
                                                                    M200.391256,6 C138.06059,22.7990703 77.9622177,42.6445401 44.4262177,111.59254 C12.6512177,176.92154 -4.1051307,212.01786 0.976869296,281.52886 C2.9668693,308.73886 99.0297526,534.545109 108.278994,567.627688 C136.002839,666.790006 -29.1381304,721.523368 80.7738696,891.462368 C142.46487,986.845368 331.636556,840.153183 451.048556,858.190183 C587.818556,878.849183 705.371102,948.496676 805.553102,916.610676 C929.676102,877.104676 941.497784,689.3436 989.143784,587.1116 C1080.35178,391.4116 1050.68971,206.848951 896.455709,76.3429506 C800.898709,-4.5130494 778.027661,138.60054 592.323661,111.59254 C403.016661,84.0605401 312.765712,-24.2866392 200.391256,6 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <figure class="clip-svg" data-responsive-bg="true"
                                style="clip-path: url(#masked-image-1); -webkit-clip-path: url(#masked-image-1);">
                                <img src="/images/pets-1.jpg" alt="Image">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            </section>


            <section class="vc_row pt-120 pb-60" id="services">
                <div class="container">
                    <div class="row">
                        <div class="lqd-column col-lg-12">
                            <header class="fancy-title" data-custom-animations="true"
                                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateX":-32,"opacity":0},"animations":{"translateX":0,"opacity":1}}'>
                                <h2 class="mt-md-4 pr-md-7 mb-4 text-center feature-title">Welcome to Woof is a
                                    professional and personalized Pet Care Company licensed, bonded and insured for the
                                    safe of your pet, home and property.
                                </h2>
                            </header>
                        </div>
                    </div>
                </div>
            </section>



            <section class="vc_row pt-30 pb-60" ">
                    <div class=" container">
                <div class="row" data-custom-animations="true"
                    data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"180","initValues":{"scale":0.8,"opacity":0},"animations":{"scale":1,"opacity":1}}'>
                    <div class="lqd-column col-md-6">
                        <div class="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled"
                            id="ld_icon_box_5c4e9c4475e68" data-plugin-options='{"color":"#3d59e8"}'>
                            <div class="iconbox-icon-wrap">
                                <span class="iconbox-icon-container">
                                    <img src="/images/services/service-6.png" class="img-fluid" style="height:100px;"
                                        alt="">
                                </span>
                            </div>
                            <div class="contents">
                                <h3 class="mb-2">Dog walking</h3>
                                <p>Solo and pack walks, 30 minutes, 1 hour</p>
                            </div>
                        </div>
                    </div>
                    <div class="lqd-column col-md-6">
                        <div class="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled"
                            id="ld_icon_box_5c4e9c4475e69" data-plugin-options='{"color":"#28d5a7"}'>
                            <div class="iconbox-icon-wrap">
                                <span class="iconbox-icon-container">
                                    <img src="/images/services/service-3.png" class="img-fluid" style="height:100px;"
                                        alt="">
                                </span>
                            </div>
                            <div class="contents">
                                <h3 class="mb-2">Drop in visits </h3>
                                <p>25 minutes visits for cats and small animals</p>
                            </div>
                        </div>
                    </div>
                    <div class="lqd-column col-md-6">
                        <div class="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled"
                            id="ld_icon_box_5c4e9c4475e70" data-plugin-options='{"color":"#f9b851"}'>
                            <div class="iconbox-icon-wrap">
                                <span class="iconbox-icon-container">
                                    <img src="/images/services/service-2.png" class="img-fluid" style="height:100px;"
                                        alt="">
                                </span>
                            </div>
                            <div class="contents">
                                <h3 class="mb-2">Pet Sitting </h3>
                                <p>Personalized boarding/sitting in sitters or owner home</p>
                            </div>
                        </div>
                    </div>
                    <div class="lqd-column col-md-6">
                        <div class="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled"
                            id="ld_icon_box_5c4e9c4475e71" data-plugin-options='{"color":"#fe688b"}'>
                            <div class="iconbox-icon-wrap">
                                <span class="iconbox-icon-container">
                                    <img src="/images/services/service-4.png" class="img-fluid" style="height:100px;"
                                        alt="">
                                </span>
                            </div>
                            <div class="contents">
                                <h3 class="mb-2">Pet concierge </h3>
                                <p>Pet taxi for grooming appointments, vet visits and
                                    more</p>
                            </div>
                        </div>
                    </div>
                    <div class="lqd-column col-md-6">
                        <div class="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled"
                            id="ld_icon_box_5c4e9c4475e70" data-plugin-options='{"color":"#f9b851"}'>
                            <div class="iconbox-icon-wrap">
                                <span class="iconbox-icon-container">
                                    <img src="/images/services/service-1.png" class="img-fluid" style="height:100px;"
                                        alt="">
                                </span>
                            </div>
                            <div class="contents">
                                <h3 class="mb-2">Training</h3>
                                <p>Train your pet to learn great stuffs</p>
                            </div>
                        </div>
                    </div>
                    <div class="lqd-column col-md-6">
                        <div class="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled"
                            id="ld_icon_box_5c4e9c4475e71" data-plugin-options='{"color":"#fe688b"}'>
                            <div class="iconbox-icon-wrap">
                                <span class="iconbox-icon-container">
                                    <img src="/images/services/service-5.png" class="img-fluid" style="height:100px;"
                                        alt="">
                                </span>
                            </div>
                            <div class="contents">
                                <h3 class="mb-2">Doggie Day Care</h3>
                                <p>Home-based daycare</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </section>



    <section class="vc_row pt-60 pb-90" id="about">
        <div class="container">
            <div class="row d-flex flex-wrap align-items-center">
                <div class="lqd-column col-lg-5 col-md-6 mb-5 mb-md-0" data-custom-animations="true"
                    data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
                    <header class="fancy-title mb-60">
                        <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">Denise
                            Vazquez</h6>
                        <h2 class="mt-4 mb-4">About us</h2>


                        <p>I would love to let you know about this project that started in December 2017, through an
                            online platform that has allowed me to meet my clients and their pets.</p>
                        <p>We organized everything through the platform, however, I decided to start my own company
                            since I realized that I am completely in love with what I do and I decided to become
                            independent.</p>
                        <p>Today, 90% of our customers who trust me take care of their pets, are regular since then. I
                            make sure that our team is made up of certified animal lovers.</p>

                    </header>

                </div>
                <div class="lqd-column col-lg-6 col-md-5 col-md-offset-1">
                    <div class="liquid-img-group-single stretch-to-right" data-shadow-style="4" data-roundness="4"
                        data-inview="true" data-animate-shadow="true" data-reveal="true"
                        data-reveal-options='{"direction":"rl","bgcolor":"rgb(25, 38, 47)"}'>
                        <div class="liquid-img-group-img-container">
                            <div class="liquid-img-container-inner">
                                <figure>
                                    {{-- <img src="http://themes.potenzaglobalsolutions.com/html/webster-responsive-multi-purpose-html5-template/images/bg/09.jpg"
                                        alt="Banner" /> --}}

                                    <img src="/images/denisse.jpeg" alt="Banner" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





    <section class="vc_row pt-200 pb-100" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="lqd-column col-md-8 col-md-offset-2">
                    <header class="fancy-title text-center mb-75">
                        <h2 class="mt-4 mb-4">What they said</h2>
                    </header>
                </div>
                <div class="lqd-column col-md-12">
                    <div class="carousel-container carousel-nav-left">
                        <div class="row">
                            <div class="col-md-3 col-xs-12 mb-4 mb-md-0">
                                <div class="carousel-items row testimonials-details w-100 row"
                                    data-lqd-flickity='{ "asNavFor": ".carousel-quotes-1", "rightToLeft": true }'>
                                    {{-- <div class="col-md-4 col-sm-3 col-xs-4">
                                        <div
                                            class="testimonial testimonial-lg testimonial-details-sm text-right testimonials-details-only ">
                                            <div class="testimonial-details">
                                                <figure class="avatar mb-2">
                                                    <img src="/images/services/service-3.svg"
                                                        alt="Ivana Jones" />
                                                </figure>
                                                <div class="testimonial-info">
                                                    <h5 class="">Name 1</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div> --}}
                                    <div class="col-md-4 col-sm-3 col-xs-4">
                                        <div
                                            class="testimonial testimonial-lg testimonial-details-sm text-right testimonials-details-only ">
                                            <div class="testimonial-details">
                                                <figure class="avatar mb-2">
                                                    <img src="/images/services/service-5.svg" alt="Ivana Jones" />
                                                </figure>
                                                <div class="testimonial-info">
                                                    <h5 class="">Sarah H.</h5>
                                                    {{-- <h6>Founder</h6> --}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-4">
                                        <div
                                            class="testimonial testimonial-lg testimonial-details-sm text-right testimonials-details-only ">
                                            <div class="testimonial-details">
                                                <figure class="avatar mb-2">
                                                    <img src="/images/services/service-2.svg" alt="Ivana Jones" />
                                                </figure>
                                                <div class="testimonial-info">
                                                    <h5 class="">Gabby B</h5>
                                                    {{-- <h6>Founder</h6> --}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-md-offset-1 col-xs-offset-0 col-xs-12">
                                <div class="carousel-items row testimonials-quotes row carousel-quotes-1"
                                    data-lqd-flickity='{ "prevNextButtons": true, "navStyle": 2, "navOffsets": { "nav": { "left": 15 } }, "rightToLeft": true }'>
                                    {{-- <div class="col-xs-12">
                                        <div
                                            class="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only">
                                            <div class="testimonial-quote">
                                                <blockquote class="font-size-18 lh-225">
                                                    <p>Denise is the BEST! She took
                                                excellent care of my dog and provided incredible updates, along
                                                with photos, every day. She took him to the dog park and made
                                                him part of her family while we were away. I highly recommend
                                                her to anyone who wants to the peace of mind that your pup is in
                                                excellent hands when you can't be there.</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div> --}}
                                    <div class="col-xs-12">
                                        <div
                                            class="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only">
                                            <div class="testimonial-quote">
                                                <blockquote class="font-size-18 lh-225">
                                                    <p>Denise and Jon did a great job taking
                                                        care of my dog Mozzie! Denise took very detailed notes during
                                                        our meet and greet before I book his stay with them, and she
                                                        provided updates complete with pictures and video so I could
                                                        know how he was doing. We will be using their services again.
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div
                                            class="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only">
                                            <div class="testimonial-quote">
                                                <blockquote class="font-size-18 lh-225">
                                                    <p>Denise was amazing with my dog
                                                        Winston. She took special notice to little things that would
                                                        make him more comfortable. She sent lots of pictures and checked
                                                        in often which made being away from him, a little easier!
                                                        Definitely will book again.</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section id="contact">
        <div class="vc_row pt-120 mt-50 pb-120 bg-cover bg-center" style="background-image: url(/images/pets-2.jpg);">
            <div class="liquid-row-overlay liquid-row-overlay-hover" style="background:rgba(22, 22, 22, 0.45)"></div>
            <div class="liquid-row-overlay" style="background:rgba(22, 22, 22, 0.15)"></div>
            <div class="container">
                <div class="row">
                    <div class="lqd-column col-md-5 col-xs-12 px-md-4 text-center">
                        <div class="lqd-column-inner bg-white border-radius-6 px-3 px-md-4 pt-40 pb-40">
                            <header class="fancy-title">
                                <h2 class="mb-2 font-size-30 font-weight-light">Contact us</h2>
                                <p class="mt-0">Si tienes alguna duda o aclaración, ponte en contacto con nosotros por
                                    el
                                    siguiente medio:
                                </p>
                            </header>
                            <div class="contact-form contact-form-inputs-filled contact-form-button-block font-size-14">
                                <form action="assets/php/mailer.php" method="post" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <input class="bg-gray text-dark" type="text" name="name"
                                                aria-required="true" aria-invalid="false" placeholder="Name" required>
                                        </div>
                                        <div class="col-md-12">
                                            <input class="bg-gray text-dark" type="email" name="email"
                                                aria-required="true" aria-invalid="false" placeholder="Phone number"
                                                required>
                                        </div>
                                        <div class="col-md-12">
                                            <input class="bg-gray text-dark" type="tel" name="mobile"
                                                aria-required="true" aria-invalid="false" placeholder="E-mail" required>
                                        </div>

                                        <div class="col-md-12">
                                            <textarea class="bg-gray text-dark" type="text" name="description"
                                                aria-required="true" aria-invalid="false" placeholder="Your message"
                                                required></textarea>
                                        </div>
                                        <div class="col-md-12 text-md-right">
                                            <input type="submit"
                                                style="font-weight:600 !important; text-transform:uppercase;"
                                                value="Submit form">
                                        </div>
                                        <div class="col-md-12 text-center" style="margin-top:25px;">
                                            <a href="{{ route('appointment') }}"
                                                class="btn btn-solid-2 text-uppercase font-size-14 font-weight-semibold"
                                                data-localscroll="true"
                                                data-localscroll-options='{"scrollBelowSection":true}' target="_blank">
                                                <span>
                                                    <span class="btn-txt">MAKE AN APPOINTMENT</span>
                                                </span>
                                            </a>
                                        </div>

                                        <div class="col-md-12 text-center" style="margin-top:25px;">
                                            <a href="https://wa.me/18184728107"
                                                class="btn btn-solid-2 text-uppercase font-size-14 font-weight-semibold"
                                                data-localscroll="true"
                                                data-localscroll-options='{"scrollBelowSection":true}' target="_blank">

                                                <span>
                                                    <span class="btn-txt" style="display:inline-block">Whatsapp</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                                <div class="contact-form-result hidden"></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    </div>




    </main>

    {{-- <footer class="main-footer pt-80">
        <section class="bt-fade-white-015 pt-30 pb-30">
            <div class="container">
                <div class="row">
                    <div class="lqd-column col-md-6 col-md-offset-3 text-center">
                        <figure class="mb-40">
                            <img src="/images/logo.png" alt="Logo" style="height:60px;">
                        </figure>
                        <p>© 2019 Welcome to Woof.</p>
                    </div>
                </div>
            </div>
        </section>
    </footer> --}}

    <footer class="main-footer pt-120 pb-80">
        <section class="vc_row pt-60">
            <div class="container">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="lqd-column col-md-8 d-flex flex-wrap align-items-center">
                        <figure class="mr-3">
                            <img src="/images/logo.png" alt="Welcome to Woof Logo" style="height:60px;">
                        </figure>
                        <p class="font-size-16 my-0">Copyright 2020 <span
                                class="text-primary font-weight-bold">Welcome to woof</span>. All Rights Reserved. <br> <a href="tel:+18184728107">Phone: +1 818 472 8107
                                </a> | <a href="mailto:hello@welcometowoof.com">Email: hello@welcometowoof.com</a></p>
                    </div>
                    <div class="lqd-column col-md-4 text-md-right">
                        <ul class="social-icon social-icon-md mb-25">
                            <li><a href="https://www.instagram.com/welcometowoof/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://wa.me/18184728107" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </div>





    {{-- <script src="/js/app.js"></script>
    <script src="/js/animations.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"></script> --}}
    <script src="/js/jquery.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <script src="/js/gsap.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js">
    </script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/locales/bootstrap-datepicker.es.min.js">
    </script>



    <script type="text/javascript">
        jQuery(window).load(function(){
        jQuery('#page-loader').fadeOut(500);
    });


    </script>

</body>

</html>
