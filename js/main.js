$(function () {
  if ($(".owl-2").length > 0) {
    $(".owl-2").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 2,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 3,
        },
      },
    });
  }

  $(".default").datetimepicker({
    rtl: false,
    minuteStep: 5,
    pickerPosition: "top-right",
    showMeridian: true,
    initialDate: new Date(),
    zIndex: undefined,
    format: "dd/mm/yyyy : hh:mm",
    weekStart: 0,
    startDate: -Infinity,
    endDate: Infinity,
    daysOfWeekDisabled: [],
    autoclose: false,
    autoclose: false,
    startView: 2,
    minView: 0,
    maxView: 4,
    viewSelect: 0,
    todayBtn: false,
    todayHighlight: false,
    forceParse: false,
  });
});
