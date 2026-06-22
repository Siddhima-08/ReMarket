const params = new URLSearchParams(window.location.search);

const product = params.get("product");

const products = {

    iphone:{

        name:"iPhone 17",

        price:"₹65,000",

        category:"Electronics",

        condition:"Like New",

        description:"iPhone 17 with charger and box.",

        seller:"XYZ Store",

        image:"https://www.myimaginestore.com/media/catalog/product/cache/88160a44f062342c33c0de95969b1545/m/g/mgfe4_1.jpeg"

    },

    table:{

        name:"Study Table",

        price:"₹3,000",

        category:"Furniture",

        condition:"Good",

        description:"Wooden study table in excellent condition.",

        seller:"ABC Furniture",

        image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlw9WgDycTzOcpac2bE6OZ8lcu9ivtoUhozFHt_z9N-YyNeV3ZGZLTQ79_V658ifrFhypU6v_78vSjiqnY51ovoFtZuKPGNjCjz8Hz60YWfyi3cOm6yvDoAA"

    },

    book:{

        name:"Python Books",

        price:"₹600",

        category:"Books",

        condition:"Like New",

        description:"Python programming books for beginners.",

        seller:"Book Store",

        image:"https://m.media-amazon.com/images/I/810g00EIY8L._UF1000,1000_QL80_.jpg"

    },

    laptop:{

        name:"HP Victus 15",

        price:"₹59,000",

        category:"Laptop",

        condition:"Excellent",

        description:"Gaming laptop with high performance.",

        seller:"HP Store",

        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKr0HauQWlxEJQCWWsPjNMoy-ZXWpgly_fISfQbgR7sAlNBVnABMOBED8MRVZOVtedeAKPg6oaR_Or7VviU-RfDx9fUz5o5A1YmYc4n1qbjUJKwLGp58EK4ztuL-A9&usqp=CAc"

    },

    guitar:{

        name:"Acoustic Guitar",

        price:"₹9,000",

        category:"Musical Instrument",

        condition:"Like New",

        description:"Professional acoustic guitar.",

        seller:"Music World",

        image:"https://cdn.shopaccino.com/procraftindia/products/mini-sr-2-449248344144994_l.jpg?v=704"

    },

    sofa:{

        name:"Sofa",

        price:"₹25,000",

        category:"Furniture",

        condition:"Good",

        description:"Comfortable 3-seater sofa.",

        seller:"Furniture Hub",

        image:"https://www.nicepng.com/png/detail/923-9230147_sofa-png-image-png-images-of-sofa-set.png"

    },

    dumbbell:{

        name:"7kg Steel Dumbbell",

        price:"₹2,500",

        category:"Fitness",

        condition:"Brand New",

        description:"7kg steel dumbbell for home workouts.",

        seller:"Fitness Store",

        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa430r4z-b8bh8d6JqVgSagVHQQll6G_P5dIWoHFQusA&s=10"

    },

    redmi:{

        name:"Redmi Note 15 5G",

        price:"₹25,000",

        category:"Mobile",

        condition:"Brand New",

        description:"Latest Redmi smartphone.",

        seller:"Mi Store",

        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsg7vs9iS8vAUY2IK070gUXlanUwzbYMomg&s"

    },

    //Mobiles

    iphone2:{

        name:"iPhone 15",
     
        price:"₹55,000",
     
        category:"Mobile",
     
        condition:"Like New",
     
        description:"iPhone 15 is in excellent condition.",
     
        seller:"Apple Store",
     
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6mkFtCHcnvG_55fRC912F9NAn-5YnQXztw&s"
     
     },
     
    samsung:{

        name:"Samsung S25",
     
        price:"₹45,000",
     
        category:"Mobile",
     
        condition:"Like New",
     
        description:"Samsung S25 in excellent condition.",
     
        seller:"Samsung Store",
     
        image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPJpx9EdoFGmWAn0d0B36jtxIT8MiQ-RKtNuO60UHydKsrWGXOIHqJaCPY4OXWiINxq4BywOzJq_KpS5jKV8lHeP3mqTWRDkv19M_VDZJR2HwoaV--A68sa0WZ11ozZj4UcedmaBJOc0Y&usqp=CAc"
     
     },


     vivo:{

        name:"Vivo Y31 5g",
     
        price:"₹15,000",
     
        category:"Mobile",
     
        condition:"Like New",
     
        description:"Vivo Y31 is in excellent condition.",
     
        seller:"Vivo Store",
     
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGHBNZUTRZ3wP530DdYbMUDsFys0g5LZptNM1baGvS8uxA3oZbqxLNmfJU3gW1SbYdu4CEZRIEgKbjNtoJleD_cdpbIGZSEWZSTgR5ypVXVHgOZuK5qQ-4"
     
     },

     realme:{

        name:"Realme 16 pro",
     
        price:"₹35,000",
     
        category:"Mobile",
     
        condition:"Like New",
     
        description:"Reakme 16 pro in excellent condition.",
     
        seller:"Realme Store",
     
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLQqdiMyifCY8ClhCIKWCOVgD0DjwHFMygwT4Y2sx89aHtpHBI2BwKbwAHMLwMFgqczDh5jkqEDpOhxo5zUm4r8gadA0AF-GqMLc3yA7VmLenk7S-KDc5yJOuIb4CWgNr9YWUZew&usqp=CAc"
     
     },

     //Books

     java:{

        name:"Java Book",
     
        price:"₹450",
     
        category:"Books",
     
        condition:"Like New",
     
        description:"Java Book for learning Java language.",
     
        seller:"Rama Book Store",
     
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSq7srEMbZhFpP5-Ue5GmI9Lgsy6VUxk5AzruRyrIhsg8ekJDCqSnSmeBxwioRN9cmYzuXeDY1KLBhAd_buJzOqD6NHLwUeenmWwmKZ9q73ju64WvSbJnJhPGbi873QU9DKjvaxLgYUPw&usqp=CAc"
     
     },

     dsa:{

        name:"DSA Book",
     
        price:"₹750",
     
        category:"Books",
     
        condition:"Used",
     
        description:"Book for learing Data Science and Algorithm.",
     
        seller:"Arvind Store",
     
        image:"https://d24f1whwu8r3u4.cloudfront.net/assets/book-covers/dsa-460d6841c2af7be347922d3d151987862d14b7f12d6c5caba28df01dbb7da687.png"
     
     },

     js:{

        name:"JavaScript Book",
     
        price:"₹500",
     
        category:"Books",
     
        condition:"Used",
     
        description:"Best book for learning JavaScript for college students.",
     
        seller:"Friends Book Store",
     
        image:"https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
     
     },

     harry:{

        name:"Harry Potter Books Collection",
     
        price:"₹1500",
     
        category:"Books",
     
        condition:"Like New",
     
        description:"Read Harry Potter to dive into the world of magic.",
     
        seller:"Fairytale Store",
     
        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTStfJk93ciTNW_G2GwN89ZLihEpGrIhjWpCFaRiYDwygWxFOr7GgjmH3CUGPXud8-u8c4hkKzY_T1jCzYnYkLFmUmickGoZBxhB5a3nFAy&usqp=CAc"
     
     },

     stories:{

        name:"Bedtime Stories for Kids",
     
        price:"₹330",
     
        category:"Books",
     
        condition:"Used",
     
        description:"Stories for Kids.",
     
        seller:"Michal Store",
     
        image:"https://images-platform.99static.com//08iUiUyrg0hXkVuGlG0cGz5PkSU=/0x0:2040x2040/fit-in/500x500/99designs-contests-attachments/145/145683/attachment_145683683"
     
     },

     //Furniture

     study:{

        name:"Study Table",
     
        price:"₹2,500",
     
        category:"Furniture",
     
        condition:"Used",
     
        description:"Comfortable and adjustable chair.",
     
        seller:"Galaxy Store",
     
        image:"https://i.pinimg.com/564x/25/2e/56/252e56413fff24401c49b60746ccd2ed.jpg"
     
     },

     sofa8:{

        name:"8 Seater Sofa with Table",
     
        price:"₹45,000",
     
        category:"Furniture",
     
        condition:"Like New",
     
        description:"Big and stylish for your home.",
     
        seller:"Michal Store",
     
        image:"https://5.imimg.com/data5/SELLER/Default/2023/8/335145861/SR/EF/ZG/92212902/luxury-sofa-set.png"
     
     },

     dinner:{

        name:"Dinner Table with Chair",
     
        price:"₹15,000",
     
        category:"Furniture",
     
        condition:"Used",
     
        description:"Perfect for a family of 4.",
     
        seller:"Wooden Store",
     
        image:"data:image/jpeg;base64,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"
     
     },

     swing:{

        name:"Swing",
     
        price:"₹12,000",
     
        category:"Furniture",
     
        condition:"Used",
     
        description:"Best for garden and terrace.",
     
        seller:"Mohan Store",
     
        image:"https://i.pinimg.com/736x/b9/05/db/b905db9b02ab780227694d2d496a7f56.jpg"
     
     },

     dressing:{

        name:"Dressing Table",
     
        price:"₹5,000",
     
        category:"Furniture",
     
        condition:"Used",
     
        description:"Big size mirror and storage space is big.",
     
        seller:"Michal Store",
     
        image:"https://www.om-home-garden.com/cdn/shop/files/Flora_vintage_cosmetic_able_with_chair.jpg?v=1775925780&width=2048"
     
     },

     almirah:{

        name:"Wooden Almirah",
     
        price:"₹8,000",
     
        category:"Furniture",
     
        condition:"Like New",
     
        description:"Mirror with spacious space.",
     
        seller:"House of Wood Store",
     
        image:"https://5.imimg.com/data5/SELLER/Default/2024/7/435136631/UZ/OW/YT/61563095/modern-bedroom-wooden-almirah.jpg"
     
     },

     //Laptop

     mac:{

      name:"Apple M1 Macbook Air",

      price:"₹60,000",

      category:"Laptop",

      condition:"Excellent",

      description:"For office and college purpose.",

      seller:"Apple Store",

      image:"https://www.sathya.store/img/product/9Pzdp0QVx5jg820J.png"

     },

     hp:{

      name:"HP Amid Ryzen",

      price:"₹45,000",

      category:"Laptop",

      condition:"Excellent",

      description:"For personal use.",

      seller:"HP Store",

      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTP1UYw9hi9k8xvkLb0MU8iauXbAg8hSpRItUKD4loEaP5n8tw4OgQktioHItRKDRgbQ-xYUN_OrUYH0B208BG0QAlhUKdb6Ys_IcZ7OR4&usqp=CAc"

     },

     lenovo:{

      name:"Lenovo V15",

      price:"₹50,000",

      category:"Laptop",

      condition:"Excellent",

      description:"Gaming laptop with high performance.",

      seller:"Lenovo Store",

      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwuZtrTr6yQG7JGNklDF9HwlAz1iDrMFZxx7lU51cbORYicCNIdW8JP0BlwgtFuTwSnfWLx3PlG3bFyhbnCny3V7Pnmc3AkScRqemPDifIGrMOGZ4KYGznoQ-M1M5vfQ&usqp=CAc"

     },

     dell:{

      name:"Dell 15",

      price:"₹65,000",

      category:"Laptop",

      condition:"Excellent",

      description:"Intel 7 with 8GB Ram.",

      seller:"Dell Store",

      image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8WaxhcCt8D0_Ud8jL9vyatv6N0pO9ZGCw_EwoRUz-tlS8cuP-YiKWGujxPAcgyOWAQhsELSDOAe_i2EuRdrnNbPEu-izBHTE0YRHexa39pbc0SbH4GY44xiWb__-3zQ4tq2hJXUZH1NY&usqp=CAc"

     },

     asus:{

      name:"Asus VivoBook 15",

      price:"₹90,000",

      category:"Laptop",

      condition:"Excellent",

      description:"Gaming laptop with high performance.",

      seller:"Asus Store",

      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSB-cxZT9DpgphvJKyqHYeUvclvgSxQgi_MMObolKJrtZE_MWU_nFzFTbaO5r03eljWa6e0EmreElEC5kspfAPMoZgsChHldq18wmSytJkI_EtbN_NvYBTeZh9UcUHlS9EYAN5LCPAJdQ&usqp=CAc"

     },

     //Musical Instruments

     aco:{

      name:"Acoustic Guitar",

      price:"₹6,000",

      category:"Musical Instrument",

      condition:"Like New",

      description:"Professional acoustic guitar.",

      seller:"Music World",

      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMJj3nbmkr37J_xwZ0PikIoiPaNfb4KGwkLITf-hqWYrKDf-MU8jrZ-Z7EJCnqo7sB7y6k7Y5S0NJdBNHRfyw_Na8abb5-SILSoaDeclSIZnS_LL3u7rVu"

  },

  violin:{

   name:"Violin",

   price:"₹4,500",

   category:"Musical Instrument",

   condition:"Used",

   description:"Professional violin.",

   seller:"Songs World",

   image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_Im3JBqfqR0Pwfqmjxf8MDyViI27TKGujIjLk3Zr8aBM7f3YeUC72kjNIiv7ltm5vX_xP_CbE_zZMH5oWI3cKX2KpfoIfIlp_UhZc4YRm7OSCH4nr6cvbyg"

},

piano:{

   name:"Piano",

   price:"₹2,000",

   category:"Musical Instrument",

   condition:"Like New",

   description:"Professional piano.",

   seller:"Music World",

   image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRpCuRr4V5EXOi4HSgTeJDhcHSW4vN6eiNzw_e7T3i18i5Vqn62VvS7nZxQFhY53mxE56qlvzaqleGfvQ1Jw7EJf0NO2DDMfzGDgOHplcGIIj7ii2AlDSsbmQ"

},

harm:{

   name:"Harmonium",

   price:"₹5,000",

   category:"Musical Instrument",

   condition:"Used",

   description:"Portable keyboard instrument.",

   seller:"Sa Re Ga Ma World",

   image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3-4D9ed7uwP1SCDhoXbCqY5JV5I0Us03sDMOj8mhw_kDoJR-6EQjnOnFNVVoI3MVCsbHkQqeMRrvM6s0x8aZyIeKBxjhVRY5MblMZUS4K0YxCyEaHhtid"

},

tabla:{

   name:"Tabla Drums",

   price:"₹1,500",

   category:"Musical Instrument",

   condition:"Like New",

   description:"Light weight, easy to carry.",

   seller:"Music World",

   image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSG2LiLtGNnaI9-pTsTbYiFX6ft_AZKHtAzLCnpmqwD_qzGEE6YOOff_9GRUFmWE9BDSTNPrTwnuTPldiWRMqqHnREdy5aGh8KMqbFYBGQR"

},

flute:{

   name:"Flute",

   price:"₹330",

   category:"Musical Instrument",

   condition:"Like New",

   description:"Professional flute.",

   seller:"Music World",

   image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEmbPrc9r9YU-JAI33GdigcVRGGjGXxIfKqdVJSFzHb7tYEBfOgS4IFJlgdznDRnCZPBhKnEhdOF8cSA4V99YX8fKHOj-ESQ"

},

//Fitness

dumb:{

   name:"5kg Rubber Dumbbell",

   price:"₹750",

   category:"Fitness",

   condition:"Brand New",

   description:"5kg rubber dumbbell for home workouts.",

   seller:"Fitness Store",

   image:"data:image/jpeg;base64,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"

},

rods:{

   name:"Stainless Steel Barbel Rods",

   price:"₹6,500",

   category:"Fitness",

   condition:"Used",

   description:"Different types of rods.",

   seller:"Fitness Store",

   image:"https://5.imimg.com/data5/SELLER/Default/2022/9/KS/MA/AA/13391246/olympic-barbel-rods-500x500.png"

},

cycle:{

   name:"Cardio Cycle",

   price:"₹2,000",

   category:"Fitness",

   condition:"Brand New",

   description:"Cardio cycle for workouts.",

   seller:"Fitness Store",

   image:"data:image/jpeg;base64,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"

},

plate:{

   name:"Weight Plates",

   price:"₹5,000",

   category:"Fitness",

   condition:"Used",

   description:"All kind of weights available.",

   seller:"Fitness Store",

   image:"data:image/jpeg;base64,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"

},

treadmill:{

   name:"5kg Steel Dumbbell",

   price:"₹10,500",

   category:"Fitness",

   condition:"Brand New",

   description:"Max speed controled treadmill for workouts.",

   seller:"Fitness Store",

   image:"data:image/jpeg;base64,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"

},

lats:{

   name:"Lats Pull Down Machine",

   price:"₹15,000",

   category:"Fitness",

   condition:"Brand New",

   description:"Machine for a focused workout of lats.",

   seller:"Fitness Store",

   image:"data:image/jpeg;base64,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"

},


};

const item = products[product];

if(item){

document.getElementById("productImage").src = item.image;

document.getElementById("productName").textContent = item.name;

document.getElementById("productPrice").textContent = item.price;

document.getElementById("productCategory").textContent = item.category;

document.getElementById("productCondition").textContent = item.condition;

document.getElementById("productDescription").textContent = item.description;

document.getElementById("productSeller").textContent = item.seller;

}
console.log(product);
console.log(item);