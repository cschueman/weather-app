// Randomize Header

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = 'http://placehold.it/800x400';
var img1 = 'http://placehold.it/800x400';
var img2 = 'http://placehold.it/800x400';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
});

$('figure').lightGallery({
  selector: 'a',
  mode: 'lg-fade',
  download: false,
  speed: 100,
  share: false,
  autoplay: false,
});