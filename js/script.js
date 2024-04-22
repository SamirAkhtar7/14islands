let arr = [
  {
    name: "Braded",
    image: "image/083984405d9ada62dc12d3906204cbce014cdf39-1656x1104.webp",
  },
  {
    name: "Proxt",
    image: "image/0a68d432912bca1f276ec5e21f644efd28c20345-1656x1104.webp",
  },
  {
    name: "Primer",
    image: "image/70f24fdbea62271d0b637e8ed25f0e704b847b6b-1656x1104.webp",
  },
  {
    name: "Ploto VR",
    image: "image/76a7cc3eafe45277c8f8f6230acc2a2c7a45a0aa-1656x1104.webp",
  },
  {
    name: "United Nation",
    image: "image/964dc60f9bcda34c246cabff7c5ad4d9e80168c7-1656x1104.webp",
  },
  {
    name: "Google Interland",
    image: "image/99c4e354db9d27f53c2ab55068573012694e71c4-1656x1104.webp",
  },
  {
    name: "Lynexeye",
    image: "image//9a895a711cf09e08c25b829e21f13a7a66456fb2-1656x1104.webp",
  },
  {
    name: "Myriad",
    image: "image/a71b48b9db417211ca5ede64200aa2cb1669e803-1656x1104.webp",
  },
  {
    name: "Quantun Wallet",
    image:
      "image/64e6a941e96872c3eb90c0f1b7614dfcb4f8a64a-1656x1104.webp",
  },
  {
    name: "Poly",
    image: "image/c627e47758e770b3cb3351f30b18899101f98a2f-1656x1104.webp",
  },
  {
    name: "Blobmater",
    image: "image/f3103654281204f251cc304156b0970492d31572-1656x1104.webp",
  },
  {
    name: "GOALS",
    image: "image/e73b68935430755ad6430ac804d7a5bd31143186-1656x1106.webp",
  },
  {
    name: "GOALS studio",
    image: "image/cffddc8be9500d725475a3060589b00346068b16-1656x1104.webp",
  },
  {
    name: "Nako",
    image: "image/ca46ff0ea6dfc84f84b67df111512520827d5c64-1656x1104.webp",
  },
];

function theImage() {
    let cart = " ";
    arr.forEach(function (obj) {
        cart += `<div class="image1">
            <img src="${obj.image}" alt="image1">
                <h1>"${obj.name}"</h1>
        </div>`;
    })
    document.querySelector("#images").innerHTML = cart;
}
theImage();