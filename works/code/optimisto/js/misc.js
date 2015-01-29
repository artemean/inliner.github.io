jQuery(function() {
	jQuery(document).tooltip();

	jQuery('#banner_slider').bjqs({
		height      : 330,
		width       : 770,
		showmarkers : false,
		responsive  : false
	});


	jQuery('#prod_selector').bjqs({
		animtype : 'slide',
		width       : 179,
		automatic : false,
		responsive  : false
	});
	jQuery('#prod_selector2').bjqs({
		animtype : 'slide',
		width       : 560,
		automatic : false,
		responsive  : false
	});

	jQuery(".fav").click(function(){
		jQuery(this).toggleClass("faved");
	});

	jQuery('.amm_sel, .sort_sel').wSelect();
	jQuery('.custom_checkbox input:checkbox').wCheck();

	
	//Price slider action
	jQuery( "#price_slider" ).slider({
		range: true,
		min: 0,
		max: 2000,
		values: [100, 1100],
		step: 10,
		slide: function( event, ui ) {
			jQuery( "#min_price" ).val( ui.values[ 0 ] );
			jQuery( "#max_price" ).val( ui.values[ 1 ] );
			if ( (ui.values[0] + 50) >= ui.values[1] ) {
                return false;
            }
		}
    });
    jQuery("#min_price").val(jQuery("#price_slider").slider("values",0));
    jQuery("#max_price").val(jQuery("#price_slider").slider("values",1));
    jQuery("#min_price").change(function() {jQuery("#price_slider").slider("values", 0, jQuery(this).val() );});
	jQuery("#max_price").change(function() {jQuery("#price_slider").slider("values", 1, jQuery(this).val() );});
    jQuery(".ui-slider-handle:even").addClass("left_handle");
    jQuery(".ui-slider-handle:odd").addClass("right_handle");
    //Endof Price slider action

    jQuery( ".color_picker" ).buttonset();

    jQuery('.filters .scroll-pane').jScrollPane({
		verticalDragMinHeight: 40,
		verticalDragMaxHeight: 40,
	});
	jQuery('.compare_page .scroll-pane').jScrollPane({
		showArrows: true
	});

	jQuery('.acc').jScrollPane({
		verticalDragMinHeight: 40,
		verticalDragMaxHeight: 40
	});
	jQuery(".fav_list").hide();
	jQuery(".wt2").hover(function () {
		jQuery(this).find(".fav_list").slideToggle(200);
	});

	
	jQuery(".tb").each(function(){
		var posi = jQuery(this).parents('li').position();
		jQuery(this).css('left',posi.left);
	});

	jQuery(".simple_table tr:odd td").addClass("s_td");
	jQuery(".p_details:even").addClass("s_tr");

	jQuery("#tabs").tabs({active:0});

	jQuery(".inpt").delegate("*", "focus blur", function() {
		var elem = jQuery(this);
		var elem2 = jQuery(this).parent();
		setTimeout(function() {
			elem2.toggleClass("focused", elem.is(":focus"));
		}, 0);
	});

	jQuery(".arr").click(function(){
		jQuery(this).toggleClass("arr_up").parents("tr").next(".tobeopened").toggle();
	});

	jQuery("#pay_methods").buttonset();

	jQuery("td.combined").siblings("td").addClass("dash_td");

	jQuery(".hid").hide();
	jQuery(".p_code").click(function(){
		jQuery(this).next(".hid").toggle("slow");
	});

	jQuery(".spec_line:even").addClass("bgg2");

	jQuery("#cs1 img").click(function(){
		jQuery("#image_popup").dialog({
			draggable: false,
			dialogClass: "imgpop",
			width: 859,
			modal: true,
			closeText: "закрыть"
	    });
	});

	jQuery(".product_image .stabs .cat_product:nth-child(3n)").addClass("nomarg");

	jQuery(".login span").click(function () {
		jQuery("#login_popup").dialog({
			dialogClass: "loginpop",
			width: 859,
			modal: true,
			closeText: "закрыть"
		});
	});

	jQuery("#reg_now").click(function () {
		jQuery("#login_popup").dialog("close");
		jQuery("#register_popup").dialog({
			dialogClass: "loginpop",
			width: 859,
			modal: true,
			closeText: "закрыть"
		});
	});

	jQuery("#a1").click(function () {
		jQuery("#cart_popup").dialog({
			dialogClass: "cartpop",
			width: 859,
			modal: true,
			closeText: "закрыть"
		});
	});
	jQuery("#a2").click(function () {
		jQuery("#cart_popup_set").dialog({
			dialogClass: "cartpop",
			width: 859,
			modal: true,
			closeText: "закрыть"
		});
	});

	jQuery(".spinner").spinner({min: 0});

	jQuery("td.item_price").has(".old_s_price").addClass("ipr");
	jQuery(".gbb").parent().next("tr").addClass("tda");
	jQuery(".sets").prev().addClass("tdb");
	jQuery(".inpop .goback").click(function () {
		jQuery(this).parents(".popup").dialog("close");
	});
	jQuery(".tdb .item_name a").after( "<span class='asdf'></span>" );



	var projects = [
		{
			value: "John_Richmond",
			label: "John Richmond",
			desc: "Очки JR 680 06",
			price: 854,
			icon: "icon.jpg"
		},
		{
			value: "John_Richmond2",
			label: "John Richmond",
			desc: "Очки авиатора AV 708",
			price: 854,
			icon: "icon2.jpg"
		},
		{
			value: "Carrera",
			label: "Carrera",
			desc: "Очки CAR CARRERINO 9",
			price: 854,
			icon: "icon3.jpg"
		},
		{
			value: "Carrera2",
			label: "Carrera",
			desc: "Очки Champion_MT",
			price: 854,
			icon: "icon4.jpg"
		}
	];
 
	jQuery( "#project" ).autocomplete({
			position: {at: "left-13 bottom+7"},
			minLength: 1, /*if set to 0 autocomplete shows up on page load in IE which is a bug*/
			source: projects,
			focus: function( event, ui ) {
			jQuery( "#project" ).val( ui.item.label );
			return false;
		},
			open: function () {
				if (!jQuery('.showall').length) {
					jQuery('<li class="showall"><a href="#">Показать все результаты</a></li>').appendTo('ul.ui-autocomplete');
				}
	},
			select: function( event, ui ) {
			jQuery( "#project" ).val( ui.item.label );
			jQuery( "#project-id" ).val( ui.item.value );
			return false;
		}
	})
	.data("ui-autocomplete")._renderItem = function(ul, item) {
		return jQuery("<li>")
		.append("<a>" + "<img class='prod_icon' width='51' height='51' src=images/"+item.icon+">" + item.label + "<br>" + item.desc + "</a>" + "<br>" + "<span class='item_prc'>" + item.price + ",-" + "</span>")
		.appendTo(ul);
    };

    jQuery(".bottom_line").hide();
    jQuery("#hide").click(function(){
    	jQuery(this).parents('.bottom_line').hide('slide', {direction: 'right'}, 600);
    	jQuery("#show_fav").show();
    });

    jQuery("#show_fav").click(function(){
    	jQuery('.bottom_line').show('slide', {direction: 'right'}, 600);
    	jQuery(this).hide();
    });

    


});