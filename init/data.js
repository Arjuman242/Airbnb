const sampleListings = [
  {
    title: "Santorini Cliffside Retreat",
    description: "A beautiful place to relax and unwind.",
    price: 375,
    location: "Santorini",
    country: "Greece",
    image: {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      filename: "hotel-image-1.jpg"
    }
  },
  {
    title: "Shimla Snow View Resort",
    description: "A beautiful place to relax and unwind.",
    price: 476,
    location: "Shimla",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1582972236019-ea9a8c7535e8",
      filename: "hotel-image-2.jpg"
    }
  },
  {
    title: "Rajasthan Desert Camp",
    description: "A beautiful place to relax and unwind.",
    price: 129,
    location: "Jaisalmer",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1600525994628-908a1a1d1e1a",
      filename: "hotel-image-3.jpg"
    }
  },
  {
    title: "Luxury City Suite",
    description: "A beautiful place to relax and unwind.",
    price: 410,
    location: "Dubai",
    country: "UAE",
    image: {
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      filename: "hotel-image-4.jpg"
    }
  },
  {
    title: "Beachside Paradise Bali",
    description: "A beautiful place to relax and unwind.",
    price: 220,
    location: "Bali",
    country: "Indonesia",
    image: {
      url: "https://images.unsplash.com/photo-1518544866335-95a6a3f5b0f1",
      filename: "hotel-image-5.jpg"
    }
  },
  {
    title: "Modern Business Hotel",
    description: "A beautiful place to relax and unwind.",
    price: 180,
    location: "Singapore",
    country: "Singapore",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "hotel-image-6.jpg"
    }
  },
  {
    title: "Poolside Oasis",
    description: "A beautiful place to relax and unwind.",
    price: 310,
    location: "Miami",
    country: "USA",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      filename: "hotel-image-7.jpg"
    }
  },
  {
    title: "Mountain Hideaway",
    description: "A beautiful place to relax and unwind.",
    price: 160,
    location: "Swiss Alps",
    country: "Switzerland",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      filename: "hotel-image-8.jpg"
    }
  },
  {
    title: "Rooftop Pool Escape",
    description: "A beautiful place to relax and unwind.",
    price: 270,
    location: "Bangkok",
    country: "Thailand",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "hotel-image-9.jpg"
    }
  },
  {
    title: "Tuscany Villa Stay",
    description: "A beautiful place to relax and unwind.",
    price: 350,
    location: "Tuscany",
    country: "Italy",
    image: {
      url: "https://images.unsplash.com/photo-1517842645767-c639042777db",
      filename: "hotel-image-10.jpg"
    }
  },
  {
    title: "Lake View Lodge",
    description: "A beautiful place to relax and unwind.",
    price: 210,
    location: "Nainital",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1566438480900-0609be27a4be",
      filename: "hotel-image-11.jpg"
    }
  },
  {
    title: "Alaskan Aurora Hotel",
    description: "A beautiful place to relax and unwind.",
    price: 390,
    location: "Fairbanks",
    country: "USA",
    image: {
      url: "https://images.unsplash.com/photo-1518544866335-95a6a3f5b0f1",
      filename: "hotel-image-12.jpg"
    }
  },
  {
    title: "Seaside Cliff Resort",
    description: "A beautiful place to relax and unwind.",
    price: 295,
    location: "Amalfi Coast",
    country: "Italy",
    image: {
      url: "https://images.unsplash.com/photo-1470087167738-6aa485ff65dc",
      filename: "hotel-image-13.jpg"
    }
  },
  {
    title: "Old City Boutique Inn",
    description: "A beautiful place to relax and unwind.",
    price: 150,
    location: "Prague",
    country: "Czech Republic",
    image: {
      url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
      filename: "hotel-image-14.jpg"
    }
  },
  {
    title: "Tropical Island Retreat",
    description: "A beautiful place to relax and unwind.",
    price: 440,
    location: "Maldives",
    country: "Maldives",
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      filename: "hotel-image-15.jpg"
    }
  },
  {
    title: "Himalayan Wellness Spa",
    description: "A beautiful place to relax and unwind.",
    price: 195,
    location: "Rishikesh",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1582972236019-ea9a8c7535e8",
      filename: "hotel-image-16.jpg"
    }
  },
  {
    title: "Jungle Canopy Lodge",
    description: "A beautiful place to relax and unwind.",
    price: 165,
    location: "Amazon",
    country: "Brazil",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      filename: "hotel-image-17.jpg"
    }
  },
  {
    title: "Scandinavian Cabin",
    description: "A beautiful place to relax and unwind.",
    price: 120,
    location: "Oslo",
    country: "Norway",
    image: {
      url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
      filename: "hotel-image-18.jpg"
    }
  },
  {
    title: "Lakeside Palace Stay",
    description: "A beautiful place to relax and unwind.",
    price: 330,
    location: "Udaipur",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1566438480900-0609be27a4be",
      filename: "hotel-image-19.jpg"
    }
  },
  {
    title: "Zen Garden Retreat",
    description: "A beautiful place to relax and unwind.",
    price: 280,
    location: "Kyoto",
    country: "Japan",
    image: {
      url: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
      filename: "hotel-image-20.jpg"
    }
  }
];

  module.exports = { data: sampleListings };