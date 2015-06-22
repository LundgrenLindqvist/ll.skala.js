#ll.skala.js

    By: Lundgren+Lindqvist
    http://www.lundgrenlindqvist.se/development

## Usage

The Skala script is a light-weight and versatile solution for scaling an element within another. The arguments make it very flexible, and it can be used on a single element as well as all children of a parent.

### Basic Usage

Apply the Skala script to a parent container to scale the contents. Note that the parent container must have set dimensions, but any dimension work. All child elements must also have a 'position' set with CSS if you want the positioning of the elements to work properly.

    $('#container').llskala();

This equals to

    $('#container').llskala({
        'bleed' : false,
        'margin' : 0,
        'align' : 'center',
        'valign' : 'center'
    });

The parameters available make the script flexible and usable in most cases when content, for instance images, should be scaled to fit another element. 

The parameters available are:

    'bleed' : true, false (default)
    'margin' : 0 (default)
    'align' : 'left', 'center' (default), 'right'
    'valign' : 'top', 'center' (default), 'bottom'

'margin' requires an integer value, 'align' and 'valign' require strings

Please note that the parameter 'bleed' refers to what is more commonly known as "full screen" on the web. The term "bleed" is a print term, but we thought it made sense here as it refers to the fact that the images are scaled up to fill the whole screen, which means that in most cases some of the image will be "bleeding" outside the viewport.

### Updates

#### 2015-06-22

Noticed the scaling sometime will be troublesome when the image has no .width() or .height() value (for whatever reason). Added the possibility to use the ”data-org-width” and ”data-org-height” attributes in order to always preserve a correct ratio.