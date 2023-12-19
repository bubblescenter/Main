// our services buttons


// eng 


$("#play-area").on("click", function () {

    $(".our-services-img-settings").addClass("smooth-background-transition");

    $("#our-services-text-id").text("Our vibrant soft play area is a haven for little ones, filled with colorful structures and interactive games, providing a safe and joyful space for kids to explore, play, and make new friends.");
    $(".our-services-phone-section").css("background-image", "url('css/images/soft-play-area-phone.jpg')");

    if (!$("#play-area").hasClass("our-services-buttons-js-border")) {
        $('#play-area').addClass('our-services-buttons-js-border');
    }
    if ($("#safty-and-staff").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff').removeClass('our-services-buttons-js-border');
    }
    if ($("#food-and-coffee").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee').removeClass('our-services-buttons-js-border');
    }
    if ($("#birthday-party").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party').removeClass('our-services-buttons-js-border');
    }

});

$("#safty-and-staff").on("click", function () {

    $(".our-services-img-settings").addClass("smooth-background-transition");

    $("#our-services-text-id").text("Experience a secure soft play haven where safety and hygiene are paramount.Our trained staff ensures your children can explore, play, and socialize confidently in a protected environment.With rigorous hygiene standards, we provide a clean, sanitized spaces.");
    $(".our-services-phone-section").css("background-image", "url('css/images/safe-phone.jpeg')");

    if (!$("#safty-and-staff").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff').addClass('our-services-buttons-js-border');
    }
    if ($("#play-area").hasClass("our-services-buttons-js-border")) {
        $('#play-area').removeClass('our-services-buttons-js-border');
    }
    if ($("#food-and-coffee").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee').removeClass('our-services-buttons-js-border');
    }
    if ($("#birthday-party").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party').removeClass('our-services-buttons-js-border');
    }
});



$("#food-and-coffee").on("click", function () {
    // Apply the smooth transition class
    $(".our-services-img-settings").addClass("smooth-background-transition");

    // Change the text and background image
    $("#our-services-text-id").text("Indulge your taste buds in our exquisite restaurant offering a diverse menu of culinary delights. Our 'Paresta' section combines the best of both worlds, providing a sophisticated dining experience for parents while ensuring a playful and enjoyable atmosphere for the kids.");
    $(".our-services-phone-section").css("background-image", "url('css/images/food-coffe.jpg')");

    // Add/remove classes for button styles
    if (!$("#food-and-coffee").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee').addClass('our-services-buttons-js-border');
    }
    if ($("#safty-and-staff").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff').removeClass('our-services-buttons-js-border');
    }
    if ($("#play-area").hasClass("our-services-buttons-js-border")) {
        $('#play-area').removeClass('our-services-buttons-js-border');
    }
    if ($("#birthday-party").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party').removeClass('our-services-buttons-js-border');
    }

    // After a short delay, remove the smooth transition class to prevent it from affecting other changes
    setTimeout(function () {
        $(".our-services-img-settings").removeClass("smooth-background-transition");
    }, 300);
});



$("#birthday-party").on("click", function () {

    $(".our-services-img-settings").addClass("smooth-background-transition");

    $("#our-services-text-id").text("Celebrate your child's special day in style with our dedicated birthday setup and area. From themed decorations to exciting activities, we' ve got everything covered to make your little one's birthday unforgettable. Let us handle the details while you focus on creating magical memories.");
    $(".our-services-phone-section").css("background-image", "url('css/images/birthday-phone.jpeg')");

    if (!$("#birthday-party").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party').addClass('our-services-buttons-js-border');
    }
    if ($("#safty-and-staff").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff').removeClass('our-services-buttons-js-border');
    }
    if ($("#play-area").hasClass("our-services-buttons-js-border")) {
        $('#play-area').removeClass('our-services-buttons-js-border');
    }
    if ($("#food-and-coffee").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee').removeClass('our-services-buttons-js-border');
    }

});





// arabic 
$("#play-area-ar").on("click", function () {

    $(".our-services-img-settings").addClass("smooth-background-transition");

    $("#our-services-text-id").text("تعد منطقة اللعب النابضة بالحياة لدينا ملاذًا للأطفال الصغار، فهي مليئة بالهياكل الملونة والألعاب التفاعلية، مما يوفر مساحة آمنة ومبهجة للأطفال للاستكشاف واللعب وتكوين صداقات جديدة");
    $(".our-services-phone-section").css("background-image", "url('css/images/soft-play-area-phone.jpg')");

    if (!$("#play-area-ar").hasClass("our-services-buttons-js-border")) {
        $('#play-area-ar').addClass('our-services-buttons-js-border');
    }
    if ($("#safty-and-staff-ar").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#food-and-coffee-ar").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#birthday-party-ar").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party-ar').removeClass('our-services-buttons-js-border');
    }

});

$("#safty-and-staff-ar").on("click", function () {

    $(".our-services-img-settings").addClass("smooth-background-transition");

    $("#our-services-text-id").text("نحن نولي اهتمامًا فائقًا للسلامة والنظافة. يعمل موظفونا على ضمان سلامة أطفالكم، حيث يمكنهم الاستكشاف واللعب والتواصل الاجتماعي بكل ثقة في بيئة محمية. بفضل معايير النظافة الصارمة التي نتبعها، نقدم مساحات نظيفة ومعقمة، حيث يمكن لأطفالكم الاستمتاع بتجربة ممتعة وصحية. نحن نحرص على توفير بيئة آمنة ونظيفة لضمان راحة الأطفال والآباء على حد سواء");
    $(".our-services-phone-section").css("background-image", "url('css/images/safe-phone.jpeg')");

    if (!$("#safty-and-staff-ar").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff-ar').addClass('our-services-buttons-js-border');
    }
    if ($("#play-area-ar").hasClass("our-services-buttons-js-border")) {
        $('#play-area-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#food-and-coffee-ar").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#birthday-party-ar").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party-ar').removeClass('our-services-buttons-js-border');
    }
});



$("#food-and-coffee-ar").on("click", function () {
    // Apply the smooth transition class
    $(".our-services-img-settings").addClass("smooth-background-transition");

    // Change the text and background image
    $("#our-services-text-id").text("استمتعوا بتذوق نكهات شهية في مطعمنا الذي يقدم قائمة متنوعة من الأطباق اللذيذة. قسم 'باريستا' لدينا يقدم تجربة فريدة، مع الحرص على إبقاء جو مليء باللعب والمتعة للأطفال");
    $(".our-services-phone-section").css("background-image", "url('css/images/food-coffe.jpg')");

    // Add/remove classes for button styles
    if (!$("#food-and-coffee-ar").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee-ar').addClass('our-services-buttons-js-border');
    }
    if ($("#safty-and-staff-ar").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#play-area-ar").hasClass("our-services-buttons-js-border")) {
        $('#play-area-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#birthday-party-ar").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party-ar').removeClass('our-services-buttons-js-border');
    }

    // After a short delay, remove the smooth transition class to prevent it from affecting other changes
    setTimeout(function () {
        $(".our-services-img-settings").removeClass("smooth-background-transition");
    }, 300);
});



$("#birthday-party-ar").on("click", function () {

    $(".our-services-img-settings").addClass("smooth-background-transition");

    $("#our-services-text-id").text("احتفلوا بيوم مميز لطفلكم  مع إعدادنا المخصص للاحتفال بعيد الميلاد. من الزينة الموافقة للموضوع إلى الأنشطة المثيرة، لدينا كل شيء مغطى لجعل عيد ميلاد صغيركم لا يُنسى. دعونا ندير التفاصيل بينما تركزون على صنع ذكريات ساحرة");
    $(".our-services-phone-section").css("background-image", "url('css/images/birthday-phone.jpeg')");

    if (!$("#birthday-party-ar").hasClass("our-services-buttons-js-border")) {
        $('#birthday-party-ar').addClass('our-services-buttons-js-border');
    }
    if ($("#safty-and-staff-ar").hasClass("our-services-buttons-js-border")) {
        $('#safty-and-staff-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#play-area-ar").hasClass("our-services-buttons-js-border")) {
        $('#play-area-ar').removeClass('our-services-buttons-js-border');
    }
    if ($("#food-and-coffee-ar").hasClass("our-services-buttons-js-border")) {
        $('#food-and-coffee-ar').removeClass('our-services-buttons-js-border');
    }

});

