jQuery(document).ready(function()
{
    var containers=jQuery(".center-img-container");
    for (var i = containers.length - 1; i >= 0; i--) 
 {
	var cw, ch, iw, ih, nw, nh;  //container (c), image (i), and new (n) height (h) and width (w)
	var img=jQuery(containers[i]).find("img");
	cw = jQuery(containers[i]).width();
	ch = jQuery(containers[i]).height();
	containers.css("overflow","hidden");

	if(img.length==1)
	{
	 
	 iw= jQuery(img).width();
	 ih = jQuery(img).height();
	 
	 jQuery(img).css("position","relative");

	 if(iw/ih > cw/ch) //in this case the height of the image will be same as container and width will overflow
	 {
	 	nh=ch;
	 	nw=(iw/ih)*nh;
	 	var left = -(nw-cw)/2;
	 	jQuery(img).css("left",left+"px");
	 }
	 else
	 {
	 	nw=cw;
	 	nh=(ih/iw)*nw;
	 	var top= -(nh-ch)/2;
	 	jQuery(img).css("top",top+"px");
	 }

	 jQuery(img).width(nw);
	 jQuery(img).height(nh);

	}

 }

});