jQuery( document ).ready(function() {
	setTimeout(function() {
		console.log("test");
		jQuery('table.variations tbody tr').each(function(i, obj) {
			var if_selected_done = 0;
			var tr_this = jQuery(this);
			jQuery(this).find("ul").find("li").each(function(ii, objo) {
				if(jQuery(this).hasClass("selected")) {
					if_selected_done = 1;
				}
			});
			jQuery(this).find("ul").find("li").each(function(ii, objo) {
				if(jQuery(this).hasClass("disabled")) {
				} else {
					if(if_selected_done == 0) {
						if_selected_done = 1;
						var data_value = jQuery(this).attr("data-value");
						jQuery(this).trigger("click");
					}
				}
			});
		});
    }, 2000);
});
