$(document).ready(function () {
  $(function () {
    $(".bubbles").draggable();
  });

  $(".button_to_sectionsecond").click(function () {
    $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
    $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_to_sectionthird").click(function () {
    $(".sectionthird").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
    $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_back_to_sectionsecond_from_sectionthird").click(function () {
    $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_to_sectionfourth").click(function () {
    $(".sectionfourth").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_back_to_sectionsecond_from_sectionfourth").click(function () {
    $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionfourth").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_to_sectionfifth").click(function () {
    $(".sectionfifth").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_back_to_sectionsecond_from_sectionfifth").click(function () {
    $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionfifth").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".hint1").click(function () {
    $(".tablet").toggleClass("show-tablet");
    $(".tablet").toggleClass("hide");
    setTimeout(function () {
      $(".tablet").toggleClass("show-tablet");
    }, 1200);
  });

  $(".first_click_bubble").click(function () {
    $(".first_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".second_click_bubble ").click(function () {
    $(".second_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });

  $(".third_click_bubble ").click(function () {
    $(".third_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });

  $(".fourth_click_bubble").click(function () {
    $(".fourth_click_bubble").addClass("hide").removeClass("opposite_hide");
    $(".congrats_alert ").addClass("opposite_hide").removeClass("hide");
    $(".fourth_click_fish ").addClass("opposite_hide").removeClass("hide");
  });
  $(".fourth_click_fish").click(function () {
    $(".congrats_alert").addClass("opposite_hide").removeClass("hide");
  });

  $(".congrats_alert").click(function () {
    $(".congrats_alert").addClass("hide").removeClass("opposite_hide");
  });
  $(".fifth_click_bubble").click(function () {
    $(".fifth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".sixth_click_bubble").click(function () {
    $(".sixth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".seventh_click_bubble").click(function () {
    $(".seventh_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".eighth_click_bubble").click(function () {
    $(".eighth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".ninth_click_bubble").click(function () {
    $(".ninth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".tenth_click_bubble").click(function () {
    $(".tenth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".eleventh_click_bubble").click(function () {
    $(".eleventh_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".twelfth_click_bubble").click(function () {
    $(".twelfth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirteenth_click_bubble ").click(function () {
    $(".thirteenth_click_bubble  ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".fourteenth_click_bubble ").click(function () {
    $(".fourteenth_click_bubble  ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".fifteenth_click_bubble ").click(function () {
    $(".fifteenth_click_bubble  ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".sixteenth_click_bubble").click(function () {
    $(".sixteenth_click_bubble ").addClass("hide").removeClass("opposite_hide");
  });
  $(".seventeenth_click_bubble").click(function () {
    $(".seventeenth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".eighthteenth_click_bubble").click(function () {
    $(".eighthteenth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".nineteenth_click_bubble").click(function () {
    $(".nineteenth_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".twentieth_click_bubble").click(function () {
    $(".twentieth_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".twentyfirst_click_bubble ").click(function () {
    $(".twentyfirst_click_bubble  ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentysecond_click_bubble ").click(function () {
    $(".twentysecond_click_bubble ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentythird_click_bubble ").click(function () {
    $(".twentythird_click_bubble ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentyfourth_click_bubble ").click(function () {
    $(".twentyfourth_click_bubble ")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentyfifth_click_bubble").click(function () {
    $(".twentyfifth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentysixth_click_bubble").click(function () {
    $(".twentysixth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentyseventh_click_bubble").click(function () {
    $(".twentyseventh_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentyeighth_click_bubble").click(function () {
    $(".twentyeighth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".twentynineth_click_bubble").click(function () {
    $(".twentynineth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".thirty_click_bubble").click(function () {
    $(".thirty_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirtyone_click_bubble").click(function () {
    $(".thirtyone_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirtytwo_click_bubble").click(function () {
    $(".thirtytwo_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirtythree_click_bubble").click(function () {
    $(".thirtythree_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".thirtyfour_click_bubble").click(function () {
    $(".thirtyfour_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirtyfive_click_bubble").click(function () {
    $(".thirtyfive_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirtysix_click_bubble").click(function () {
    $(".thirtysix_click_bubble").addClass("hide").removeClass("opposite_hide");
  });
  $(".thirtyseven_click_bubble").click(function () {
    $(".thirtyseven_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });
  $(".thirtyeighth_click_bubble").click(function () {
    $(".thirtyeighth_click_bubble")
      .addClass("hide")
      .removeClass("opposite_hide");
  });

  $(".seaweed").click(function () {
    $(".seaweed_with_headphones").toggleClass("show-tablet");
    $(".seaweed_with_headphones").toggleClass("hide");
    setTimeout(function () {
      $(".seaweed_with_headphones").toggleClass("show-tablet");
    }, 1200);
  });
  $(".seaweed_with_headphones").click(function () {
    $(".seaweed_with_headphones").toggleClass("show-tablet");
    $(".seaweed_with_headphones").toggleClass("hide");
    setTimeout(function () {
      $(".seaweed_with_headphones").toggleClass("show-tablet");
    }, 1200);
  });

  $(".cola").click(function () {
    $(".fish_cola").toggleClass("show-tablet");
    $(".fish_cola").toggleClass("hide");
    setTimeout(function () {
      $(".fish_cola").toggleClass("show-tablet");
    }, 1200);
  });
  $(".fish_cola").click(function () {
    $(".fish_cola").toggleClass("show-tablet");
    $(".fish_cola").toggleClass("hide");
    setTimeout(function () {
      $(".fish_cola").toggleClass("show-tablet");
    }, 1200);
  });

  $(".shell").click(function () {
    $(".shell_clock").toggleClass("show-tablet");
    $(".shell_clock").toggleClass("hide");
    setTimeout(function () {
      $(".shell_clock").toggleClass("show-tablet");
    }, 1200);
  });
  $(".shell_clock").click(function () {
    $(".shell_clock").toggleClass("show-tablet");
    $(".shell_clock").toggleClass("hide");
    setTimeout(function () {
      $(".shell_clock").toggleClass("show-tablet");
    }, 1200);
  });
  $(".plant").click(function () {
    $(".plant_phone").toggleClass("show-tablet");
    $(".plant_phone").toggleClass("hide");
    setTimeout(function () {
      $(".plant_phone").toggleClass("show-tablet");
    }, 1200);
  });
  $(".plant_phone").click(function () {
    $(".shell_clock").toggleClass("show-tablet");
    $(".plant_phone").toggleClass("hide");
    setTimeout(function () {
      $(".plant_phone").toggleClass("show-tablet");
    }, 1200);
  });

  $(".one_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".two_cube").click(function () {
    $(this).toggleClass("violet");
  });
  $(".three_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".four_cube").click(function () {
    $(this).toggleClass("violet");
  });
  $(".five_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".six_cube").click(function () {
    $(this).toggleClass("violet");
  });
  $(".seven_cube").click(function () {
    $(this).toggleClass("violet");
  });
  $(".eight_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".nine_cube").click(function () {
    $(this).toggleClass("light");
  });
  $(".ten_cube").click(function () {
    $(this).toggleClass("orange");
  });
  $(".eleven_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".twelve_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".thirteen_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".fourteen_cube").click(function () {
    $(this).toggleClass("orange");
  });
  $(".fifteen_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".sixteen_cube").click(function () {
    $(this).toggleClass("yellow");
  });
  $(".seventeen_cube").click(function () {
    $(this).toggleClass("light");
  });
  $(".eighteen_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".ninteen_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".twenty_cube").click(function () {
    $(this).toggleClass("light");
  });
  $(".twentyone_cube").click(function () {
    $(this).toggleClass("yellow");
  });
  $(".twentytwo_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".twentythree_cube").click(function () {
    $(this).toggleClass("orange");
  });
  $(".twentyfour_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".twentyfive_cube").click(function () {
    $(this).toggleClass("violet");
  });
  $(".twentysix_cube").click(function () {
    $(this).toggleClass("orange");
  });
  $(".twentyseven_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".twentyeight_cube").click(function () {
    $(this).toggleClass("light");
  });
  $(".twentynine_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".thirty_cube").click(function () {
    $(this).toggleClass("violet");
  });
  $(".thirtyone_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".thirtytwo_cube").click(function () {
    $(this).toggleClass("red");
  });
  $(".thirtythree_cube").click(function () {
    $(this).toggleClass("orange");
  });
  $(".thirtyfour_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".thirtyfive_cube").click(function () {
    $(this).toggleClass("bluee");
  });
  $(".thirtysix_cube").click(function () {
    $(this).toggleClass("bluee");
  });

  $(".off_button").click(function () {
    $(".on_button").toggleClass("hide");
    $(".cube").toggleClass("black");
  });
  $(".on_button").click(function () {
    $(".on_button").toggleClass("hide");
    $(".cube").toggleClass("black");
  });
});
