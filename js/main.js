console.log("AURORA Fashion Loaded");
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        products.forEach(product => {

            if (
                filter === "all" ||
                product.classList.contains(filter)
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});

/* QUICK VIEW */

const modal =
    document.querySelector(".quick-modal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalPrice =
    document.getElementById("modalPrice");

const closeModal =
    document.querySelector(".close-modal");

const quickButtons =
    document.querySelectorAll(".quick-view");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".product-card");

        const image =
            card.querySelector("img").src;

        const title =
            card.querySelector("h3").textContent;

        const price =
            card.querySelector(".price").textContent;

        modalImage.src = image;
        modalTitle.textContent = title;
        modalPrice.textContent = price;

        modal.style.display = "flex";

    });

});

if(closeModal){

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

} 

/* PRODUCT PAGE DATA */

const productsData = {

    tee: {
        title: "Aurora Essential Tee",
        price: "₹1,299",
        image: "image/shop/tee.jpg",
        description: "Premium cotton everyday t-shirt designed for comfort and timeless style."
    },

    shirt: {
        title: "Classic Linen Shirt",
        price: "₹1,899",
        image: "image/shop/shirt.jpg",
        description: "Breathable linen shirt perfect for summer and smart casual wear."
    },

    hoodie: {
        title: "Urban Hoodie",
        price: "₹2,499",
        image: "image/shop/hoodie.jpg",
        description: "Oversized premium hoodie built for comfort and modern streetwear."
    },

    blazer: {
        title: "Premium Blazer",
        price: "₹3,499",
        image: "image/shop/blazer.jpg",
        description: "Elegant blazer crafted with luxury fabrics and tailored fitting."
    },

    polo:{
    title:"Luxury Polo Shirt",
    price:"₹1,999",
    image:"image/shop/polo.jpg",
    description:"Premium polo shirt crafted for modern elegance."
},

handbag:{
    title:"Signature Handbag",
    price:"₹4,299",
    image:"image/shop/handbag.jpg",
    description:"Luxury handbag with timeless premium styling."
},

sneakers:{
    title:"Classic Sneakers",
    price:"₹2,999",
    image:"image/shop/sneakers.jpg",
    description:"Comfortable premium sneakers for everyday wear."
},

watch:{
    title:"Luxury Watch",
    price:"₹5,999",
    image:"image/shop/watch.jpg",
    description:"Elegant luxury watch designed for modern professionals."
},

jeans:{
    title:"Relaxed Fit Jeans",
    price:"₹2,399",
    image:"image/shop/jeans.jpg",
    description:"Relaxed fit denim built for comfort and style."
},

dress:{
    title:"Elegant Dress",
    price:"₹3,299",
    image:"image/shop/dress.jpg",
    description:"Elegant dress crafted for special occasions."
},

totebag:{
    title:"Minimal Tote Bag",
    price:"₹2,699",
    image:"image/shop/totebag.jpg",
    description:"Minimalist tote bag with premium materials."
},

jacket:{
    title:"Modern Jacket",
    price:"₹3,799",
    image:"image/shop/jacket.jpg",
    description:"Modern luxury jacket designed for everyday sophistication."
}

};

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

if (
    productId &&
    productsData[productId]
) {

    document.getElementById("productTitle").textContent =
        productsData[productId].title;

    document.getElementById("productPrice").textContent =
        productsData[productId].price;

    document.getElementById("productDescription").textContent =
        productsData[productId].description;

    document.getElementById("mainImage").src =
        productsData[productId].image;
}