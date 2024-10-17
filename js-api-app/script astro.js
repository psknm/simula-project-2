const astroDesc = [
    {
        name: "Aries",
        image: "https://64.media.tumblr.com/ed14ef768a0880efe1e6b301338b21f8/6dc6533282d33589-03/s1280x1920/ada082d86a3457afcab1ce145b6d9acd1270d9f7.pnj"
    },

    {
        name: "Taurus",
        image: "https://64.media.tumblr.com/f7f5834744aeb350dd8608d56cd96dbb/6dc6533282d33589-24/s1280x1920/8a151db9cdee226ff769141bb48854da14a24835.pnj"
    },

    {
        name: "Gemini",
        image: "https://64.media.tumblr.com/6527eb18f32c895293b2b651432febb7/6dc6533282d33589-25/s1280x1920/6c49cecd0ef7dd4cdf57a6c4c0d0d00b753c8cba.pnj"
    },

    {
        name: "Cancer",
        image:"https://64.media.tumblr.com/3eefa1ef25d37cd609a0326b45cf7ee6/6dc6533282d33589-1a/s1280x1920/a83655e00651f3aae012a3ce4e58ffca552debd8.pnj"
    },

    {
        name: "Leo",
        image: "https://64.media.tumblr.com/2c1c019572083f1a60cd4fa0b85c5cfa/6dc6533282d33589-0a/s1280x1920/9e7de9634469597ab8783d9a56a5b692416c021c.pnj"
    },

    {
        name: "Virgo",
        image: "https://64.media.tumblr.com/7aba91762f9245870873094158f01671/6dc6533282d33589-a8/s1280x1920/40a93385ea31bfa77f8b978140100d16da8757a4.pnj"
    },

    {
        name: "Libra",
        image: "https://64.media.tumblr.com/09cdddade3c06dcb31e6c2438ecd1d3b/6dc6533282d33589-e7/s1280x1920/ab7af8bb582c8988c0d3628602da21b45c27a1a4.pnj"
    },

    {
        name: "Scorpio",
        image: "https://64.media.tumblr.com/925264427fe5bf75bc2b1f91ffc05062/44ad0a46b53795f7-62/s1280x1920/e84e4ef578c3ec2f1896a1c300176c208cdd6199.pnj"
    },

    {
        name: "Sagittarius",
        image: "https://64.media.tumblr.com/9e7ad9a77a01336c763cd9fe901ffc44/6dc6533282d33589-cd/s1280x1920/a1e132eb6d02b2a5e44a657d141bcee8aa406c41.pnj"
    },

    {
        name: "Capricorn",
        image: "https://64.media.tumblr.com/aa2efb4f8249de61bd4564e81515b6bb/6dc6533282d33589-a5/s1280x1920/d60bc39edf07687a920d39bf1bf30bbb6ec3a821.pnj"
    },

    {
        name: "Aquarius",
        image: "https://64.media.tumblr.com/e396c50dbeb6c128150f50feaa0793d6/6dc6533282d33589-4a/s1280x1920/a6a9a17ad5f7f9ed8a82f2ec7b9d58a61439cab7.pnj"
    },

    {
        name: "Pisces",
        image: "https://64.media.tumblr.com/1964816cb6cc1897d0260b055ba2dec7/6dc6533282d33589-38/s1280x1920/ef39009baab1b01926b167ca22ed23198d432c18.pnj"
    }
];

console.log(astroDesc);

// Code to push the "name" value into the drop down

astroDesc.forEach((astro) => {
    let newOpt = document.createElement("option");
    newOpt.text = astro.name;
    newOpt.value = astro.image;
    zodiacSelect.appendChild(newOpt);
});

// Code to show the "image" value

zodiacSelect.addEventListener("change", function() {
    let selectedImage = this.value;
    let img = document.getElementById("zodiac-image");
    img.src = selectedImage;
});