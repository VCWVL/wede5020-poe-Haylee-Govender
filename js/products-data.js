const allProducts = [
    {
        id: 1,
        name: "Adidas Jersey",
        price: 249.99,
        image: "_images/acloth_m1.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Adidas tracksuit",
        price: 499.99,
        image: "_images/acloth_m2.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Adidas Tracksuit",
        price: 499.99,
        image: "_images/acloth_m3.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "Adidas Shorts",
        price: 179.99,
        image: "_images/acloth_m4.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Adidas Shorts",
        price: 199.99,
        image: "_images/acloth_m5.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 6,
        name: "Adidas Shorts",
        price: 199.99,
        image: "_images/acloth_m6.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 7,
        name: "Adidas Jacket",
        price: 249.99,
        image: "_images/acloth_m7.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 8,
        name: "Adidas T-Shirt",
        price: 219.99,
        image: "_images/acloth_m8.jpg",
        gender: "men",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 9,
        name: "Adidas Dress",
        price: 299.99,
        image: "_images/acloth_w1.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 10,
        name: "Adidas Skirt",
        price: 249.99,
        image: "_images/acloth_w2.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 11,
        name: "Adidas Top",
        price: 219.99,
        image: "_images/acloth_w3.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        name: "Adidas Top",
        price: 219.99,
        image: "_images/acloth_w4.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 13,
        name: "Adidas Top",
        price: 219.99,
        image: "_images/acloth_w5.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 14,
        name: "Adidas Jacket",
        price: 249.99,
        image: "_images/acloth_w6.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 15,
        name: "Adidas Pants",
        price: 219.99,
        image: "_images/acloth_w7.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 16,
        name: "Adidas Shorts and Top set",
        price: 299.99,
        image: "_images/acloth_w8.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 17,
        name: "Adidas Tracksuit",
        price: 299.99,
        image: "_images/acloth_w9.jpg",
        gender: "women",
        brand: "adidas",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 18,
        name: "Adidas shoe",
        price: 499.99,
        image: "_images/adidas_m1.jpg",
        gender: "men",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 19,
        name: "Adidas shoe",
        price: 1499.99,
        image: "_images/adidas_m2.jpg",
        gender: "men",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 20,
        name: "Adidas shoe",
        price: 799.99,
        image: "_images/adidas_m3.jpg",
        gender: "men",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 21,
        name: "Adidas shoe",
        price: 899.99,
        image: "_images/adidas_m4.jpg",
        gender: "men",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 22,
        name: "Adidas shoe",
        price: 899.99,
        image: "_images/adidas_m5.jpg",
        gender: "men",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 23,
        name: "Adidas sandals",
        price: 499.99,
        image: "_images/adidas_m6.jpg",
        gender: "men",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 24,
        name: "Adidas shoe",
        price: 899.99,
        image: "_images/adidas_w1.jpg",
        gender: "women",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 25,
        name: "Adidas shoe",
        price: 899.99,
        image: "_images/adidas_w2.jpg",
        gender: "women",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 26,
        name: "Adidas shoe",
        price: 899.99,
        image: "_images/adidas_w3.jpg",
        gender: "women",
        brand: "adidas",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 27,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanm1.jpg",
        gender: "men",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 28,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanm2.jpg",
        gender: "men",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 29,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanm3.jpg",
        gender: "men",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 30,
        name: "Adidas Hat",
        price: 299.99,
        image: "_images/asc_am1.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 31,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanm5.jpg",
        gender: "men",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 32,
        name: "Adidas Hand Bands",
        price: 119.99,
        image: "_images/asc_am3.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 33,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanw2.jpg",
        gender: "women",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 34,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanw3.jpg",
        gender: "women",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 35,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanw4.jpg",
        gender: "women",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 36,
        name: "Air Jordan shoe",
        price: 1999.99,
        image: "_images/air_jordanw5.jpg",
        gender: "women",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 37,
        name: "Adidas wirst bands",
        price: 299.99,
        image: "_images/asc_am4.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 38,
        name: "Adidas Cap",
        price: 399.99,
        image: "_images/asc_am5.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 39,
        name: "Adidas Cap",
        price: 399.99,
        image: "_images/asc_am6.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 40,
        name: "Adidas head bands",
        price: 199.99,
        image: "_images/asc_am7.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 41,
        name: "Air Jordan Cap",
        price: 799.99,
        image: "_images/asc_jm1.jpg",
        gender: "men",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 42,
        name: "Air Jordan Cap",
        price: 799.99,
        image: "_images/asc_jm2.jpg",
        gender: "men",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 43,
        name: "Air Jordan Head Band",
        price: 399.99,
        image: "_images/asc_jm3.jpg",
        gender: "men",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 44,
        name: "Air Jordan Head Band",
        price: 399.99,
        image: "_images/asc_jm4.jpg",
        gender: "men",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 45,
        name: "Air Jordan Hat",
        price: 399.99,
        image: "_images/asc_jm5.jpg",
        gender: "all",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 46,
        name: "Air Jordan Bag",
        price: 1199.99,
        image: "_images/asc_jm6.jpg",
        gender: "all",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 47,
        name: "Air Jordan Bag",
        price: 1199.99,
        image: "_images/asc_jm7.jpg",
        gender: "all",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 48,
        name: "Nike Cap",
        price: 399.99,
        image: "_images/asc_nm1.jpg",
        gender: "men",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 49,
        name: "Nike Wirst Bands",
        price: 399.99,
        image: "_images/asc_nm2.jpg",
        gender: "men",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 50,
        name: "Nike Wirst Bands",
        price: 399.99,
        image: "_images/asc_nm3.jpg",
        gender: "men",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 51,
        name: "Nike Head Band",
        price: 399.99,
        image: "_images/asc_nm4.jpg",
        gender: "men",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 52,
        name: "Nike Hand Bands",
        price: 129.99,
        image: "_images/asc_nm5.jpg",
        gender: "all",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 53,
        name: "Nike Socks 3 pairs",
        price: 299.99,
        image: "_images/asc_nm6.jpg",
        gender: "all",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 54,
        name: "Nike Cap",
        price: 499.99,
        image: "_images/asc_nm7.jpg",
        gender: "women",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 55,
        name: "Nike Cap",
        price: 499.99,
        image: "_images/asc_nm8.jpg",
        gender: "women",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 56,
        name: "Nike Wirst Bands",
        price: 299.99,
        image: "_images/asc_nm9.jpg",
        gender: "women",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 57,
        name: "Nike Bag",
        price: 799.99,
        image: "_images/asc_nm10.jpg",
        gender: "all",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 58,
        name: "Puma wirst bands",
        price: 199.99,
        image: "_images/asc_pm4.jpg",
        gender: "all",
        brand: "puma",
        category: "accessories",
        sizes: null
    },
    {
        id: 59,
        name: "Puma Bag",
        price: 599.99,
        image: "_images/asc_pm5.jpg",
        gender: "all",
        brand: "puma",
        category: "accessories",
        sizes: null
    },
    {
        id: 60,
        name: "Puma Bag",
        price: 699.99,
        image: "_images/asc_pm6.jpg",
        gender: "all",
        brand: "puma",
        category: "accessories",
        sizes: null
    },
    {
        id: 61,
        name: "Nike shorts",
        price: 499.99,
        image: "_images/cloth_m1.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 62,
        name: "Nike shorts",
        price: 499.99,
        image: "_images/cloth_m2.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 63,
        name: "Nike Tracksuit",
        price: 999.99,
        image: "_images/cloth_m3.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 64,
        name: "Nike Pants",
        price: 599.99,
        image: "_images/cloth_m5.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 65,
        name: "Nike shorts and t-shirt",
        price: 599.99,
        image: "_images/cloth_m6.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 66,
        name: "Nike T-shirt",
        price: 499.99,
        image: "_images/cloth_m7.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 67,
        name: "Nike shorts and t-shirt",
        price: 599.99,
        image: "_images/cloth_m8.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 68,
        name: "Nike T-shirt",
        price: 499.99,
        image: "_images/cloth_m9.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 69,
        name: "Nike Jersey",
        price: 499.99,
        image: "_images/cloth_w1.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 70,
        name: "Nike Shorts and T-shirt",
        price: 399.99,
        image: "_images/cloth_w2.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 71,
        name: "Nike Air Jordans",
        price: 2999.99,
        image: "_images/air_jordanm4.jpg",
        gender: "all",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 72,
        name: "Nike Air Jordan",
        price: 2449.99,
        image: "_images/air_jordanw1.jpg",
        gender: "all",
        brand: "air jordan",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 73,
        name: "Adidas Hat",
        price: 249.99,
        image: "_images/asc_am2.jpg",
        gender: "all",
        brand: "adidas",
        category: "accessories",
        sizes: null
    },
    {
        id: 74,
        name: "Nike Bag",
        price: 1199.99,
        image: "_images/asc_nm11.jpg",
        gender: "all",
        brand: "nike",
        category: "accessories",
        sizes: null
    },
    {
        id: 75,
        name: "Puma socks",
        price: 399.99,
        image: "_images/asc_pm3.jpg",
        gender: "all",
        brand: "puma",
        category: "accessories",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 76,
        name: "Puma Hat",
        price: 449.99,
        image: "_images/asc_pm2.jpg",
        gender: "women",
        brand: "puma",
        category: "accessories",
        sizes: null
    },
    {
        id: 77,
        name: "Nike Tracksuit",
        price: 799.99,
        image: "_images/cloth_m4.jpg",
        gender: "men",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 78,
        name: "Nike Jacket",
        price: 549.99,
        image: "_images/cloth_w3.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 79,
        name: "Nike Shirt",
        price: 249.99,
        image: "_images/cloth_w4.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 80,
        name: "Nike Shorts",
        price: 449.99,
        image: "_images/cloth_w5.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 81,
        name: "Nike Top",
        price: 449.99,
        image: "_images/cloth_w6.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 82,
        name: "Nike Skirt",
        price: 449.99,
        image: "_images/cloth_w7.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 83,
        name: "Nike Dress",
        price: 549.99,
        image: "_images/cloth_w8.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 84,
        name: "Nike Vest",
        price: 449.99,
        image: "_images/cloth_w9.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 85,
        name: "Nike Training Pants",
        price: 599.99,
        image: "_images/cloth_w10.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 86,
        name: "Nike Dress",
        price: 699.99,
        image: "_images/cloth_w11.jpg",
        gender: "women",
        brand: "nike",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 87,
        name: "Air Jordan T-Shirt",
        price: 799.99,
        image: "_images/jcloth_m1.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 88,
        name: "Air Jordan T-Shirt",
        price: 799.99,
        image: "_images/jcloth_m2.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 89,
        name: "Air Jordan Shorts",
        price: 899.99,
        image: "_images/jcloth_m3.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 90,
        name: "Air Jordan Shorts",
        price: 899.99,
        image: "_images/jcloth_m4.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 91,
        name: "Air Jordan Tracksuit",
        price: 1999.99,
        image: "_images/jcloth_m5.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 92,
        name: "Air Jordan Jersey",
        price: 1799.99,
        image: "_images/jcloth_m6.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 93,
        name: "Air Jordan T-Shirt",
        price: 799.99,
        image: "_images/jcloth_m1.jpg",
        gender: "men",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 94,
        name: "Air Jordan Jersey",
        price: 999.99,
        image: "_images/jcloth_w1.jpg",
        gender: "women",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 95,
        name: "Air Jordan Shirt",
        price: 799.99,
        image: "_images/jcloth_w2.jpg",
        gender: "women",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 96,
        name: "Air Jordan Shirt",
        price: 799.99,
        image: "_images/jcloth_w3.jpg",
        gender: "women",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 97,
        name: "Air Jordan Vest",
        price: 599.99,
        image: "_images/jcloth_w4.jpg",
        gender: "women",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 98,
        name: "Air Jordan Vest",
        price: 599.99,
        image: "_images/jcloth_w5.jpg",
        gender: "women",
        brand: "air jordan",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 99,
        name: "Air Jordan Cap",
        price: 1229.99,
        image: "_images/jordan_2.jpeg",
        gender: "men",
        brand: "air jordan",
        category: "accessories",
        sizes: null
    },
    {
        id: 100,
        name: "Nike shoes",
        price: 1999.99,
        image: "_images/nike_men1.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 101,
        name: "Nike Bmw shoes",
        price: 2999.99,
        image: "_images/nike_men2.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 102,
        name: "Nike shoes",
        price: 1999.99,
        image: "_images/nike_men3.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 103,
        name: "Nike shoes",
        price: 1599.99,
        image: "_images/nike_men4.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 104,
        name: "Nike shoes",
        price: 2599.99,
        image: "_images/nike_men5.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 105,
        name: "Nike shoes",
        price: 2199.99,
        image: "_images/nike_men6.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 106,
        name: "Nike shoes",
        price: 2199.99,
        image: "_images/nike_men7.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 107,
        name: "Nike shoes",
        price: 2599.99,
        image: "_images/nike_men8.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 108,
        name: "Nike shoes",
        price: 2499.99,
        image: "_images/nike_men9.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 109,
        name: "Nike shoes",
        price: 2299.99,
        image: "_images/nike_men10.jpg",
        gender: "men",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 110,
        name: "Nike shoes",
        price: 2299.99,
        image: "_images/nike_women1.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 111,
        name: "Nike shoes",
        price: 2199.99,
        image: "_images/nike_women2.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 112,
        name: "Nike shoes",
        price: 2599.99,
        image: "_images/nike_women3.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 113,
        name: "Nike shoes",
        price: 2299.99,
        image: "_images/nike_women4.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 114,
        name: "Nike shoes",
        price: 2599.99,
        image: "_images/nike_women5.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 115,
        name: "Nike shoes",
        price: 2299.99,
        image: "_images/nike_women6.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 116,
        name: "Nike shoes",
        price: 2699.99,
        image: "_images/nike_women7.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 117,
        name: "Nike shoes",
        price: 2799.99,
        image: "_images/nike_women8.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 118,
        name: "Nike shoes",
        price: 2499.99,
        image: "_images/nike_women9.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 119,
        name: "Nike shoes",
        price: 2299.99,
        image: "_images/nike_women10.jpg",
        gender: "women",
        brand: "nike",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 120,
        name: "Puma T-Shirt",
        price: 999.99,
        image: "_images/pcloth_m1.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 121,
        name: "Puma BMW Golfer",
        price: 1499.99,
        image: "_images/pcloth_m2.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 122,
        name: "Puma T-Shirt",
        price: 599.99,
        image: "_images/pcloth_m3.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 123,
        name: "Puma Shorts",
        price: 799.99,
        image: "_images/pcloth_m4.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 124,
        name: "Puma Shorts",
        price: 799.99,
        image: "_images/pcloth_m5.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 125,
        name: "Puma Jacket",
        price: 1099.99,
        image: "_images/pcloth_m6.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 126,
        name: "Puma Shirt",
        price: 799.99,
        image: "_images/pcloth_m7.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 127,
        name: "Puma Mercdes Shirt",
        price: 1399.99,
        image: "_images/pcloth_m8.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 128,
        name: "Puma Ferrari Golfer",
        price: 1799.99,
        image: "_images/pcloth_m9.jpg",
        gender: "men",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 129,
        name: "Puma Top",
        price: 599.99,
        image: "_images/pcloth_w1.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 130,
        name: "Puma Pants",
        price: 399.99,
        image: "_images/pcloth_w2.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 131,
        name: "Puma Top",
        price: 499.99,
        image: "_images/pcloth_w3.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 132,
        name: "Puma Top",
        price: 299.99,
        image: "_images/pcloth_w4.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 133,
        name: "Puma long sleeve Top",
        price: 799.99,
        image: "_images/pcloth_w5.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 134,
        name: "Puma Top",
        price: 299.99,
        image: "_images/pcloth_w6.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 135,
        name: "Puma Pants",
        price: 399.99,
        image: "_images/pcloth_w7.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 136,
        name: "Puma Dress",
        price: 799.99,
        image: "_images/pcloth_w8.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 137,
        name: "Puma long sleeve Top",
        price: 399.99,
        image: "_images/pcloth_w1.jpg",
        gender: "women",
        brand: "puma",
        category: "clothing",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 138,
        name: "Puma Shoes",
        price: 1299.99,
        image: "_images/puma_1.jpg",
        gender: "all",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 139,
        name: "Puma Cap",
        price: 499.99,
        image: "_images/puma_2.jpg",
        gender: "all",
        brand: "puma",
        category: "accessories",
        sizes: null
    },
    {
        id: 140,
        name: "Puma shoes",
        price: 1599.99,
        image: "_images/puma_men1.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 141,
        name: "Puma AMG shoes",
        price: 1799.99,
        image: "_images/puma_men2.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 142,
        name: "Puma shoes",
        price: 1599.99,
        image: "_images/puma_men3.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 143,
        name: "Puma shoes",
        price: 1199.99,
        image: "_images/puma_men4.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 144,
        name: "Puma shoes",
        price: 1299.99,
        image: "_images/puma_men5.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 145,
        name: "Puma sandals",
        price: 699.99,
        image: "_images/puma_sandalm.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 146,
        name: "Puma sandals",
        price: 249.99,
        image: "_images/puma_sandalm2.jpg",
        gender: "men",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 147,
        name: "Puma sandals",
        price: 699.99,
        image: "_images/puma_sandalw.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 148,
        name: "Puma sandals",
        price: 699.99,
        image: "_images/puma_sandalw2.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 149,
        name: "Puma Shoes",
        price: 999.99,
        image: "_images/puma_women1.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 150,
        name: "Puma Shoes",
        price: 1999.99,
        image: "_images/puma_women2.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 151,
        name: "Puma Shoes",
        price: 1999.99,
        image: "_images/puma_women3.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 152,
        name: "Puma Shoes",
        price: 1299.99,
        image: "_images/puma_women4.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 153,
        name: "Puma Shoes",
        price: 999.99,
        image: "_images/puma_women5.jpg",
        gender: "women",
        brand: "puma",
        category: "footwear",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 183,
        name: "Sambae Adidas Shoe",
        price: 1499.99,
        image: "_images/sambae_m1.jpg",
        gender: "men",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 184,
        name: "Sambae Adidas Shoe",
        price: 1699.99,
        image: "_images/sambae_m2.jpg",
        gender: "men",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 185,
        name: "Sambae Adidas Shoe",
        price: 1399.99,
        image: "_images/sambae_m3.jpg",
        gender: "men",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 186,
        name: "Sambae Adidas Shoe",
        price: 1499.99,
        image: "_images/sambae_m4.jpg",
        gender: "men",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 187,
        name: "Sambae Adidas Shoe",
        price: 1199.99,
        image: "_images/sambae_w1.jpg",
        gender: "women",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 188,
        name: "Sambae Adidas Shoe",
        price: 1799.99,
        image: "_images/sambae_w2.jpg",
        gender: "women",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 189,
        name: "Sambae Adidas Shoe",
        price: 1399.99,
        image: "_images/sambae_w3.jpg",
        gender: "women",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 190,
        name: "Sambae Adidas Shoe",
        price: 1699.99,
        image: "_images/sambae_w4.jpg",
        gender: "women",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
        id: 191,
        name: "Sambae Adidas Shoe",
        price: 1699.99,
        image: "_images/sambae_w6.jpg",
        gender: "women",
        brand: "adidas",
        category: "sambae",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"]
    }
];