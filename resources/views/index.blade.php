<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Welcome to woof</title>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css">


</head>

<body>

    <main id="content " class="content">

        <div id="app">


            {{-- <section class="slider row d-flex">
                <div class="col-lg-5 slider-text">

                </div>
                <div class="col-lg-7 slider-blop">
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
                            <img src="./assets/demo/misc/masked-img-1.jpg" alt="Image">
                        </figure>
            </section> --}}

            <section class="vc_row fullheight d-flex flex-wrap align-items-center pb-50">
                <div class="lqd-particles-bg-wrap">
                    <div class="ld-particles-container">
                        <div class="ld-particles-inner" id="ld-1527244273759-519b63e0-a9d6" data-particles="true"
                            data-particles-options='{"particles":{"number":{"value":5,"density":2},"color":{"value":["#f9b851","#60eacb","#ff97af","#4e6bff"]},"shape":{"type":["circle","edge","triangle"]},"size":{"value":55,"random":true,"anim":{"enable":true,"size_min":40,"speed":5}},"move":{"enable":true,"direction":"right","speed":1,"random":true,"out_mode":"out","attract":{"enable":true,"rotateX":1200,"rotateY":600}}},"interactivity":[],"retina_detect":true}'>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row d-flex flex-wrap align-items-center">
                        <div class="lqd-column col-lg-5 col-md-6 lqd-column" data-custom-animations="true"
                            data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":51,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
                            <div class="ld-fancy-heading mask-text">
                                <h1 data-split-text="true" data-custom-animations="true"
                                    data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":1200,"delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"scale":1},"animations":{"scale":1}}'
                                    data-split-options='{"type":"lines"}'>
                                    <span class="ld-fh-txt"> Love has four paws</span>
                                </h1>
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
                                <figure class="clip-svg img-fluid" data-responsive-bg="true"
                                    style="clip-path: url(#masked-image-1); -webkit-clip-path: url(#masked-image-1); background-image: url(/images/pets-1.jpg);">
                                    <img src="/images/pets-1.jpg" alt="Image">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 ">
                            <div class="intro-services">
                                <span class="title-span">Welcome to Woof</span> is a professional and personalized Pet
                                Care
                                Company licensed, bonded and insured for the safe of your pet, home and property.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section-services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card-img center-card row text-center">
                                <div class="col-lg-4 mb-20">
                                    <div class="find_out_feature_wrap">
                                        <img src="https://paymentx.io/images/f_ic_01.svg"
                                            alt="Set up repeat instructions" class="icon-feature">
                                        <h3 class="feature-title">Dog walking</h3>
                                        <p class="feature-desc">Solo and pack walks, 30 minutes, 1 hour</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-20">
                                    <div class="find_out_feature_wrap">
                                        <img src="https://paymentx.io/images/f_ic_01.svg"
                                            alt="Set up repeat instructions" class="icon-feature">
                                        <h3 class="feature-title">Drop in visits </h3>
                                        <p class="feature-desc">25 minutes visits for cats and small animals</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-20">
                                    <div class="find_out_feature_wrap">
                                        <img src="https://paymentx.io/images/f_ic_01.svg"
                                            alt="Set up repeat instructions" class="icon-feature">
                                        <h3 class="feature-title">Boarding & Sitting </h3>
                                        <p class="feature-desc">Personalized boarding/sitting in sitters or owner home
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card-img center-card row text-center">
                                <div class="col-lg-4 mb-20">
                                    <div class="find_out_feature_wrap">
                                        <img src="https://paymentx.io/images/f_ic_01.svg"
                                            alt="Set up repeat instructions" class="icon-feature">
                                        <h3 class="feature-title">Pet concierge </h3>
                                        <p class="feature-desc">Pet taxi for grooming appointments, vet visits and more
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-20">
                                    <div class="find_out_feature_wrap">
                                        <img src="https://paymentx.io/images/f_ic_01.svg"
                                            alt="Set up repeat instructions" class="icon-feature">
                                        <h3 class="feature-title">Outdoor excursions</h3>
                                        <p class="feature-desc">Extended group walks, hiking and doggie parks</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-20">
                                    <div class="find_out_feature_wrap">
                                        <img src="https://paymentx.io/images/f_ic_01.svg"
                                            alt="Set up repeat instructions" class="icon-feature">
                                        <h3 class="feature-title">Doggie Day Care </h3>
                                        <p class="feature-desc">Home-based daycare</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section class="split-section section-about">
                <div class="side-background">
                    <div class="col-lg-6 img-side img-left">
                        <div class="img-holder img-cover" data-jarallax='{"speed": 0.6}'
                            style="background-image: url(http://themes.potenzaglobalsolutions.com/html/webster-responsive-multi-purpose-html5-template/images/bg/09.jpg);">
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-5">
                            <div class="section-title">
                                <h2 class="text-white title">About us</h2>
                                <p class="text-white">Me encantaría contarte un poco sobre este proyecto que inició en
                                    diciembre
                                    2017, a través de una plataforma en línea que me ha permitido conocer a mis clientes
                                    y a
                                    sus
                                    mascotas.
                                </p>
                                <p class="text-white">
                                    Te cuento que, al día de hoy, el 75% de los clientes que confían en mí el cuidado de
                                    sus
                                    mascotas, son regulares desde entonces. Nuestro equipo está conformado por amantes
                                    certificados de los animales.

                                </p>

                                <img class="mt-20"
                                    src="http://themes.potenzaglobalsolutions.com/html/webster-responsive-multi-purpose-html5-template/images/signature.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section-services">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <div class="testimonial">
                                        {{-- <div class="testimonial-avatar"> <img alt="" src="images/team/03.jpg"> </div> --}}
                                        <div class="testimonial-info"> Denise is the BEST! She took excellent care of my
                                            dog
                                            and
                                            provided incredible updates, along with photos, every day. She took him to
                                            the
                                            dog
                                            park and made him part of her family while we were away. I highly recommend
                                            her
                                            to
                                            anyone who wants to the peace of mind that your pup is in excellent hands
                                            when
                                            you
                                            can't be there</div>
                                        <div class="author-info"> <strong>- <span>Name 1</span> </strong> </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="testimonial">
                                        {{-- <div class="testimonial-avatar"> <img alt="" src="images/team/03.jpg"> </div> --}}
                                        <div class="testimonial-info"> Denise and Jon did a great job taking care of my
                                            dog
                                            Mozzie! Denise took very detailed notes during our meet and greet before I
                                            book
                                            his
                                            stay with them, and she provided updates complete with pictures and video so
                                            I
                                            could
                                            know how he was doing. We will be using their services again.</div>
                                        <div class="author-info"> <strong>- <span>Sarah H.</span></strong> </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="testimonial">
                                        {{-- <div class="testimonial-avatar"> <img alt="" src="images/team/03.jpg"> </div> --}}
                                        <div class="testimonial-info"> Denise was amazing with my dog Winston. She took
                                            special
                                            notice to little things that would make him more comfortable. She sent lots
                                            of
                                            pictures and checked in often which made being away from him, a little
                                            easier!
                                            Definitely will book again.</div>
                                        <div class="author-info"> <strong>- <span>Gabby B </span></strong> </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    </main>


    <script src="/js/app.js"></script>
    <script src="/js/animations.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"></script>

    <script>
        $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
    });

    </script>
</body>

</html>
