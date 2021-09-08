(function() {
  'use strict';
  setTimeout(function() {
    $.fn.fullpage.reBuild();
  }, 2500);


  var locations = [{
      name: 'Wanaka',
      img: 'url("img/wanaka.png")'
    },
    {
      name: 'Wellington',
      img: 'url("img/wellington.png")'
    },
    {
      name: 'Queenstown',
      img: 'url("img/queenstown.png")'
    },
    {
      name: 'Kaikoura',
      img: 'url("img/kaikoura.png")'
    },
    {
      name: 'Fiordland',
      img: 'url("img/fiordland.png")'
    }
  ];
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                              Hotel Data
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  var data = [
    // Initial 4 objects are first followed, by extra hotels added by me to ensure there are still search results after adding a loction option

    //          Hotel 1 Starts
    {
      name: 'Hilton Hotel',
      pricePerNight: 157,
      type: 'Hotel',
      minStay: 1,
      maxStay: 5,
      minPPL: 1,
      maxPPL: 2,
      breakfastPrice: 10.99,
      breakfastDescription: 'Freshly cooked buffet breakfast - eggs, meats yogurts, pancakes etc',
      rating: 9.1,
      reviewCount: 258,
      reviewQuote: 'Amazing',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Fittness Center',
      facilityIconB: '<i class="fa fa-bicycle"></i>',
      facilityC: 'Bar',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/hotelImg.png',
      smlImg1: 'img/hotelImg2.png',
      smlImg2: 'img/hotelImg3.png',
      bgImg: 'url("img/hotelImg.png")',
      roomName: 'Double Room',
      beds: 'Two queen beds',
      roomDescription: 'A private room suitable for up to two people. Bed linen and towels provided',
      location: 'Wanaka',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },
    //          Hotel 2 Starts
    {
      name: 'Kiwi Backpackers - Wanaka',
      pricePerNight: 30,
      type: 'hostel',
      minStay: 1,
      maxStay: 10,
      minPPL: 1,
      maxPPL: 1,
      breakfastPrice: 4.99,
      breakfastDescription: 'Cereals, Coffee, Toast yogurt',
      rating: 8.9,
      reviewCount: 433,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Bar',
      facilityIconB: '<i class="fa fa-glass"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/hostelImg.png',
      smlImg1: 'img/hostelImg2.png',
      smlImg2: 'img/hostelImg3.png',
      bgImg: 'url("img/hostelImg.png")',
      roomName: 'Mixed Dorm Room',
      beds: 'One single bed.',
      roomDescription: 'A single bed in a shared dorm room. Bed linen and towels provided',
      location: 'Wanaka',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },
    //          Hotel 3 Starts
    {
      name: 'Lochiel Motel',
      pricePerNight: 90,
      type: 'Motel',
      minStay: 3,
      maxStay: 10,
      minPPL: 2,
      maxPPL: 4,
      breakfastPrice: 7.50,
      breakfastDescription: 'fresh continental style breakfast delivered to your door',
      rating: 7.4,
      reviewCount: 93,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-cutlery"></i>',
      mainImg: 'img/motelImg.png',
      smlImg1: 'img/motelImg2.png',
      smlImg2: 'img/motelImg3.png',
      bgImg: 'url("img/motelImg.png")',
      roomName: 'Self Contained Unit',
      beds: 'Three double beds.',
      roomDescription: 'A fully self contained unit suitable for up to four people.',
      location: 'Wanaka',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },
    //          Hotel 4 Starts
    {
      name: 'Jims Place',
      pricePerNight: 240,
      type: 'apartment',
      minStay: 2,
      maxStay: 15,
      minPPL: 1,
      maxPPL: 4,
      breakfastPrice: '0',
      breakfastDescription: "breakfast is not offered, but there are plenty of cafe's just down the street",
      rating: 7.1,
      reviewCount: 133,
      reviewQuote: 'Perfect Location',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Late Check Out',
      facilityIconC: '<i class="fa fa-bed"></i>',
      mainImg: 'img/houseImg.png',
      smlImg1: 'img/houseImg2.png',
      smlImg2: 'img/houseImg3.png',
      bgImg: 'url("img/houseImg.png")',
      roomName: 'Whole Apartment',
      beds: 'Four double beds.',
      roomDescription: '2 bedroom appartment suitable for up to 4 people. Bed linen and towels provided',
      location: 'Wanaka',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },
    // Extra hotels below
    {
      name: 'Phoenix Hotel Wellington',
      pricePerNight: 157,
      type: 'Hotel',
      minStay: 1,
      maxStay: 10,
      minPPL: 1,
      maxPPL: 5,
      breakfastPrice: 10.99,
      breakfastDescription: 'Freshly cooked buffet breakfast - eggs, meats yogurts, pancakes etc',
      rating: 9.1,
      reviewCount: 258,
      reviewQuote: 'Amazing',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Fittness Center',
      facilityIconB: '<i class="fa fa-bicycle"></i>',
      facilityC: 'Bar',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/wellington-hotel.png',
      smlImg1: 'img/hotelImg2.png',
      smlImg2: 'img/hotelImg3.png',
      bgImg: 'url("img/wellington-hotel.png")',
      roomName: 'Double Room',
      beds: 'Two queen beds',
      roomDescription: 'A private room suitable for up to two people. Bed linen and towels provided',
      location: 'Wellington',
      address: '79 Taranaki St, 9300 Wellington, New Zealand'
    },

    {
      name: 'Kiwi Backpackers - Wellington',
      pricePerNight: 30,
      type: 'hostel',
      minStay: 1,
      maxStay: 10,
      minPPL: 1,
      maxPPL: 5,
      breakfastPrice: 4.99,
      breakfastDescription: 'Cereals, Coffee, Toast yogurt',
      rating: 8.9,
      reviewCount: 433,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Bar',
      facilityIconB: '<i class="fa fa-glass"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/wellington-hostel.png',
      smlImg1: 'img/hostelImg2.png',
      smlImg2: 'img/hostelImg3.png',
      bgImg: 'url("img/wellington-hostel.png")',
      roomName: 'Mixed Dorm Room',
      beds: 'One single bed.',
      roomDescription: 'A single bed in a shared dorm room. Bed linen and towels provided',
      location: 'Wellington',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Wellington, New Zealand'
    },

    {
      name: 'Kingswood Apartments',
      pricePerNight: 120,
      type: 'Motel',
      minStay: 3,
      maxStay: 10,
      minPPL: 2,
      maxPPL: 4,
      breakfastPrice: 7.50,
      breakfastDescription: 'fresh continental style breakfast delivered to your door',
      rating: 7.4,
      reviewCount: 93,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-cutlery"></i>',
      mainImg: 'img/wellington-appartment2.png',
      smlImg1: 'img/motelImg2.png',
      smlImg2: 'img/motelImg3.png',
      bgImg: 'url("img/wellington-appartment2.png")',
      roomName: 'Self Contained Unit',
      beds: 'Three double beds.',
      roomDescription: 'A fully self contained unit suitable for up to four people.',
      location: 'Wellington',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },

    {
      name: 'Jacks Place',
      pricePerNight: 240,
      type: 'apartment',
      minStay: 1,
      maxStay: 15,
      minPPL: 1,
      maxPPL: 4,
      breakfastPrice: '0',
      breakfastDescription: "breakfast is not offered, but there are plenty of cafe's just down the street",
      rating: 7.1,
      reviewCount: 133,
      reviewQuote: 'Perfect Location',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Late Check Out',
      facilityIconC: '<i class="fa fa-bed"></i>',
      mainImg: 'img/wellington-apparments.png',
      smlImg1: 'img/houseImg2.png',
      smlImg2: 'img/houseImg3.png',
      bgImg: 'url("img/wellington-apparments.png")',
      roomName: 'Whole Apartment',
      beds: 'Four double beds.',
      roomDescription: '2 bedroom appartment suitable for up to 4 people. Bed linen and towels provided',
      location: 'Wellington',
      address: '64 Wallace Street Mount Cook 6021, New Zealand'
    },
    {
      name: 'Hilton Hotel Queenstown',
      pricePerNight: 177,
      type: 'Hotel',
      minStay: 1,
      maxStay: 5,
      minPPL: 1,
      maxPPL: 2,
      breakfastPrice: 10.99,
      breakfastDescription: 'Freshly cooked buffet breakfast - eggs, meats yogurts, pancakes etc',
      rating: 9.1,
      reviewCount: 258,
      reviewQuote: 'Amazing',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Fittness Center',
      facilityIconB: '<i class="fa fa-bicycle"></i>',
      facilityC: 'Bar',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/queens-hotel.png',
      smlImg1: 'img/hotelImg2.png',
      smlImg2: 'img/hotelImg3.png',
      bgImg: 'url("img/queens-hotel.png")',
      roomName: 'Double Room',
      beds: 'Two queen beds',
      roomDescription: 'A private room suitable for up to two people. Bed linen and towels provided',
      location: 'Queenstown',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },

    {
      name: 'Kiwi Backpackers - Queenstown',
      pricePerNight: 30,
      type: 'hostel',
      minStay: 1,
      maxStay: 10,
      minPPL: 1,
      maxPPL: 1,
      breakfastPrice: 4.99,
      breakfastDescription: 'Cereals, Coffee, Toast yogurt',
      rating: 8.9,
      reviewCount: 433,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Bar',
      facilityIconB: '<i class="fa fa-glass"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/queens-hostel.png',
      smlImg1: 'img/hostelImg2.png',
      smlImg2: 'img/hostelImg3.png',
      bgImg: 'url("img/queens-hostel.png")',
      roomName: 'Mixed Dorm Room',
      beds: 'One single bed.',
      roomDescription: 'A single bed in a shared dorm room. Bed linen and towels provided',
      location: 'Queenstown',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },

    {
      name: 'Sunset Motel',
      pricePerNight: 90,
      type: 'Motel',
      minStay: 3,
      maxStay: 10,
      minPPL: 2,
      maxPPL: 4,
      breakfastPrice: 7.50,
      breakfastDescription: 'fresh continental style breakfast delivered to your door',
      rating: 7.4,
      reviewCount: 93,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-cutlery"></i>',
      mainImg: 'img/queens-motel.png',
      smlImg1: 'img/motelImg2.png',
      smlImg2: 'img/motelImg3.png',
      bgImg: 'url("img/queens-motel.png")',
      roomName: 'Self Contained Unit',
      beds: 'Three double beds.',
      roomDescription: 'A fully self contained unit suitable for up to four people.',
      location: 'Queenstown',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },

    {
      name: 'Jills Place',
      pricePerNight: 240,
      type: 'apartment',
      minStay: 2,
      maxStay: 15,
      minPPL: 1,
      maxPPL: 4,
      breakfastPrice: '0',
      breakfastDescription: "breakfast is not offered, but there are plenty of cafe's just down the street",
      rating: 7.1,
      reviewCount: 133,
      reviewQuote: 'Perfect Location',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Late Check Out',
      facilityIconC: '<i class="fa fa-bed"></i>',
      mainImg: 'img/queens-appartment.png',
      smlImg1: 'img/houseImg2.png',
      smlImg2: 'img/houseImg3.png',
      bgImg: 'url("img/queens-appartment.png")',
      roomName: 'Whole Apartment',
      beds: 'Four double beds.',
      roomDescription: '2 bedroom appartment suitable for up to 4 people. Bed linen and towels provided',
      location: 'Queenstown',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Queenstown, New Zealand'
    },
    {
      name: 'Hilton Hotel',
      pricePerNight: 157,
      type: 'Hotel',
      minStay: 1,
      maxStay: 5,
      minPPL: 1,
      maxPPL: 2,
      breakfastPrice: 10.99,
      breakfastDescription: 'Freshly cooked buffet breakfast - eggs, meats yogurts, pancakes etc',
      rating: 9.1,
      reviewCount: 258,
      reviewQuote: 'Amazing',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Fittness Center',
      facilityIconB: '<i class="fa fa-bicycle"></i>',
      facilityC: 'Bar',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/fiorland-hotel.png',
      smlImg1: 'img/hotelImg2.png',
      smlImg2: 'img/hotelImg3.png',
      bgImg: 'url("img/fiorland-hotel.png")',
      roomName: 'Double Room',
      beds: 'Two queen beds',
      roomDescription: 'A private room suitable for up to two people. Bed linen and towels provided',
      location: 'Fiordland',
      address: '79 Arrows Road, Kelvin Heights, 9300 Fiordland, New Zealand'
    },

    {
      name: 'Kiwi Backpackers - Fiordland',
      pricePerNight: 30,
      type: 'hostel',
      minStay: 1,
      maxStay: 10,
      minPPL: 1,
      maxPPL: 1,
      breakfastPrice: 4.99,
      breakfastDescription: 'Cereals, Coffee, Toast yogurt',
      rating: 8.9,
      reviewCount: 433,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Bar',
      facilityIconB: '<i class="fa fa-glass"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/fiordland-hostel.png',
      smlImg1: 'img/hostelImg2.png',
      smlImg2: 'img/hostelImg3.png',
      bgImg: 'url("img/fiordland-hostel.png")',
      roomName: 'Mixed Dorm Room',
      beds: 'One single bed.',
      roomDescription: 'A single bed in a shared dorm room. Bed linen and towels provided',
      location: 'Fiordland',
      address: '54 Mill Road, Kelvin Heights, 9300 Fiordland, New Zealand'
    },

    {
      name: 'Rose Motel',
      pricePerNight: 120,
      type: 'Motel',
      minStay: 3,
      maxStay: 10,
      minPPL: 2,
      maxPPL: 4,
      breakfastPrice: 7.50,
      breakfastDescription: 'fresh continental style breakfast delivered to your door',
      rating: 7.4,
      reviewCount: 93,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-cutlery"></i>',
      mainImg: 'img/fiordland-motel.png',
      smlImg1: 'img/motelImg2.png',
      smlImg2: 'img/motelImg3.png',
      bgImg: 'url("img/fiordland-motel.png")',
      roomName: 'Self Contained Unit',
      beds: 'Three double beds.',
      roomDescription: 'A fully self contained unit suitable for up to four people.',
      location: 'Fiordland',
      address: '79 Peninsula Road, Kelvin Heights, 9300 Fiordland, New Zealand'
    },

    {
      name: 'Jolenes Place',
      pricePerNight: 240,
      type: 'apartment',
      minStay: 2,
      maxStay: 15,
      minPPL: 1,
      maxPPL: 4,
      breakfastPrice: '0',
      breakfastDescription: "breakfast is not offered, but there are plenty of cafe's just down the street",
      rating: 7.1,
      reviewCount: 133,
      reviewQuote: 'Perfect Location',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Late Check Out',
      facilityIconC: '<i class="fa fa-bed"></i>',
      mainImg: 'img/fiordland-appartments.png',
      smlImg1: 'img/houseImg2.png',
      smlImg2: 'img/houseImg3.png',
      bgImg: 'url("img/fiordland-appartments.png")',
      roomName: 'Whole Apartment',
      beds: 'Four double beds.',
      roomDescription: '2 bedroom appartment suitable for up to 4 people. Bed linen and towels provided',
      location: 'Fiordland',
      address: '52 Pikes Road, 9400 Kaikoura, New Zealand'
    },
    {
      name: 'Whale Hotel',
      pricePerNight: 157,
      type: 'Hotel',
      minStay: 1,
      maxStay: 5,
      minPPL: 1,
      maxPPL: 2,
      breakfastPrice: 10.99,
      breakfastDescription: 'Freshly cooked buffet breakfast - eggs, meats yogurts, pancakes etc',
      rating: 9.1,
      reviewCount: 258,
      reviewQuote: 'Amazing',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Fittness Center',
      facilityIconB: '<i class="fa fa-bicycle"></i>',
      facilityC: 'Bar',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/kaikoura-hotel.png',
      smlImg1: 'img/hotelImg2.png',
      smlImg2: 'img/hotelImg3.png',
      bgImg: 'url("img/kaikoura-hotel.png")',
      roomName: 'Double Room',
      beds: 'Two queen beds',
      roomDescription: 'A private room suitable for up to two people. Bed linen and towels provided',
      location: 'Kaikoura',
      address: '122 Harris Street, 9460 Kaikoura, New Zealand'
    },

    {
      name: 'Kiwi Backpackers Kaikoura',
      pricePerNight: 30,
      type: 'hostel',
      minStay: 1,
      maxStay: 10,
      minPPL: 1,
      maxPPL: 1,
      breakfastPrice: 4.99,
      breakfastDescription: 'Cereals, Coffee, Toast yogurt',
      rating: 8.9,
      reviewCount: 433,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Bar',
      facilityIconB: '<i class="fa fa-glass"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-glass"></i>',
      mainImg: 'img/kaikoura-hostel.png',
      smlImg1: 'img/hostelImg2.png',
      smlImg2: 'img/hostelImg3.png',
      bgImg: 'url("img/kaikoura-hostel.png")',
      roomName: 'Mixed Dorm Room',
      beds: 'One single bed.',
      roomDescription: 'A single bed in a shared dorm room. Bed linen and towels provided',
      location: 'Kaikoura',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Kaikoura, New Zealand'
    },

    {
      name: 'Heritage Lodge',
      pricePerNight: 90,
      type: 'Motel',
      minStay: 3,
      maxStay: 10,
      minPPL: 2,
      maxPPL: 4,
      breakfastPrice: 7.50,
      breakfastDescription: 'fresh continental style breakfast delivered to your door',
      rating: 7.4,
      reviewCount: 93,
      reviewQuote: 'Great Value',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Kitchen',
      facilityIconC: '<i class="fa fa-cutlery"></i>',
      mainImg: 'img/kaikoura-lodge.png',
      smlImg1: 'img/motelImg2.png',
      smlImg2: 'img/motelImg3.png',
      bgImg: 'url("img/kaikoura-lodge.png")',
      roomName: 'Self Contained Unit',
      beds: 'Three double beds.',
      roomDescription: 'A fully self contained unit suitable for up to four people.',
      location: 'Kaikoura',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Kaikoura, New Zealand'
    },

    {
      name: 'Dolphin Motel',
      pricePerNight: 240,
      type: 'apartment',
      minStay: 2,
      maxStay: 15,
      minPPL: 1,
      maxPPL: 4,
      breakfastPrice: '0',
      breakfastDescription: "breakfast is not offered, but there are plenty of cafe's just down the street",
      rating: 7.1,
      reviewCount: 133,
      reviewQuote: 'Perfect Location',
      facilityA: 'Free Wifi',
      facilityIconA: '<i class="fa fa-wifi"></i>',
      facilityB: 'Free Parking',
      facilityIconB: '<i class="fa fa-car"></i>',
      facilityC: 'Late Check Out',
      facilityIconC: '<i class="fa fa-bed"></i>',
      mainImg: 'img/kaikoura-motel.png',
      smlImg1: 'img/houseImg2.png',
      smlImg2: 'img/houseImg3.png',
      bgImg: 'url("img/kaikoura-motel.png")',
      roomName: 'Whole Apartment',
      beds: 'Four double beds.',
      roomDescription: '2 bedroom appartment suitable for up to 4 people. Bed linen and towels provided',
      location: 'Kaikoura',
      address: 'Kawarau Village, 79 Peninsula Road, Kelvin Heights, 9300 Kaikoura, New Zealand'
    }
  ];


  // make refresh return to landing screen to avoid users seeing empty pages
  window.location.replace('#section1/slide1');

  // ::::::::::::::::::::::::::::::::::::::::::::
  // Initalize Fullpage Js and configure settings
  // ::::::::::::::::::::::::::::::::::::::::::::
  $('#fullPage').fullpage({
    navigation: false,
    anchors: ['section1', 'slide1', 'slide2', 'slide3'],
    scrollingSpeed: 700,
    controlArrows: false,
    scrollOverflow: true,
    normalScrollElements: '#wrap, #wrap2',
    scrollOverflowOptions: {
      click: false,
    }
  });


  // Order Full page to rebuld
  setTimeout(function() {
    $.fn.fullpage.reBuild();
  }, 2500);


  // :::::::::::::::::::::::
  //    Search Function
  // ::::::::::::::::::::::::
  $('#search').click(function() {

    validateSearch();
    resetSearch();
    createElements();

  });

  // Disable previous dates
  $(function() {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
      month = '0' + month.toString();
    if (day < 10)
      day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#start').attr('min', maxDate);
    $('#end').attr('min', maxDate);
  });


  function validateSearch() {
    $('#form').parsley();
    event.preventDefault();
    // Validate all input fields.
    var isValid = true;
    $('input').each(function() {
      if ($(this).parsley().validate() !== true) isValid = false;
    });
    if (isValid) {
      window.location.href = '#section1/slide2';
    }
  }
  // remove previous search results 
  function resetSearch() {
    var oldHotels = document.querySelectorAll('.hotel');
    for (var r = 0; r < oldHotels.length; r++) {
      oldHotels[r].remove();
    }
  }


  function createElements() {
    // Get Input variables:::::::::::::
    var location = document.querySelector('#location').value;
    var guests = document.querySelector('#guestNumber').value;
    var startDate = new Date(document.querySelector('#start').value);
    var endDate = new Date(document.querySelector('#end').value);
    var sort = document.querySelector('#sort');
    // Elements from the dom that need updating
    var getGrid = document.querySelector('#results');
    var locationHero = document.querySelector('#locationHero');
    var locationTitle = document.querySelector('#locationTitle');
    // User choices to be defined later
    var heroSrc; // an array index according to the users chosen location
    var selection; // an array index relating to the user chosen hotel
    var bFastTotal = 0;

    // Convert date inputs to display in the dom
    // Check In
    var checkInString = startDate.toString();
    var splitCheckIn = checkInString.split(' ');
    var userCheckIn = splitCheckIn[0] + ' ' + splitCheckIn[1] + ' ' +
      splitCheckIn[2] + ' ' + splitCheckIn[3];
    // Check Out
    var checkOutString = endDate.toString();
    var splitCheckOut = checkOutString.split(' ');
    var userCheckOut = splitCheckOut[0] + ' ' + splitCheckOut[1] + ' ' +
      splitCheckOut[2] + ' ' + splitCheckOut[3];

    function showSearchDetails() {
      $('#locationDetail').text(location);
      $('#checkInDetail').text(userCheckIn);
      $('#checkOutDetail').text(userCheckOut);
      $('#guestDetail').text(guests);
    }
    showSearchDetails();

    // Identify which location the user has chosen and match it with the location object
    function findHero() {
      for (var z = 0; z < locations.length; z++) {
        if (locations[z].name === location) {
          heroSrc = z;
          changeLocationHero();
        }
      }
    } // FindHero function ends
    findHero();

    // Update results page with appropriate hero Image and location Title
    function changeLocationHero() {
      locationHero.style.backgroundImage = locations[heroSrc].img;
      locationTitle.textContent = locations[heroSrc].name;
    }
    // Get Date Range, Snippet From Stack:::::::::::::::
    function getDateRange() {
      var getDateArray = function(start, end) {
        var arr = [];
        var dt = new Date(start);
        while (dt <= end) {
          arr.push(new Date(dt));
          dt.setDate(dt.getDate() + 1);
        }
        return arr;
      };
      var dateArr = getDateArray(startDate, endDate);
      //  Stack Snippet Ends
      // Display number of days selected minus checkout date
      var numberOfNights = dateArr.length - 1;
      return numberOfNights;
    } // getDateRange ENDS

    getDateRange();

    // Filter through Hotel data to find match::::::::::::::::::::::::::
    var filteredHotels = data.filter(function(currentElement) {
      // the current value is an object, so you can check on its properties
      return currentElement.minStay <= getDateRange() && getDateRange() <=
        currentElement.maxStay &&
        guests >= currentElement.minPPL && guests <= currentElement
        .maxPPL && currentElement.location === location;
    });
console.log("hello");

    // Sort by loswest price to highest - snippet found on stack
    var eitherSort = (filteredHotels = []) => {
      var sorter = (a, b) => {
        return +a.pricePerNight - +b.pricePerNight;
      };
      filteredHotels.sort(sorter);
    };
    // sniptet ends

    // only sort results if checkbox is checked
    if (sort.checked) {
      eitherSort(filteredHotels);
    }

    // Show an error on results page if no results are found
    function showError() {
      if (filteredHotels.length === 0) {
        $('#myError').show();
      } else {
        $('#myError').hide();
      }
    }
    showError();

    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Create elements in the dom - Results Page
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    for (var i = 0; i < filteredHotels.length; i++) {

      var hotel = document.createElement('div');
      hotel.classList.add('hotel');
      getGrid.appendChild(hotel);

      var mainImg = document.createElement('img');
      mainImg.classList.add('hotel-img');
      hotel.appendChild(mainImg);

      // Grid Center:::::::::::::::::::::::::::::::::::::::::::::
      var gridCenter = document.createElement('div');
      gridCenter.classList.add('grid-center');
      hotel.appendChild(gridCenter);

      var loadTitle = document.createElement('h3');
      gridCenter.appendChild(loadTitle);

      // Facilities-------------------------------------------
      var loadFacilities = document.createElement('div');
      loadFacilities.classList.add('facilities');
      gridCenter.appendChild(loadFacilities);
      var facilityA = document.createElement('p');
      loadFacilities.appendChild(facilityA);
      var facilityB = document.createElement('p');
      loadFacilities.appendChild(facilityB);
      var facilityC = document.createElement('p');
      loadFacilities.appendChild(facilityC);

      var facilityIconA = document.createElement('span');
      var facilityIconB = document.createElement('span');
      var facilityIconC = document.createElement('span');

      facilityA.appendChild(facilityIconA);
      facilityB.appendChild(facilityIconB);
      facilityC.appendChild(facilityIconC);

      // Description
      var description = document.createElement('p');
      gridCenter.appendChild(description);

      // Grid Right::::::::::::::::::::::::::::::::::::::::::::::::::::::::

      var gridRight = document.createElement('div');
      gridRight.classList.add('grid-right');
      hotel.appendChild(gridRight);

      // Rating----------------------------------------
      var ratingDiv = document.createElement('div');
      ratingDiv.classList.add('rating');
      gridRight.appendChild(ratingDiv);

      var ratingTextWrap = document.createElement('div');
      ratingDiv.appendChild(ratingTextWrap);

      var ratingQuote = document.createElement('h5');
      ratingTextWrap.appendChild(ratingQuote);

      var reviewCount = document.createElement('div');
      ratingTextWrap.appendChild(reviewCount);

      var ratingNumber = document.createElement('p');
      ratingNumber.classList.add('rating-number', 'my-red');
      ratingDiv.appendChild(ratingNumber);

      // Price---------------------------------------------------
      var priceDiv = document.createElement('div');
      priceDiv.classList.add('price');
      gridRight.appendChild(priceDiv);

      var priceDescription = document.createElement('p');
      priceDiv.appendChild(priceDescription);
      var priceNum = document.createElement('h4');
      priceDiv.appendChild(priceNum);

      // Button
      var pagelink = document.createElement('a');
      gridRight.appendChild(pagelink);

      var viewBtn = document.createElement('div');
      viewBtn.classList.add('btn', 'my-red', 'accom-select');
      viewBtn.value = filteredHotels[i].name;
      pagelink.appendChild(viewBtn);
      pagelink.href = '#section1/slide3';

      // ::::::::::::::::Updating Text Content::::::::::::::::::::::::
      // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

      // 0.Img
      mainImg.src = filteredHotels[i].mainImg;

      // 1.title
      loadTitle.textContent = filteredHotels[i].name;

      // 2.Description
      description.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. ';

      // 3.Facilities
      facilityA.innerHTML = filteredHotels[i].facilityA + filteredHotels[i]
        .facilityIconA;
      facilityB.innerHTML = filteredHotels[i].facilityB + filteredHotels[i]
        .facilityIconB;
      facilityC.innerHTML = filteredHotels[i].facilityC + filteredHotels[i]
        .facilityIconC;

      // 4.rating
      ratingQuote.textContent = filteredHotels[i].reviewQuote;
      reviewCount.textContent = filteredHotels[i].reviewCount + ' reviews';
      ratingNumber.textContent = filteredHotels[i].rating;

      // 5.Price
      priceDescription.textContent = '1 adult Per Night';
      priceNum.textContent = '$' + filteredHotels[i].pricePerNight;

      // 4.Button
      viewBtn.textContent = 'view';


    } // loop ends

    // Order fullpage to rebuild
    setTimeout(function() {
      $.fn.fullpage.reBuild();
    }, 2500);

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Identify the users chosen Hotel
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Add a click function to the window to solve issues from dynamically created buttons
    document.addEventListener('click', function(e) {
      // define the target objects by class name
      if (e.target.classList[2] === 'accom-select') {
        // Search through options to find a match between a button value and hotel name
        for (var i = 0; i < data.length; i++) {
          if (data[i].name === e.target.value) {
            selection = i;
            updateSelectionPage();
            break;
          }
        }
      }
    }); // View Button Event Listener ends


    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //     Update selected Hotel page with appropriate data
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    function updateSelectionPage() {

      var checkBfast = document.querySelector('#checkBfast');
      var roomQuantity = document.querySelector('#roomQuantity');

      // hotel name
      $('#hotelTitle').text(data[selection].name);
      // address
      $('#address').text(data[selection].address);
      // Update facilties
      $('#faciltyA').html(data[selection].facilityA + data[selection]
        .facilityIconA);
      $('#faciltyB').html(data[selection].facilityB + data[selection]
        .facilityIconB);
      $('#faciltyC').html(data[selection].facilityC + data[selection]
        .facilityIconC);
      // price
      $('#selectionPrice').text(data[selection].pricePerNight);
      // Rating Section
      $('#ratingQuoteSelect').text(data[selection].reviewQuote);
      $('#reviewCountSelect').text(data[selection].reviewCount);
      $('#ratingNumberSelect').text(data[selection].rating);
      // Images--------------------------------
      $('#hotelHero').css('background-image', data[selection].bgImg);
      // Smaller images
      $('#smlImg1').attr('src', data[selection].mainImg);
      $('#smlImg2').attr('src', data[selection].smlImg1);
      $('#smlImg3').attr('src', data[selection].smlImg2);
      // Booking section
      $('#bfastPrice').text(data[selection].breakfastPrice);
      $('#bfastDescription').text(data[selection].breakfastDescription);
      $('#selectionDescription').text(data[selection].description);
      $('#roomName').text(data[selection].roomName);
      $('#roomDescription').text(data[selection].roomDescription);
      $('#beds').text(data[selection].beds);
      // My booking section
      $('#displayCheckIn').text(userCheckIn);
      $('#displayCheckOut').text(userCheckOut);
      $('#displayGuests').text(guests);
      $('#finalTotal').text(data[selection].pricePerNight * getDateRange());

      // Update My booking section when checkbox is checked
      checkBfast.addEventListener('change', function() {
        if (this.checked) {
          bFastTotal = data[selection].breakfastPrice * getDateRange() *
            guests;
          $('#displayBfast').text(bFastTotal);
          $('#finalTotal').text(data[selection].pricePerNight *
            getDateRange() * roomQuantity.value + bFastTotal);
        } else {
          $('#displayBfast').text('0');
          $('#finalTotal').text(data[selection].pricePerNight *
            getDateRange() * roomQuantity.value);
        }
      });

      // Update My booking section when room quantity is changed
      roomQuantity.addEventListener('change', function() {
        if (roomQuantity.value.change)
          parseInt(roomQuantity.value);
        $('#finalTotal').text(data[selection].pricePerNight *
          getDateRange() * roomQuantity.value + bFastTotal);
      });

    } // Update selection function ends

    // ::::::::::::::::::::
    // Modal controls
    // ::::::::::::::::::
    $('#book').click(function() {
      $('#modalContainer').css('display', 'block');
      $('#modal').css('display', 'block');
    });

    // Close modal and return to home
    $('#finish').click(function() {
      $('#modalContainer').fadeOut();
      $('#modal').fadeOut();
    });
    // close modal to current screen
    $('#closeModal').click(function() {
      $('#modalContainer').fadeOut();
      $('#modal').fadeOut();
    });
    $('#modalContainer').click(function() {
      $('#modalContainer').fadeOut();
      $('#modal').fadeOut();
    });
    // Order fullpage to do a rebuild
    $.fn.fullpage.reBuild();
  } // create Elements ENDS


}()); // iife ENDS
