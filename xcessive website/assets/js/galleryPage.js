// var images = { 
//     2019: [
//         "assets/images/gallery/doxx1.JPG",
//         "assets/images/gallery/willy2.jpg",
//         "assets/images/gallery/willy3.jpg",
//         "assets/images/gallery/willy4.jpg",
//     ],
//     2020: [
//         "assets/images/gallery/sirking1.jpg",
//         "assets/images/gallery/sadboys1.JPG",
//         "assets/images/gallery/sadboys2.JPeG",
//     ],
//     2021: [
//         "assets/images/gallery/sadboys3.JPeG",
//         "assets/images/gallery/perlin1.JPG",
//         "assets/images/gallery/perlin2.JPG",
//         "assets/images/gallery/perlin3.JPG",
//         "assets/images/gallery/seven1.JPG",
//         "assets/images/gallery/seven2.JPG",
//     ],
//     2022: [
//         "assets/images/gallery/doxx1.JPG",
//         "assets/images/gallery/doxx2.JPG",
//         "assets/images/gallery/doxx3.JPG",
//         "assets/images/gallery/doxx4.JPG",
//     ]
// }

var combinedImages = [
    
];

$(document).ready(function(){
    // Watch for click on the images in the gallery row. 
    // $(document).on('click', '#img-click img', function() {
    //     // Change the title to the ID of what image was clicked (each image has an id corresponding to the array above)
    //     $("#imgGalleryTitle").text(this.id);
    //     // Add a back to home button
    //     $("#imgGalleryTitle").after("<a href='#' class='btn' id='backToMain'>Return to Main Gallery</a>");
        
    //     //empty all existing images from gallery.
    //     $("#galleryImgRow").empty();

    //     // Iterate over the array above getting all images with specific ID, and then append the html to the gallery img row. 
    //     for(i=0; i<images[this.id].length; i++) {
    //         $("#galleryImgRow").append("<div class='col s12'><img src='" + images[this.id][i] + "' class='responsive-img image-grow'></div>")
    //     }
    // });

    // // Watch for click on the return to home button
    // $(document).on('click', '#backToMain', function() {
    //     // Change the text back to gallery
    //     $("#imgGalleryTitle").text("Gallery");

    //     // empty the gallery of images
    //     $("#galleryImgRow").empty();

    //     // Loop over the key in the array, and append an image square for each key in the array, and remove the return home button.
    //     for(var key in images) {
    //         $("#galleryImgRow").append("<div class='col m3' id='img-click'><img src='http://via.placeholder.com/300?text=" + key + "' class='responsive-img image-grow' id='" + key + "'></div>")
    //     }
    //     $("#backToMain").remove();
    // });
});