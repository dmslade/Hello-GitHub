function showImage(image) {
    var largeImg = document.getElementById('large_img');
    largeImg.src = image;
    console.log(image);
    if (image.includes("Brownie")) {
        document.getElementById('imgDescr').innerHTML = "Brownie made with chocolate and egg ";
    }
    if (image.includes("Car")) {
        document.getElementById('imgDescr').innerHTML = "The first car was make in 1885";
    }
    if (image.includes("house")) {
        document.getElementById('imgDescr').innerHTML = "This house is made form concert";
    }
}

