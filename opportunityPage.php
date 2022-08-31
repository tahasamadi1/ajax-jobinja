<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>opportunity</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="fontawesome/css/all.css">
    <link rel="stylesheet" href="node_modules/normalize.css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="opportunity">

<div class="col-12 m-0 p-0 navbarContainer" style="z-index: 1111">
    <nav class="navbar navbar-expand-lg navbarCustom navbar-light bg-light" style="z-index: 1111">
        <div class="container-fluid containerNavbar">
            <a class="navbar-brand navbar-brand-custom" href="saveOpportunity.php"><button class="btn btn-secondary"><span class="badge badge-secondary NumberSavedJob"></span>فرصت های ذخیره شده</button></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 flex-lg-row-reverse">
                    <li class="nav-item navbarItemCustom">
                        <div class="navbarItemGroup">
                            <div class="d-flex">
                                <a class="nav-link" aria-current="page" href="index.php">خانه</a>
                                <span class="mt-2">🏠</span>
                            </div>
                        </div>

                    </li>
                    <li class="nav-item navbarItemCustom">
                        <div class="navbarItemGroup">
                            <div class="d-flex">
                                <a class="nav-link active" aria-current="page" href="opportunityPage.php">جستجوی مشاغل</a>
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
<div class="col-lg-10 col-12 d-flex mx-auto mt-5">
    <div class="col-lg-9 cardsParent col-12">
        <div class="col-12 boxCard NumberOfCard position-relative directionRtl">
            <span class="NumberCard"></span>
            <span class="textAboutNo">فرصت ‌شغلی فعال یافت شد:</span>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary btn-sm modalTitle d-block btnModal  d-lg-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                فیلتر
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 1111111 !important;">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-body">
                            <!-- Button trigger modal -->
                            <div class="col-3 ms-3 d-flex flex-column directionRtl sortColumn Responsive">

                            </div>


                        </div>
                        <div class="modal-footer d-flex mx-auto">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-12 cardParent"></div>
        <div class="col-12 d-flex justify-content-center my-4">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
<!--                    <li class="page-item"><a class="page-link" href="#">1</a></li>-->
<!--                    <li class="page-item"><a class="page-link" href="#">2</a></li>-->
<!--                    <li class="page-item"><a class="page-link" href="#">3</a></li>-->
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="col-3 ms-3 d-none d-lg-block d-flex flex-column directionRtl sortColumn notResponsive">

    </div>
</div>


<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
<script src="jquery-cookie/src/jquery.cookie.js"></script>
<script src="node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<script src="js/common.js"></script>
<script src="js/script.js"></script>
<script>
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'),true)
    $(window).on('resize',function () {
        if($(window).width()>991){
            myModal.hide()
        }
    })

</script>

</body>

</html>
