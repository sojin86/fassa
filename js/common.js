$(document).ready(function(){
    // nav 열고 닫기
    var nav =  $("nav");
    var header = $("header");
    var section = $("section");
    var toggleBtn = $("nav > ul > li > a");
    var menuToggleBtn = header.find('.menu_wrap > button');

    // nav 클릭시 숨겨진 ul 나옴
    toggleBtn.on('click', function(){
        var parentLi = $(this).parent('li');

        if(parentLi.hasClass('open')){
            parentLi.removeClass('open');
        }else{
            parentLi.addClass('open');
            nav.removeClass('close');
            parentLi.siblings('li').removeClass('open');
        }

        if (nav.hasClass('hover')){
            nav.removeClass('hover')
            nav.addClass('open')
        }
    });

    // 헤더 버튼 클릭시 nav 사라짐
    menuToggleBtn.on('click', function(){
        if(nav.hasClass('close')){
           nav.removeClass('close');
           section.removeClass('active')
        } else {
            nav.addClass('close');
            nav.find('ul li').removeClass('open');
            nav.removeClass('open');
            section.addClass('active')
        }
    });

    // 마우스 올렸다가 내렸다가
    toggleBtn.parents('ul').on('mouseenter', function(){
        if (nav.hasClass('close')){
            nav.addClass('hover');
            nav.removeClass('close');
        }
    });
    toggleBtn.parents('ul').on('mouseleave', function(){
        if(nav.hasClass('hover')){
            nav.removeClass('hover');
            nav.addClass('close');
            nav.find('ul li').removeClass('open');
        }
    });
    // window 가로 1400 일때 nav 가로 길이 변경
    $(window).on('resize', function(){
        if (window.innerWidth <= 1400) {
          nav.addClass('close');
          section.addClass('active');
          $("nav > ul > li").removeClass("open");
        } 
    });

    // nav 이벤트 버튼 클릭시 active되기 ↓ url 로 하는 방법
    // var url = window.location.pathname;
    // urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");

    // $('.navClick a').each(function(){
    //     var li = $(this).parents("li").parents("ul").closest("li");
        
    //     if(urlRegExp.test(this.href.replace(/\/$/,''))){
    //         $(this).addClass('active');
    //         li.addClass('open');
    //         li.addClass('active');
    //     }
    // });

    // nav 이벤트 버튼 클릭시 active되기 text로 하는 방법
    var curLocation_1 = $(".section_hd").find("a").eq(1).text().replace(/\s/g, "");
    var curLocation_2 = $(".section_hd").find("a").eq(2).text().replace(/\s/g, "");
		
	$("nav > ul > li").each(function(){
		var _this = $(this);
			menuStr = _this.find(" > a > span").text().replace(/\s/g, "");
		if(menuStr == curLocation_1){
			_this.addClass("active");
            _this.addClass("open");
		}
	});
	$(".navClick > li").each(function(){
		var _this = $(this);
        menuStr = _this.find(" > a > span").text().replace(/\s/g, "");
		if(menuStr == curLocation_2){
			_this.addClass("active");
		} 
	});


    // // 숫자 클릭시 색 변경
    $(document).on("click", ".pg_number > ul > li > button", function(){
        var numberLi = $(this).parent("li");
        numberLi.siblings().removeClass("active");
        numberLi.addClass("active");
    });

    // 서치 버튼 클릭하면 밑에 옵션 나옴
    var fitterSub = $(".dropDown_wrap");
    $(document).on('click', '.fitterBtn > button', function(){
        fitterSub.show();
        fitterSub.addClass('open');
    });

    $('.wrap').click(function(e) {   
	    if($(".dropDown_wrap").hasClass('open')){   
		    if(!$(".dropDown_wrap").has(e.target).length){
                $('.dropDown_wrap').hide();
                $('.dropDown_wrap').removeClass('open');
            }        
	    } 
    });

    // pen 아이콘 클릭시 div 변경
    $(".icon_pen").click(function(){
        tableBox = $(this).parents("button").parents(".table_box_01_hd").parents(".table_box_01");
        tableBoxSiblings = tableBox.siblings('.table_box_01');

        if(tableBox.hasClass("notTxt")){
            tableBox.removeClass("notTxt");
            tableBox.addClass("haveTxt");
        } 
        
        if (tableBoxSiblings.hasClass("haveTxt")) {
            alert("수정을 완료해주세요.");
            tableBox.removeClass("haveTxt");
            tableBox.addClass("notTxt");
        }
    });
    
    // 취소 버튼 클릭시 원래 input 없는거로 돌아감
    $(".table_box_01_ft > .cancel_btn").click(function(){
        tableBox = $(this).parents(".table_box_01_ft").parents(".table_box_01");

        tableBox.removeClass("haveTxt");
        tableBox.addClass("notTxt");
    }); 
    $(".table_box_01_ft02 > .cancel_btn").click(function(){
        tableBox = $(this).parents(".table_box_01_ft02").parents(".table_box_01");

        tableBox.removeClass("haveTxt");
        tableBox.addClass("notTxt");
    });



    // + 버튼 클릭시 오픈 됨
    $(".plusBtn").click(function(){
        tableIcon = $(this).children("i");
        
        tableTd = $(this).parents("td");
        tableTRactive = tableTd.parent(".trMain").next(".trSub");
        tableTr = tableTd.parent(".trMain");
        table = $(this).parents(".table_type_02")

        table.find("tr.trSub").not(tableTRactive).removeClass("open");
        tableTRactive.toggleClass("open");
        
        if(tableTRactive.hasClass('open')){
            table.find(".trMain").removeClass("active");
            tableTr.addClass("active");

            table.find(".plusBtn .icon_plus").text('+');
            tableIcon.text('-');
        } else {
            table.find(".trMain").removeClass("active");
            table.find(".plusBtn .icon_plus").text('+');
        }
    });

    //▽ 버튼 클릭시 오픈됨
    $(".underBtn").click(function(){
        dropDown = $(this).parents("li").siblings(".dropdown");
        icon = $(this).children("i")

        dropDown.toggleClass("open");
        icon.toggleClass("active");
    });

    // (PD_vw_00.htm) 함수들
    $(".pen").click(function(){
        btn = $(this);
        subTit2 = btn.parents('.subTit');
        subTxt2 = subTit2.siblings('.subTxt');
        subInp2 = subTit2.siblings('.subInp');

        if(subTxt2.hasClass("open")){
            subTxt2.removeClass("open");
        }
        subInp2.addClass("open");
    });
    $(".underArrow").click(function(){
        btn = $(this);
        subTit = btn.parents('.subTit');
        subTxt = subTit.siblings('.subTxt');
        subInp = subTit.siblings('.subInp');
        
        subTxt.toggleClass("open");
        if(subInp.hasClass("open")){
            subInp.removeClass("open");
            subTxt.removeClass("open");
        }
    });
    $(".cancelBtn").click(function(){
        btn = $(this);
        subInp3 = btn.parents(".subInp");
        subTxt3 = subInp3.siblings(".subTxt");

        subInp3.removeClass("open");
        subTxt3.addClass("open");
    });
    $(".saveBtn").click(function(){
        btn = $(this);
        subInp4 = btn.parents(".subInp");
        subTxt4 = subInp4.siblings(".subTxt");

        subInp4.removeClass("open");
        subTxt4.addClass("open");
    });
    $(".cancelBtn02").click(function(){
        btn = $(this);
        dropDown = btn.parents(".subTable_dropdown");

        dropDown.removeClass("open");
    });
    $(".saveBtn02").click(function(){
        btn = $(this);
        dropDown = btn.parents(".subTable_dropdown");

        dropDown.removeClass("open");
    });
    $(".btnPen").click(function(){
        btn = $(this);
        line = btn.parents(".subTable_line02");
        dropDown = line.next(".subTable_dropdown");

        dropDown.toggleClass("open");
    });
    $(".addBtn").click(function(){
        btn = $(this);
        line = btn.parents(".subTable_line");
        dropDown = line.next(".subTable_dropdown");

        dropDown.toggleClass("open");
    });

    // switchBtn 클릭시 색 변경
    $(".switchBtn").click(function(){
        $(this).toggleClass("click");
    });

    // input file 업로드 
    $('.file_upload').change(function(){
        var file = $(this).val();

        $(this).siblings('label').children('.file_type_01').children('span').text(file);
    });
    
    // + 버튼 클릭시 위 요소 복제
    $(document).on("click",".clone_01",function(){
        additionBtn = $(this);
        parent = additionBtn.parent('li');
        prev = parent.prev("li");

        $(".table_box_03 ul li.copy").before(prev.clone());
    });
    // - 버튼 클릭시 삭제
    $(document).on("click",".delBtn",function(){
        delBtn = $(this);
        parent = delBtn.parent('li');

        parent.remove();
        console.log(222);
    });

    // file 클릭 jq
    $(".menu_list").click(function(){
        ul = $(this).siblings(".file_dropDown_01");
        li = ul.children("li");

        ul.toggleClass("open");
        li.addClass("ani_fadein");


        // 해제시 클릭 메뉴 저장되어있지 않음
        // if($(".file_dropDown_01").hasClass("open")){
        //     $(".file_dropDown_02").removeClass("open");
        //     $(".folder.plus").removeClass("minus");
        //     $(".folderBtn .folder").removeClass("open");
        // }
    });

    $(".list").click(function(){
        var plusBtn = $(this).children(".plusBtn").children(".folder.plus");
        var folderBtn = $(this).children(".folderBtn").children(".folder");
        var dropDown = $(this).siblings(".file_dropDown_02");
        var span = $(this).children("span");
        var spanSiblings = span.parent(".list").parent("li").siblings("li").find("span");
        var spanMenu = span.parents(".file_dropDown_01").siblings(".menu_list").children("span")
        var spanClidren = span.parents(".file_dropDown_02").siblings(".list").children("span");
        var spanParents = span.parents(".file_dropDown_02 ").parent("li").siblings("li").children("span");

       plusBtn.toggleClass("minus");
       folderBtn.toggleClass("open");
       dropDown.toggleClass("open");

       spanMenu.removeClass("click");
       spanSiblings.removeClass("click");
       span.addClass("click");
       spanClidren.removeClass("click");
       spanParents.removeClass("click");
    });
 
    // 전체 동의 checked => click no change로 변경
    $(".check_all").on("change", function(){
        $(this).parents('.cb_1').siblings(".cb_1").children("input").prop("checked", $(this).is(":checked"))
    });
    $(".normalCheck").on("change", function(){
        $('.check_all').prop('checked', false);
    });


    // 그룹별 권환 관리 val 넣기 [GR_vw_00]
    $(".data_click").click(function(){
        var txt01 = $(this).children(".txt_01").text();
        var txt02 = $(this).children(".txt_02").text();

        $("#GR_inp01").val(txt02 + '그룹');
        $("#GR_inp02").val(txt01);
    });

    $(".list").click(function(){
        var txt_03 = $(this).index(this);
        var txt_04 = $(this).children("span").text();

        $("#GR_inp03").val(txt_03 + 1);
        $("#GR_inp04").val(txt_04);
        $(".cb_1 input").prop('checked', true);
    });

 
  








});
























// -----------------------------팝업 js ----------------------------------------//
// modal의 width가 window의 width보다 클때 모달에 강제로 추가한 width를 auto로 변경하는 스크립트
$(window).resize(function () {
    //popupScroll();//레이어팝업 스크롤 생기게 하는 스크립트

    if ($('.modal.show').length != 0) {
        if ($('.modal.show').length > 1) {
            $('.modal.show').each(function () {
                setModalMaxHeight(this);
                setModalMarginTop(this);
            });
        } else {
            setModalMaxHeight($('.modal.show'));
            setModalMarginTop($('.modal.show'));
        }

    }
});

// modal layerpopup window기준 max-height 재설정 // modal-body에 스크롤 생성
// var setModalMaxHeight = function (element) {
//     this.$element = $(element);
//     this.$content = this.$element.find('.modal-content');
//     this.$dialog = this.$element.find('.modal-dialog');

//     var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
//     var dialogMargin = $(window).width() < 768 ? 20 : 60;
//     var contentHeight = $(window).height() - (dialogMargin + borderWidth);
//     var headerHeight = this.$element.find('.modal_header').outerHeight() || 0;
//     var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
//     var maxHeight = contentHeight - (headerHeight + footerHeight);

//     this.$content.css({
//         'overflow': 'hidden'
//     });

//     if (this.$dialog.hasClass('fullWidth')) {
//         this.$element
//             .find('.modal_body').css({
//                 'max-height': maxHeight,
//                 'min-height': maxHeight,
//                 'overflow-y': 'auto'
//             });
//     } else {
//         this.$element
//             .find('.modal_body').css({
//                 'max-height': maxHeight,
//                 'overflow-y': 'auto'
//             });
//     }

// }

var setModalMaxHeight = function (element) {	
    this.$element = $(element);	
    this.$content = this.$element.find('.modal-content');	
    this.$dialog = this.$element.find('.modal-dialog');	
    var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();	
    var dialogMargin = $(window).width() < 768 ? 20 : 60;	
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);	
    var headerHeight = this.$element.find('.modal_header').outerHeight() || 0;	
    var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;	
    var maxHeight = contentHeight - (headerHeight + footerHeight);	
    this.$content.css({	
        'overflow': 'hidden'	
    });	
    if (this.$dialog.hasClass('fullWidth')) {	
        this.$element	
            .find('.modal_body').css({	
                'max-height': maxHeight,	
                'min-height': maxHeight,	
                'overflow-y': 'auto'	
            });	
    } else {	
        this.$element	
            .find('.modal_body').css({	
                'max-height': maxHeight,	
                'overflow-y': 'auto'	
            });	
    }	
}




var setModalMarginTop = function (element) {
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    var dialogHeight = this.$dialog.height();

    //alert(dialogHeight);

    // this.$dialog.css({
    //     'margin-top': -dialogHeight / 2
    // });
}


var setModalPosition = function () {
    setModalMaxHeight($('.modalPopup'));
    setModalMarginTop($('.modalPopup'));

    setModalMaxHeight($('.modalPopup2'));
    setModalMarginTop($('.modalPopup2'));

}

//모달 레이어 팝업 띄우기// ajax방식으로 띄울 레이버 팝업 페이지(url방식 호출)다 불러옵니다
function openModal(url, popupId, param, width) {

    var pDivId = popupId; //띄울 팝업 아이디 생성
    if ($('.modalPopup').length != 0) {
        var pDiv = '<div id="' + pDivId + '" class="modalPopup2 modal"></div>'; // ajax로 html을 넣을 div 생성
    } else {
        var pDiv = '<div id="' + pDivId + '" class="modalPopup modal"></div>'; // ajax로 html을 넣을 div 생성
    }
    var paramData = '';

    var tWidth = width; //레이어 팝업의  width 강제설정

    if (width == '') {
        tWidth = '500'; //기본넓이
    } else if (width == 'full') {
        tWidth = '96%';
    } else {
        tWidth = width;
    }


    if (param == null) {
        paramData = popupId;
    } else {
        paramData = param;
    }

    $.ajax({
        type: "get",
        //type : "post",
        url: url,
        data: paramData,
        async: true,
        success: function (html) {
            var page = html;
            $('body').append(pDiv);
            $('#' + pDivId).html(page);
        },
        complete: function () { //ajax로 html을 넣기가 완료되면			
            $('#' + pDivId).removeClass('show').data('bs.modal', null);
            $('#' + pDivId)
                .modal({
                    backdrop: 'static',
                    keyboard: false
                })
                .find('.modal-dialog')
                .css({
                    'width': tWidth
                });
            $('#' + pDivId).next('.modal-backdrop').appendTo($('#' + pDivId));
            $('#' + pDivId).find('.modal-backdrop').css('opacity', '0');
            $('#' + pDivId).find('.modal-backdrop').click(function () {
                $('#' + pDivId).modal('toggle').remove();
            });
        }
    });
}

// 모달 레이어 팝업 삭제 닫기
function closeModal(obj) {
    var divObj = null;
    var parents = $(obj).parents();

    for (var i = 0; i < parents.length; i++) {
        var parent = parents[i];
        if ($(parent).hasClass("modal")) {
            divObj = parent;
            break;
        }
    }

    var thisPopId = divObj.id;
    if ($('#' + thisPopId).hasClass('modalPopup2')) {
        if ($('.modalPopup').length > 0) {
            $('#' + thisPopId).modal('toggle').remove();
        } else {
            $('#' + thisPopId).modal('toggle').remove();
        }
    } else {
        $('#' + thisPopId).modal('toggle').remove();
        $("body").removeClass("modal-open");
    }
}

//모달 레이어 포커스 이동
function popupFoucsAction(id) {
    var newId = id;
    var btnCloseElement = $('#' + newId + ' .modal-dialog .modal_header > .close');
    var inputElement = $('#' + newId + ' .modal-dialog .modal_body :input:visible:not(:disabled):not(button)');
    var buttonElement = $('#' + newId + ' .modal-dialog .modal_body button:visible:not(:disabled)');
    var footElement = $('#' + newId + ' .modal-dialog .modal_footer :input:visible:not(:disabled)');

    if (inputElement.length > '0') {
        inputElement.first().focus();
    } else {
        if (buttonElement.length != 0) {
            buttonElement.first().focus();
        } else {
            if (footElement.length != '0') {
                footElement.last().focus();
            } else {
                btnCloseElement.focus();
            }
        }
    }
}




