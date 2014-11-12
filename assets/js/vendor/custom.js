var sampleApp=new Marionette.Application();

sampleApp.addRegions({
	mainRegion:"#main-region"
});

sampleApp.StaticView=Marionette.ItemView.extend({
	template:"#static-template"
});

sampleApp.on("initialize:after",function(){
	var staticView=new sampleApp.StaticView();
	sampleApp.someRegion.show(staticView);
});
sampleApp.on("initialize:after",function(){
	var sreedhar=new sampleApp.Contact({
		firstname:"sreedhar",
		lastname:"gn",
		phoneNumber:"123456789"
	});
	var sreedharView=new sampleApp.ContactView({
		model:sreedhar
	});
	sampleApp.mainRegion.show(sreedharView);
});

sampleApp.start();
