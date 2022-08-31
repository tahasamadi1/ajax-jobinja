$(document).ready(function () {
    var jobs;
    var jobId=null;
    var pageNo=1;
    var filterTypes=["jobclassification","city","contracttype","workexperience"];
    var filterTypesName=["دسته‌بندی شغلی","استان","نوع قرارداد","سابقه کار"];
    var logofilterType=["fas fa-bars","fas fa-map-marker","far fa-file-alt","fas fa-praying-hands"];
    var clfList=[];
    var provinceList=[];
    var contractList=[]
    var experienceList=[]
    var filter_lists=[clfList,provinceList,contractList,experienceList]
    var jobList=[];
    var jobListAndCompany=null;
    var jobListFav=[];
    if (typeof ($.cookie('jobItems'))=='undefined'){
        jobListFav=[];
      console.log(jobListFav);
    }
    else {
        jobListFav=JSON.parse($.cookie('jobItems'));
       console.log(jobListFav);
    }
    $.ajax({
        url:"XmL/jabCompany.xml",
        success:function (response) {
            jobListAndCompany=response
            jobs=$(response).find("job")
            if (window.location.href.indexOf("?id=")!==-1){
                id=window.location.href.split("?id=")[1];
                jobId=$(jobListAndCompany).find("job[id="+id+"]")
                insetOpportunityJobs()
                clickToFav('.btnSave')
                insertClassAndNumber()
            }
            if(window.location.href.indexOf("opportunityPage")!==-1){
                createField(".Responsive")
                createField(".notResponsive")
                insertInformation(jobs)
                updateJobList()
                makeCheckBox()
                createCards(pageNo)
                filterLists()
                makePagination()
                clickToFav(".btnSaveMain")
                insertClassAndNumber()
            }
            if (window.location.href.indexOf("index")!==-1){
                insertInformation(jobs)
                companyInsertCards()
            }
            if (window.location.href.indexOf('saveOpportunity')!==-1){
                savedJobsInsert()
            }
        },
        error:function () {
            alert("error to sending ajax data")
        }
    })
    function updateJobList() {
        jobList=[]
        for (let jobI=0;jobI<$(jobs).length;jobI++){
            jobList.push($(jobs).eq(jobI))
        }
    }
    function insertInformation(jobs){
        $(".numberJobLength").text(toFarsiNumber($(jobs).length))
        $(".NumberCard").text(toFarsiNumber($(jobs).length))
    }
    function companyInsertCards() {
        var companyInfo=$(jobListAndCompany).find("companies");
        var cardJobInfo=$(jobListAndCompany).find("job");
        for (var i = 0; i <6 ; i++) {
            $(".cardCompany").append(`<div class="col-lg-2 ms-1 col-4 companyCard">
            <div class="imgContainer mx-auto">
                <img src="#" alt="">

            </div>
            <small class="CompanyName d-block text-center"><a href="">طراحی سایت دارکوب</a></small>
        </div>`)
            $(".companyCard .imgContainer img").last().attr("src","images/companyImage/"+$(companyInfo).find("company").eq(i).attr("id")+".jpg")
            $(".companyCard .CompanyName a").last().text($(companyInfo).find("name").eq(i).text())
        }
        for (var cardi = 1; cardi <30 ;cardi++){
            $(".oportunityFirstSection").append(`<div class="col-12 overflow-hidden cardFirstSectionPage">
               <a href="#"> <h6>استخدام کارشناس پشتیبانی و امورمشتریان (خانم-شیفت روز)</h6>
                <div class="col-12 d-flex justify-content-center">
                    <div class="col-10 d-flex justify-content-center flex-nowrap">
                        <div class="iconGroupFirstPageCard">
                            <span class="nameCompany">ارزافی ها</span>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div class="iconGroupFirstPageCard">
                            <span class="cityCompany">تهران</span>
                            <i class="fas fa-home"></i>
                        </div>
                    </div>
                    <div class="col-4 justify-content-center flex-nowrap iconGroupFirstPageCard">
                        <span class="typeJob">امروز</span>
                    </div>
                </div>
            </a></div>
`)
            $(".cardFirstSectionPage .cityCompany").last().text($(cardJobInfo).eq(cardi).find("city").text());
            $(".cardFirstSectionPage .nameCompany").last().text($(cardJobInfo).eq(cardi).find("companyname").text());
            $(".cardFirstSectionPage .typeJob").last().text($(cardJobInfo).eq(cardi).find("jobclassification").text());
            $(".cardFirstSectionPage h6").last().text($(cardJobInfo).eq(cardi).find("title").text());
            $(".cardFirstSectionPage a").last().attr("href","opportunity.php?id="+$(cardJobInfo).eq(cardi).attr("id")+" ")
        }
        for (var i = 1; i <=35 ; i++) {
            if (i%2 == 0){
                $(".cardBodyCustomTag").append("<div class='col-12 childrenCarBody d-flex justify-content-center'></div>")
            }
            $(".cardBodyCustomTag .childrenCarBody").last().append(`                        <div class="col-6 mt-2 cardCustomEmergency d-flex justify-content-end">
                            <div class="col-9 informationInCard">
                                <h4>استخدام برنامه نویس ETL</h4>
                                <div class="iconGroupSection">
                                    <div class="iconGroupFirstPageCard col-12 d-inline">
                                        <span class="typeJob d-inline col-6">ارزافی ها</span>
                                        <i class="fa fa-map-marker d-inline col-6" aria-hidden="true"></i>
                                    </div>
                                    <div class="iconGroupFirstPageCard col-12 d-inline">
                                        <span class="cityCompany d-inline col-6">تهران</span>
                                        <i class="fas fa-home d-inline col-6"></i>
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-danger btn-sm bannerFirst">
                                <a href="#" class="text-white">فوری</a>
                            </button>
                        </div>
                        
`)
            $(".informationInCard h4").last().text($(cardJobInfo).eq(i).find("title").text())
            $(".informationInCard .cityCompany").last().text($(cardJobInfo).eq(i).find("city").text())
            $(".informationInCard .typeJob").last().text($(cardJobInfo).eq(i).find("jobclassification").text())
            $(".bannerFirst a").last().attr("href","opportunity.php?id="+$(cardJobInfo).eq(i).attr("id")+" ")
        }
    }
    function createField(className){
        for (i=0;i<filterTypes.length;i++){
            $(className).append(`<div class="col-12 userFilterBox bg-white">
            <div class="titleBox py-0 py-lg-2 px-lg-2 px-1 coursorPointer">

                <i class="iconFilter ms-1"></i>
                <span class="titleFilter">فرصت های شغلی</span>
                <i class="fas fa-angle-up floatLeft mt-lg-0 ms-lg-0 mt-4 ms-2"></i>
            </div>
            <div class="parentCheckBoxGroup">

            </div>
        </div>`)

            $(".titleFilter").last().text(filterTypesName[i])
            $(".iconFilter").last().addClass(logofilterType[i])
            $(".parentCheckBoxGroup").last().addClass(filterTypes[i])
            $(".titleBox").last().attr("data-type",filterTypes[i])
        }
    }
    function makeCheckBox(){
        for (i=0;i<filterTypes.length;i++){
            $(jobs).find(filterTypes[i]).each(function (key,element) {
                classification="."+filterTypes[i]
                let checkBox='<div class="checkboxGroup"><input type="checkbox"><span>'+$(element).text()+'</span></div>';
                if($(classification).html().indexOf(checkBox)===-1){
                    $(classification).append(checkBox)
                }
            })
            $("."+filterTypes[i]+" input").attr("data-filter-type",filterTypes[i])
        }
        $(".titleBox").click(function () {
            chechBoxPrentClass=$(this).attr("data-type")
            $("."+chechBoxPrentClass).slideToggle()
            $("[data-type='"+chechBoxPrentClass+"'] .fa-angle-up").toggleClass("fontClickRotate")
        })
    }
    function createCards(No){
        $(".cardParent").html("")
        var maxLengthWidth=$(jobList).length<No*9?$(jobList).length:No*9;
        for (createJob=(No-1)*9;createJob<maxLengthWidth;createJob++){
            $(".cardParent").append(`<div class="col-12 flex-column flex-md-row boxCard boxCardOpportunity position-relative directionRtl d-flex flex-wrap justify-content-center">
            <div class="col-2">
                <div class="parentImage">
                    <img src="images/companyImage/1.jpg" alt="" class="imageLoc">
                </div>
            </div>
            <div class="col-7 textMixin">
                <span class="titleJobOpportunity">توسعه دهنده نرم افزار نهاده (Embedded System) </span>
                <div>
                    <i class="fas fa-hotel"></i>
                    <span class="nameInfoOpportunity CompanyNameCards">گیکس | Geeks Ltd</span>
                </div>
                <div>
                    <i class="fas fa-search-location"></i>
                    <span class="nameInfoOpportunity cityCompany">تهران، تهران</span>
                </div>
                <div>
                    <i class="fas fa-file-word"></i>
                    <span class="nameInfoOpportunity salaryAndContractType">قرارداد دورکاری (حقوق از ۱۸,۰۰۰,۰۰۰ تومان)</span>
                </div>
            </div>

            <div class="col-lg-2 col-4">
                <div class="buttonGroup">
                    <a href="#" class="text-white"><button class="btn btn-primary btnInfo d-block btn-md col-lg-12 col-md-12 col-12 col-12">مشاهده اطلاعات</button></a>
                    <button class="btn btn-outline-secondary btn-md d-block btnCustom col-lg-12 col-md-12 col-12 col-12 mt-2 btnSaveMain">نشان کردن</button>
                </div>
            </div>
        </div>`)
            $(".titleJobOpportunity").last().text($(jobList[createJob]).find("title").text())
            $(".CompanyNameCards").last().text($(jobList[createJob]).find("companyname").text())
            $(".cityCompany").last().text($(jobList[createJob]).find("city").text())
            $(".salaryAndContractType").last().text($(jobList[createJob]).find("contracttype").text())
            $(".parentImage .imageLoc").last().attr("src","images/opportunityImage/"+$(jobList[createJob]).attr("id")+".png")
            $(".buttonGroup a").last().attr("href","opportunity.php?id="+$(jobList[createJob]).attr("id")+"")
            $(".btnSaveMain").last().attr("data-id",$(jobList[createJob]).attr("id"))
        }
        insertInformation(jobList)


    }
    function removeIllegal(ftI,jobI) {
        if (filter_lists[ftI].indexOf($(jobList[jobI]).find(filterTypes[ftI]).text())===-1){
            jobList.splice(jobI,1)
        }
    }
    function filterItems(ftIndex=-1){
        for (jobI=jobList.length-1;jobI>=0;jobI--){
            if (ftIndex > -1){
                removeIllegal(ftIndex,jobI)
                continue
            }
            for (fti=0;fti<filterTypes.length;fti++){
                if (filter_lists[fti].length===0){
                    continue
                }
                removeIllegal(fti,jobI)
            }
        }
        createCards(pageNo)
        clickToFav('.btnSaveMain')
        insertClassAndNumber()
    }
    function filterLists() {
        for (let i in filterTypes){
            $('input[data-filter-type='+filterTypes[i]+']').on('change',function () {
                var label=$(this).parent().children("span").text()
                if (this.checked){
                    var LenJobList=filter_lists[i].length
                    filter_lists[i].push(label)
                    if (LenJobList!==0){
                        updateJobList()
                        filterItems()
                    }
                    else {
                        filterItems(i)
                    }
                }
                else {
                    updateJobList()
                    var index=filter_lists[i].indexOf(label)
                    if (index!==-1){
                        filter_lists[i].splice(index,1)
                    }
                    filterItems()

                }

                makePagination(1)
            })
        }

    }
    function setButton(nameBt) {
        if (nameBt==1){
            $(".page-item a[aria-label='Previous']").parent().addClass("disabled")
        }
        else {
            $(".page-item a[aria-label='Previous']").parent().removeClass("disabled")
        }
        if (nameBt==Number(Math.ceil($(jobList).length/9))){
            $(".page-item a[aria-label='Next']").parent().addClass("disabled")
        }
        else {
            $(".page-item a[aria-label='Next']").parent().removeClass("disabled")
        }
        $(".page-item.active").removeClass("active")
        $(".page-item .page-link").eq(nameBt).parent().addClass("active")
        createCards(nameBt)
        clickToFav('.btnSaveMain')
        insertClassAndNumber()
    }
    function makePagination(RectifierPaginationPagination=0){
        $(" .pagination .page-item a.page-link").not("[aria-label]").parent().remove()
        var jobListLength=$(jobList).length

        $(".page-item a[aria-label='Previous']").parent().addClass("disabled")
        for(i=1;i<=Math.ceil(jobListLength/9);i++){
            $(".page-item").last().before('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
        }

        $(".page-link").not('[aria-label]').parent().first().addClass("active")

        $("a[aria-label='Next']").click(function () {
            var pageActive=Number($(".page-item.active .page-link").text())-RectifierPaginationPagination
            setButton(pageActive+1)
        })
        $("a[aria-label='Previous']").click(function () {
            var pageActive=Number($(".page-item.active .page-link").text())+RectifierPaginationPagination
            setButton(pageActive-1)
        })

        $(".page-link").not('[aria-label]').click(function () {
            setButton($(this).text())
        })
        if ($(".page-item .page-link").not('[aria-label]').parent().length==1){
            $("a[aria-label='Next']").parent().addClass("disabled")
        }
        else {
            $("a[aria-label='Next']").parent().removeClass("disabled")
        }
    }
    function insetOpportunityJobs(){
        var job=jobId;

        $(".titleBar h1").text($(job).find("title").text())
        $(".jobClassifictionOpportunity").text($(job).find("jobclassification").text())
        $(".locationOpportunity").text($(job).find("city").text())
        $(".contracttype").text($(job).find("contracttype").text())
        $(".workexperience").text($(job).find("workexperience").text())
        $(".discribtion").text($(job).find("discribtion").text())
        $(".aboutcompany").text($(job).find("aboutcompany").text())
        $(".gender").text($(job).find("gender").text())
        $(".certificate").text($(job).find("certificate").text())
        $(job).find("skills").find("skill").each(function (key,ellement) {
            $(".skills").append("<div class='mt-3 ms-2'><span class=\"variableInfo p-2 text-white\">"+$(ellement).text()+"</span></div>");
            $(".btnSave").attr("data-id",id)
        })
    }
    function addToFaveJob(id){
            if (jobListFav.length!==0){
                jobId=[];
                $(jobListFav).each(function (index,element) {
                    jobId.push(element.Id)
                })
                if (jobId.includes(id)){
                    var indexJobDelete=jobId.indexOf(id);
                    jobListFav.splice(indexJobDelete,1)
                    return  $.cookie('jobItems', JSON.stringify(jobListFav), {expires: 8})
                }
            }
            var jobIdChoose = $(jobListAndCompany).find("job[id=" + id + "]");
            var titleFav = $(jobIdChoose).find("title").text();
            var cityFav = $(jobIdChoose).find("city").text();
            var contractedFav = $(jobIdChoose).find("contracttype").text();
            var Obj = new Object();
            Obj.Id = id;
            Obj.Title = titleFav;
            Obj.City = cityFav;
            Obj.Constructor = contractedFav;
            jobListFav.push(Obj);
            $.cookie('jobItems', JSON.stringify(jobListFav), {expires: 8})
    }
    function insertClassAndNumber(){
        var savedJob=JSON.parse($.cookie('jobItems'))
        $(".saveClass").removeClass('saveClass')
        $(savedJob).each(function (index,element) {
            $("[data-id="+element.Id+"]").addClass('saveClass')
        })
        $(".NumberSavedJob").text(toFarsiNumber($(savedJob).length))
    }
    function clickToFav(className) {
        $(className).click(function () {
            addToFaveJob($(this).attr("data-id"))
            insertClassAndNumber()
        })
    }

    function savedJobsInsert(){
        var savedJobs=$.cookie('jobItems');
        if((typeof savedJobs)!=='undefined'){
            if(JSON.parse(savedJobs).length>0){
                $(".cardSaveParent").append('<div class="col-12 parentSavedCard colorSavedCart"></div>')
                $.each(JSON.parse(savedJobs),function (key,element) {
                    $(".parentSavedCard").append(`<div class="col-9 d-flex">
            <div class="col-3">
                <div class="parentImageSaved p-2">
                    <img src="images/companyImage/1.jpg" alt="">
                </div>
            </div>
            <div class="col-6 writeSpaceSave mt-4">
                <h5 class="text-center">شرکت راهیان گستر ری</h5>
            </div>
            <div class="col-3 d-flex mt-4 writeSpaceSave">
                <a href="#" class="text-white"><button class="btn btn-primary btn-sm h-50">نمایش اطلاعات</button></a>
            </div>
        </div>`)
                    $(".parentImageSaved img").last().attr("src","images/opportunityImage/"+element.Id+".png")
                    $(".writeSpaceSave h5").last().text(element.Title)
                    $(".writeSpaceSave a").last().attr("href","opportunity.php?id="+element.Id+"")
                })
            }
            else {
                $('.cardSaveParent').append(`<div class="col-md-9 col-sm-12 mt-5 emptyMessage mx-auto cardSaveParent directionRtl">
    <div class="col-8 mx-auto text-center">
        <h3>شما هیچ شغلی را ذخیره نکردید</h3>
        <p class="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    </div>
</div>`)
            }
        }
        else{
            $('.cardSaveParent').append(`<div class="col-md-9 col-sm-12 mt-5 emptyMessage mx-auto cardSaveParent directionRtl">
    <div class="col-8 mx-auto text-center">
        <h3>شما هیچ شغلی را ذخیره نکردید</h3>
        <p class="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    </div>
</div>`)
        }
    }
})