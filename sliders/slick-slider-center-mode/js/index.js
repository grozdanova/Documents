//Playing with Ken Wheeler Slick carousel
$('.slider').slick({
	//dots: true,
	infinite: true,
	arrows: true,
	centerMode: true,
	centerPadding: '12%',
	slidesToShow: 3,
	speed: 500,
	prevArrow: "<img class='slick-prev' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-512.png' >",
	nextArrow: "<img class='slick-next' src='http://www.uidownload.com/files/600/128/1004/navigate-next-icon.png' >",
responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }

    }]
});


/* $(".slick-center").addClass(
		"switch");
$(".slick-current").prev().addClass(
		"switch");
$('.slider').on('init', function(currentSlide) {
	console.log(currentSlide);
	$(".slick-center").prev().toggleClass("switch"); 
}); */

// var bookId;
//                    $(document).ready(function () {
//             $(document.body).on('click', '.item', function (e) {
              
//               e.preventDefault(); // Prevent default action - this works
//               console.log('The click works!'); // This fires and works just fine

//              bookId = $(e.currentTarget).attr('data-id'); //   This is where the problem lies

//               console.log(bookId);
//             }); // End on click
//           }); 

        var leadsRef = firebase.database().ref('users');
        leadsRef.on('value', function (snapshot) {
          var a = snapshot.exists();
          console.log(a);
          console.log("There are " + snapshot.numChildren() + " children");
          console.log(snapshot.key);

          var s = snapshot.val();
          console.log(s);
          var keys = Object.keys(a);
          // console.log(keys.toString());

          snapshot.forEach(function (childSnapshot) {
            childData = childSnapshot.val();
            var books = childData.books;
            // console.log(books);

            data.push(books);
          });
		  });