!function(n){var r,o=n(window);o.on("resize",function(){r=n(this).height()}).triggerHandler("resize"),n.fn.parallax=function(t,i,e,s){var c,u,a=n(this);t=t||"50%",i=i||0,e=e||.5,void 0===s&&(s=!0),c=s?function(n){return n.outerHeight(!0)}:function(n){return n.height()},o.on("scroll resize",function(){var s=o.scrollTop();a.each(function(){var o=n(this),f=o.offset().top,h=c(o);u=a.offset().top,f+h<s||f>s+r||a.css("backgroundPosition",t+" "+Math.round(i+(u-s)*e)+"px")})}).triggerHandler("scroll")}}(jQuery)
;