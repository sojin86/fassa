$(document).ready(function () {
    datepicker();  
});


 //////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////
 /******** html5의 input type date및 month 속성을 jq datepicker로 바꾸기 워한 type속성 변경 스크립트 *******/
 function html5DateMonthTypeChange() {
     $('input[type=date]').each(function () {
         $(this).attr('type', 'text').addClass('datepicker').attr("readonly", true);
     });
 }

 /******** dateMonthPicker 스크립트 *******/
 function datepicker() {
     $('.datepicker').each(function () {
         if ($(this).hasClass('months')) {
             $(this).datepicker({
                 language: "ko",
                 todayBtn: "linked",
                 keyboardNavigation: false,
                 calendarWeeks: false, //20170915 수정 
                 autoclose: true,
                 format: "yyyy-mm",
                 viewMode: "months",
                 minViewMode: "months",
                 orientation: "left"
             });
         } else if ($(this).hasClass('years')) {
             $(this).datepicker({
                 language: "ko",
                 todayBtn: "linked",
                 keyboardNavigation: false,
                 calendarWeeks: false, //20170915 수정 
                 autoclose: true,
                 format: "yyyy",
                 viewMode: "years",
                 minViewMode: "years",
                 orientation: "left"
             });
         } else if ($(this).hasClass('notTodayBtn')) {
             $(this).datepicker({
                 language: "ko",
                 todayBtn: false,
                 keyboardNavigation: false,
                 calendarWeeks: false, //20170915 수정 
                 autoclose: true,
                 format: "mm-dd-yyyy",
                 orientation: "left"
             });
         } else {
             $(this).datepicker({
                 language: "ko",
                 todayBtn: "linked",
                 keyboardNavigation: false,
                 calendarWeeks: false, //20170915 수정 
                 autoclose: true,
                 format: "mm-dd-yyyy",
                 orientation: "left"
             });
         }
     });

     $('.datepickerRange').each(function (index, element) {


         $(this).find('input.datepicker:eq(0)').addClass("from" + index);

         /* Find 'To' */
         $(this).find('input.datepicker:eq(1)').addClass("to" + index);

         var startDate = $(".from" + index).datepicker("getDate");
         var FromEndDate = $(".to" + index).datepicker("getDate");


         $(".from" + index).datepicker(
             'setEndDate', FromEndDate
         ).on('changeDate', function (selected) {
             var startDate = $(this).datepicker("getDate");
             $('.to' + index).datepicker("setStartDate", startDate);
         });

         $('.to' + index).datepicker(
             'setStartDate', startDate
         ).on('changeDate', function (selected) {
             var FromEndDate = $(this).datepicker("getDate");
             $('.from' + index).datepicker('setEndDate', FromEndDate);
         });
     });
 }


 //////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////



















 