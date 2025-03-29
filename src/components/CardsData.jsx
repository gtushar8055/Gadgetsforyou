const Cardsdata = [
    {
        id: 1,
        rname: "Wireless Earbuds",
        imgdata: "https://i.pinimg.com/736x/0a/4d/8a/0a4d8acd66c1f2b3a8ce49a03ae768fe.jpg",
        address: "Bluetooth 5.3, Noise Cancellation",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "1200+ units sold recently",
        price: 2499,
        rating: "4.5",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 2,
        rname: "Smartwatch",
        imgdata: "https://i.pinimg.com/736x/af/66/8e/af668ebec395c2e3fb4c1b7585330e89.jpg",
        address: "AMOLED Display, Heart Rate Sensor",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "900+ units sold recently",
        price: 3599,
        rating: "4.3",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 3,
        rname: "Gaming Laptop",
        imgdata: "https://i.pinimg.com/736x/2e/45/75/2e45756817ab083796b1656e5dc042da.jpg",
        address: "RTX 4060, 16GB RAM, 144Hz Display",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500+ units sold recently",
        price: 84999,
        rating: "4.7",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 4,
        rname: "Mechanical Keyboard",
        imgdata: "https://i.pinimg.com/736x/ff/10/75/ff1075d23aadfb049887707680ed8eb2.jpg",
        address: "RGB Backlight, Blue Switches",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "750+ units sold recently",
        price: 2999,
        rating: "4.4",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 5,
        rname: "Wireless Mouse",
        imgdata: "https://i.pinimg.com/736x/1a/c6/d2/1ac6d26e4e3996b8e0260e0977f6cc02.jpg",
        address: "Ergonomic, 16000 DPI",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "600+ units sold recently",
        price: 1599,
        rating: "4.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 6,
        rname: "Portable SSD",
        imgdata: "https://i.pinimg.com/736x/38/ae/7c/38ae7c46463eaa171ee1d78577e14b63.jpg",
        address: "1TB, USB 3.2, 1050MB/s Speed",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "450+ units sold recently",
        price: 6999,
        rating: "4.6",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 7,
        rname: "Smart TV",
        imgdata: "https://i.pinimg.com/736x/33/d0/bd/33d0bd71171afacb16873354665fb07a.jpg",
        address: "4K UHD, HDR10, Dolby Atmos",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "350+ units sold recently",
        price: 38999,
        rating: "4.5",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 8,
        rname: "VR Headset",
        imgdata: "https://i.pinimg.com/736x/f0/f5/bb/f0f5bbd2faff20e357080f13d24014ed.jpg",
        address: "6DOF, 120Hz Refresh Rate",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "200+ units sold recently",
        price: 29999,
        rating: "4.3",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 9,
        rname: "Drone Camera",
        imgdata: "https://i.pinimg.com/736x/bf/b3/88/bfb388fd3d522e324b2d0019ba1eb1ec.jpg",
        address: "4K Camera, GPS, 30-Min Flight Time",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "180+ units sold recently",
        price: 49999,
        rating: "4.6",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    }
];

export default Cardsdata;
