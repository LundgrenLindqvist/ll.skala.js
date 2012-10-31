#ll.skala.js

    By: Lundgren+Lindqvist
    http://dev.lundgrenlindqvist.se

## Usage

The Skala script is a light-weight and versatile solution for scaling an element within another. The arguments make it very flexible, and it can be used on a single element as well as all children of a parent.

### Basic Usage

Apply the Skala script to a parent container to scale the contents. Note that the parent container must have set dimensions, but any dimension work. All child elements must also have a 'position' set with CSS if you want the positioning of the elements to work properly.

    $('#container').llskala();

This equals to

    $('#container').llskala({
        'bleed' : false,
        'margin' : 0,
        'align' : center, 
        'valign' : center
    });

The parameters available make the script flexible and usable in most cases when content, for instance images, should be scaled to fit another element. 

The parameters available are:

    'bleed' : true, false (default)
    'margin' : 0 (default)
    'align' : left, center (default), right
    'valign' : top, center (default), bottom

Please note that the parameter 'bleed' refers to what is more commonly known as "full screen" on the web. The term "bleed" is a print term, but we thought it made sense here as it refers to the fact that the images are scaled up to fill the whole screen, which means that in most cases some of the image will be "bleeding" outside the viewport.

## Demo

http://dev.lundgrenlindqvist.se/scripts/skala/

### Responsive Demo

http://dev.lundgrenlindqvist.se/scripts/skala/