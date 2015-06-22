(function( $ ){
    
    /*
    Borrowed some functions and principles of Scott Robin's excellent 'Backstretch'
    http://srobbin.com/jquery-plugins/jquery-backstretch/
    Thanks Scott
    */
    
    $.fn.llskala = function( options ) {
        
        // Settings
        var options = $.extend( {
            'bleed' : false, // true / false
            'margin' : 0,
            'align' : 'center', // options: left, center (default), right
            'valign' : 'center' // options: top, center (default), bottom
        }, options);
        
        var obj, cw, ch, iw, ih, img, i, mw, mh, x, y, z, w, h, css;
        
        obj = $(this);
                
        cw = obj.width();
        ch = obj.height();
        
        x = cw / ch; // Check screen orientation, positive value indicates landscape
        
        if ( options.bleed ) {
            mw = Math.floor(cw);
            mh = Math.floor(ch);                    
        } else {                    
            mw = Math.round(cw)-(options.margin*2);
            mh = Math.round(ch)-(options.margin*2);
        }
        
        img = obj.children();
        
        img.each(function(index) {
        
            i = $(this);            
            if ( i.attr('data-org-width') )
                iw = i.attr('data-org-width');
            else
                iw = Math.round(i.width());
            if ( i.attr('data-org-height') )
                ih = i.attr('data-org-height');
            else
                ih = Math.round(i.height());     
                         
            y = iw / ih; // Check image orientation, positive value indicates landscape
            
            css = {left: 0, top: 0}
            
            // Bleeding images
            if ( options.bleed ) {
                if ( x >= 1 ) { // landscape screen                        
                    if ( y >= 1 ) { // landscape images                              
                        rw = iw / cw;
                        rh = ih / ch;                        
                        if ( rw > rh ) {                      
                            z = ch / ih;
                            w = Math.round(iw*z);
                            h = mh;
                        } else {   
                            z = cw / iw;
                            h = Math.round(ih*z);                                                        
                            (h < ch) ? h = (ch+2) : h = h;
                            w = mw;
                        }                            
                    } else { // portrait images                            
                        z = cw / iw;                            
                        h = Math.round(ih*z);                                                        
                        (h < ch) ? h = (ch+2) : h = h;
                        w = mw;
                    }                                                    
                } else { // portrait screen                              
                    if ( y >= 1 ) { // landscape images                              
                        z = ch / ih;                            
                        w = Math.round(iw*z);                                                        
                        (w < cw) ? w = (cw+2) : w = w; 
                        h = mh;
                    } else { // portrait images
                        rw = iw / mw;
                        rh = ih / mh;
                        if ( rw > rh ) {
                            z = ch / ih; 
                            w = Math.round(iw*z);
                            h = mh;
                        } else {
                            z = cw / iw;                            
                            h = Math.round(ih*z);
                            w = mw;                                                     
                        }                            
                    }
                }
                                   
                // Horizontal align
                if ( options.align == 'center' ) {
                    if( w > cw ) $.extend(css, {left: "-" + (Math.round((w-cw)/2)) + "px"});
                } else if ( options.align == 'right' ) {
                    if( w > cw ) $.extend(css, {left: "-" + (Math.round(w-cw)-options.margin) + "px"});
                }
                
                // Vertical align   
                if ( options.valign == 'center' ) {
                    if( h > ch ) $.extend(css, {top: "-" + (Math.round((h-ch)/2)) + "px"});
                } else if ( options.valign == 'bottom' ) {
                    if( h > ch ) $.extend(css, {top: "-" + (Math.round(h-ch)-options.margin) + "px"});
                }
            
            // Fit in container
            } else {
            
                if ( x >= 1 ) { // landscape screen    
                    if ( y >= 1 ) { // landscape images
                        rw = iw / mw;
                        rh = ih / mh;                        
                        if ( rw > rh ) {
                            z = mw / iw;
                            h = Math.round(ih*z); 
                            w = mw;                                                           
                        } else { 
                            z = mh / ih;
                            w = Math.round(iw*z);
                            h = mh;                                                      
                        }
                    } else { // portrait images
                        z = mh / ih;
                        w = Math.round(iw*z);
                        h = mh;
                    }
                    
                } else { // portrait screen       
                    if ( y >= 1 ) { // landscape images   
                        z = mw / iw;
                        h = Math.round(ih*z);
                        w = mw;      
                    } else { // portrait images
                        rw = iw / mw;
                        rh = ih / mh;                        
                        if ( rw > rh ) {
                            z = mw / iw;
                            h = Math.round(ih*z);
                            w = mw;                                                              
                        } else {   
                            z = mh / ih;
                            w = Math.round(iw*z);
                            h = mh;                                                     
                        }                            
                    }
                }
                                   
                // Horizontal align
                if ( options.align == 'center' ) {
                    if( cw >= w ) $.extend(css, {left: Math.round((cw-w)/2) + "px"});
                } else if ( options.align == 'right' ) {
                    if( cw >= w ) $.extend(css, {left: Math.round(cw-w)-options.margin + "px"});
                }
                
                // Vertical align   
                if ( options.valign == 'center' ) {
                    if( ch >= h ) $.extend(css, {top: Math.round((ch-h)/2) + "px"});
                } else if ( options.valign == 'bottom' ) {
                    if( ch >= h ) $.extend(css, {top: Math.round(ch-h)-options.margin + "px"});
                }
            
            }
                
            // Update image    
            i.width(w).height(h).css(css);
        });
    };
})( jQuery );