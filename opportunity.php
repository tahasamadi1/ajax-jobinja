<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="fontawesome/css/all.css">
    <link rel="stylesheet" href="node_modules/normalize.css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body id="opportunityPageProduct">
<div class="col-12 m-0 p-0 navbarContainer" style="z-index: 1111">
    <nav class="navbar navbar-expand-lg navbarCustom navbar-light bg-light" style="z-index: 1111">
        <div class="container-fluid containerNavbar">
            <a class="navbar-brand navbar-brand-custom" href="saveOpportunity.php"><button class="btn btn-secondary"><span class="badge badge-secondary NumberSavedJob"></span>فرصت های ذخیره شده</button></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-3 mb-lg-0 flex-lg-row-reverse">
                    <li class="nav-item navbarItemCustom">
                        <div class="navbarItemGroup">
                            <div class="d-flex">
                                <a class="nav-link active" aria-current="page" href="index.php">خانه</a>
                                <span class="mt-2">🏠</span>
                            </div>
                        </div>

                    </li>
                    <li class="nav-item navbarItemCustom">
                        <div class="navbarItemGroup">
                            <div class="d-flex">
                                <a class="nav-link" aria-current="page" href="opportunityPage.php">جستجوی مشاغل</a>
                                <span class="mt-2">🔎</span>
                            </div>
                        </div>

                    </li>
                    <li class="nav-item navbarItemCustom">
                        <div class="navbarItemGroup">
                            <div class="d-flex">
                                <a class="nav-link" aria-current="page" href="about-us.php">درباره ما</a>
                                <span class="mt-2">🌍</span>
                            </div>
                        </div>

                    </li>
                    <li class="nav-item navbarItemCustom">
                        <div class="navbarItemGroup">
                            <div class="d-flex">
                                <a class="nav-link" aria-current="page" href="contact-us.php">تماس با ما</a>
                                <span class="mt-2">☎️</span>
                            </div>
                        </div>

                    </li>




                </ul>
            </div>
        </div>
    </nav>
</div>
<div class="col-10 bg-white boxOpportunity directionRtl mx-auto">
    <div class="col-12 titleBar">
<!--        <button class="btn btn-outline-secondary floatLeft">نشان شده</button>-->
        <h1 data-name="title"></h1>

<!--        <h2 class="NumberTest">Number</h2>-->

        <div class="col-12 underlineTitle"></div>
    </div>
    <div class="col-12 py-4 ">
        <div class="row d-flex justify-content-center flex-column">
            <div class="col-6 d-flex flex-column flex-md-row">
                <div class="titleInfoContainer mt-2 rightSpacer col-6">
                    
                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">فرصت های شغلی</span>
                    </div>
                    <div class="d-block">
                        <span class="variableInfo jobClassifictionOpportunity d-md-inline d-block p-2 text-white"></span>
                    </div>
                </div>
                <div class="titleInfoContainer mt-2 rightSpacer col-6">
                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">موقعیت شغلی</span>
                    </div>
                    <div class="d-block">
                        <span class="variableInfo p-2 text-white locationOpportunity" data-name="city"></span>
                    </div>
                </div>
            </div>
            <div class=" mt-4 col-6 d-flex flex-column flex-md-row">
                <div class="titleInfoContainer mt-2 rightSpacer col-6">

                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">نوع همکاری</span>
                    </div>
                    <div class="d-block">
                        <span class="variableInfo p-2 text-white contracttype" data-name="contract">تمام وقت</span>
                    </div>
                </div>
                <div class="titleInfoContainer mt-2 rightSpacer col-6">
                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">سابقه کار</span>
                    </div>
                    <div class="d-block">
                        <span class="variableInfo d-md-inline d-block p-2 text-white workexperience"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoOpportunityPart">
            <div class="col-12 titleDetailOpportunity">
                <h5 class="">شرح موقعیت شغلی</h5>
            </div>
            <div class="informationPart discribtion col-8">
<!--                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.-->
<!---->
<!--                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>-->
            </div>
        </div>
        <div class="row aboutOpportunityPart">
            <div class="col-12 titleDetailOpportunity customPart">
                <h5 class="">درباره شرکت</h5>
            </div>
            <div class="informationPart col-8 aboutcompany">

            </div>
        </div>
        <div class="row d-flex mt-4 justify-content-center flex-column">
            <div class="col-6 d-flex flex-md-row flex-column">
                <div class="titleInfoContainer mt-4 rightSpacer col-6">

                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">جنیست</span>
                    </div>
                    <div class="d-block mb-3">
                        <span class="variableInfo p-2 text-white gender">زن</span>
                    </div>
                </div>
                <div class="titleInfoContainer mt-4 rightSpacer col-6">
                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">مدرک</span>
                    </div>
                    <div class="d-block mb-3">
                        <span class="variableInfo p-2 text-white certificate" data-name="certificate"></span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-9 mt-4 d-flex flex-md-row flex-column">
                <div class="titleInfoContainer mt-4 rightSpacer col-6">

                    <div class="d-block mb-3">
                        <span class="titleInfo fw-bold">مهارت های مورد نیاز</span>
                    </div>
                    <div class="d-flex flex-wrap skills">


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<button class="btn btn-outline-secondary btnSave">نشان کردن</button>



<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
<script src="node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<script src="jquery-cookie/src/jquery.cookie.js"></script>
<script src="js/common.js"></script>
<script src="js/script.js"></script>
</body>
</html>