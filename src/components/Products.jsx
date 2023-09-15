export const productsData = [
    { id: 1, name: "ANASTASIA Ring", description: "Golden ring with little pearls", price: 1050, categorie: "rings", image: "/images/anastasia-ring.jpg"},
    { id: 2, name: "EMERALD Necklace", description: "Stunning emerald necklace with a golen chain", price: 2000, categorie: "necklaces", image: "/images/emerald-necklace.png"},
    { id: 3, name: "SAPPHIRE Earrings", description: "Elegant sapphire earrings with diamond accents", price: 1500, categorie: "earrings", image: "/images/sapphire-earrings.jpg"},
    { id: 4, name: "DIAMOND Engagement Ring", description: "Sparkling diamond engagement ring in white gold", price: 3000, categorie: "rings", image: "/images/diamond-ring.jpg"},
    { id: 5, name: "PEARL Bracelet", description: "Classic pearl bracelet with a sterling gold clasp", price: 900, categorie: "bracelets", image: "/images/pearl-bracelet.png"},
    { id: 6, name: "TOPAZ Stud Earrings", description: "Delicate topaz stud earrings with a rose gold setting", price: 700, categorie: "earrings", image: "/images/topaz-earring.jpg"},
    { id: 7, name: "RUBY Bracelet", description: "Beautiful ruby bracelet with a golden clasp", price: 1200, categorie: "bracelet", image: "/images/ruby-bracelet.jpg"},
    { id: 8, name: "PEARL Earrings", description: "Classic pearl earrings with a gold setting", price: 370, categorie: "earrings", image: "/images/pearl-earrings.png"},
    { id: 9, name: "SILVER Necklace", description: "Stylish silver necklace with a pendant", price: 500, categorie: "necklaces", image: "/images/silver-necklace.jpg"},
    { id: 10, name: "SAPPHIRE Bracelet", description: "Exquisite sapphire bracelet with diamond accents", price: 1800, categorie: "bracelets", image: "/images/sapphire-bracelet.jpg"},
    { id: 11, name: "DIAMOND Watch", description: "Luxurious diamond-studded watch with a black leather strap", price: 2500, categorie: "bracelet", image: "/images/diamond-watch.jpg"},
    { id: 12, name: "EMERALD Ring", description: "Gorgeous emerald ring set in white gold", price: 900, categorie: "rings", image: "/images/emerald-ring.jpg"},
    { id: 13, name: "TOPAZ Necklace", description: "Dazzling topaz necklace with a silver chain", price: 750, categorie: "necklaces", image: "/images/topaz-necklace.jpg"},
    { id: 14, name: "EMERALD Ring", description: "Gorgeous emerald ring set in white gold", price: 900, categorie: "rings", image: "/images/emerald-ring.jpg"},
    { id: 15, name: "GOLD Bracelet", description: "Elegant gold bracelet with intricate design", price: 1100, categorie: "bracelets", image: "/images/gold-bracelet.png"},
    { id: 16, name: "SILVER Earrings",  description: "Chic silver earrings with a geometric design", price: 280, categorie: "earrings", image: "/images/silver-earrings.jpg"},
    { id: 17, name: "RUBY Ring", description: "Beautiful ruby ring with a vintage setting", price: 1300, categorie: "rings", image: "/images/ruby-ring.jpg"},
    { id: 18, name: "DIAMOND Necklace", description: "Stunning diamond necklace with a platinum chain", price: 3200, categorie: "necklaces", image: "/images/diamond-necklace.jpg"},
    { id: 19, name: "ONYX Earrings", description: "Elegant onyx earrings with a sterling silver setting", price: 380, categorie: "Earrings", image: "/images/onyx-earrings.jpg"},
    { id: 20, name: "SAPPHIRE Necklace", description: "Captivating sapphire necklace with a white gold chain", price: 1250, categorie: "Necklaces", image: "/images/sapphire-necklace.jpg"}
];

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData);
        }, 3000);
    })
}