type CardProps = {
  Category: string;
  Image: string;
  Gif?: string;
  Price: number;
  Link: string;
};

const list: CardProps[] = [
  {
    Category: "Super Marché",
    Gif: "/public/images/carrousel/gif/superMarché.gif",
    Image: "/public/images/carrousel/images/superMarché.webp",
    Link: "https://www.google.fr/maps/place/Le+Jardin+du+Val/@48.9441737,2.2076124,3a,75y,20h,90t/data=!3m8!1e1!3m6!1sAF1QipMNXu2U9hsFm8spAYbOFsq6PeQ9_IMkbrz0Xp6U!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMNXu2U9hsFm8spAYbOFsq6PeQ9_IMkbrz0Xp6U%3Dw900-h600-k-no-pi0-ya1.1450996398925817-ro0-fo100!7i12000!8i6000!4m9!3m8!1s0x47e666a67a4776df:0xf7827026e7a56a91!8m2!3d48.9447708!4d2.2076821!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F1vk6yjdn?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 900,
  },

  {
    Category: "Restaurant",
    Gif: "/public/images/carrousel/gif/restaurant.gif",
    Image: "/public/images/carrousel/images/restaurant.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.9304035,1.9759995,3a,75y,59.96h,90t/data=!3m7!1e1!3m5!1sAF1QipPNOFXfxxc5uZsyGymWxXWWx10k4Axup0VhYwOo!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPNOFXfxxc5uZsyGymWxXWWx10k4Axup0VhYwOo%3Dw900-h600-k-no-pi0-ya0.0000014465332043300805-ro0-fo100!7i7828!8i3914!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 450,
  },
  {
    Category: "Bar",
    Gif: "/public/images/carrousel/gif/bar.gif",
    Image: "/public/images/carrousel/images/bar.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.9075294,2.2407948,3a,75y,282.3h,90t/data=!3m7!1e1!3m5!1sAF1QipOMNGfepz95SBK0vYD9XyI_M6cD_7ioDpnHCUx1!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOMNGfepz95SBK0vYD9XyI_M6cD_7ioDpnHCUx1%3Dw900-h600-k-no-pi0-ya0.000008105468793928594-ro0-fo100!7i8000!8i4000!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 450,
  },
  {
    Category: "Hôtel Camping",
    Gif: "/public/images/carrousel/gif/camping.gif",
    Image: "/public/images/carrousel/images/camping.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.8527573,2.9297823,3a,75y,357.2h,90t/data=!3m7!1e1!3m5!1sAF1QipMAUcEMq9L3kMHGOArFpELKfGtCzvnbfzD8RNEo!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMAUcEMq9L3kMHGOArFpELKfGtCzvnbfzD8RNEo%3Dw900-h600-k-no-pi0-ya0.0000020996093894609658-ro0-fo100!7i7906!8i3953!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 1200,
  },
  {
    Category: "Bureaux",
    Gif: "/public/images/carrousel/gif/bureau.gif",
    Image: "/public/images/carrousel/images/bureau.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.8127893,2.3262782,3a,75y,319.43h,74.66t/data=!3m7!1e1!3m5!1sAF1QipPm2dBLbtrRfIWYLmzSH0lFMJUPhpzUn-5VLRbd!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPm2dBLbtrRfIWYLmzSH0lFMJUPhpzUn-5VLRbd%3Dw900-h600-k-no-pi15.34007961488227-ya262.3386186374405-ro0-fo100!7i8000!8i4000!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 800,
  },
  {
    Category: "Boulangerie",
    Gif: "/public/images/carrousel/gif/boulangerie.gif",
    Image: "/public/images/carrousel/images/boulangerie.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.8515854,2.2976084,3a,75y,90.8h,68.78t/data=!3m7!1e1!3m5!1sAF1QipMOfVWbo4zF4aBeNtBxOgDkPClSWTpMwxHBtzsw!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMOfVWbo4zF4aBeNtBxOgDkPClSWTpMwxHBtzsw%3Dw900-h600-k-no-pi21.22191845490265-ya3.0343034833373963-ro0-fo100!7i7910!8i3955!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 450,
  },
  {
    Category: "ShowRoom",
    Gif: "/public/images/carrousel/gif/showroom.gif",
    Image: "/public/images/carrousel/images/showroom.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.8443368,2.3286765,3a,75y,15.76h,90t/data=!3m7!1e1!3m5!1sAF1QipMcNTpgC3wT2rskSVofvTkiNTTYjfoxdt9P_OVb!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMcNTpgC3wT2rskSVofvTkiNTTYjfoxdt9P_OVb%3Dw900-h600-k-no-pi0-ya4.592895379573747e-7-ro0-fo100!7i8000!8i4000!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 750,
  },
  {
    Category: "Cave à Vin",
    Gif: "/public/images/carrousel/gif/vin.gif",
    Image: "/public/images/carrousel/images/vin.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.8714938,2.3159494,3a,75y,302.32h,88.49t/data=!3m7!1e1!3m5!1sAF1QipP-RRqboqRJGcYpOCcmRyIIm32FvAeKfC6mfrpC!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP-RRqboqRJGcYpOCcmRyIIm32FvAeKfC6mfrpC%3Dw900-h600-k-no-pi1.5056874597674152-ya55.26783085986304-ro0-fo100!7i7898!8i3949!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 450,
  },
  {
    Category: "Spa",
    Gif: "/public/images/carrousel/gif/spa.gif",
    Image: "/public/images/carrousel/images/spa.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.912807,2.0001873,3a,75y,338.11h,90t/data=!3m7!1e1!3m5!1sAF1QipO-YavyIgjt3pzRb012BuDd721JYRM2JUFfGyyo!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO-YavyIgjt3pzRb012BuDd721JYRM2JUFfGyyo%3Dw900-h600-k-no-pi0-ya0.0000015625000173713488-ro0-fo100!7i8000!8i4000!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 650,
  },
  {
    Category: "Médecin",
    Gif: "/public/images/carrousel/gif/dentiste.gif",
    Image: "/public/images/carrousel/images/dentiste.webp",
    Link: "https://www.google.fr/maps/place/Dentiste+Ohana+Gabriel-implant+Esth%C3%A9tique+Dentaire/@48.8939438,2.2507529,3a,75y,114.19h,71.15t/data=!3m8!1e1!3m6!1sAF1QipNVmAg_df48eORO1kDRLR-WXWVq8ZFcTbFob_v3!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNVmAg_df48eORO1kDRLR-WXWVq8ZFcTbFob_v3%3Dw900-h600-k-no-pi18.848702891621627-ya29.94320743334545-ro0-fo100!7i8000!8i4000!4m9!3m8!1s0x47e66508cc4eb2ad:0xeff0fa71ea346d15!8m2!3d48.8941412!4d2.2507048!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F1tf3yp9x?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 550,
  },
  {
    Category: "Boucherie / Traiteur",
    Gif: "/public/images/carrousel/gif/boucherie.gif",
    Image: "/public/images/carrousel/images/boucherie.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.833798,2.330332,3a,75y,92.49h,69.35t/data=!3m7!1e1!3m5!1sAF1QipOWyiNFpCBc-Xb7jSiuVZHh4AAx3Cd1b8ulyS_M!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOWyiNFpCBc-Xb7jSiuVZHh4AAx3Cd1b8ulyS_M%3Dw900-h600-k-no-pi20.65364738719191-ya324.4378038820158-ro0-fo100!7i8000!8i4000!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 450,
  },
  {
    Category: "Yoga",
    Gif: "/public/images/carrousel/gif/yoga.gif",
    Image: "/public/images/carrousel/images/yoga.webp",
    Link: "https://www.google.fr/maps/contrib/116561875341836983696/photos/@48.8833092,2.304335,3a,75y,339.9h,90t/data=!3m7!1e1!3m5!1sAF1QipN_R3jfFEI6oIhVE-IDlAswILYb9vywo_tRtocM!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN_R3jfFEI6oIhVE-IDlAswILYb9vywo_tRtocM%3Dw900-h600-k-no-pi0-ya359.9999921875-ro0-fo100!7i7932!8i3966!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
    Price: 550,
  },
];

export default list;
