var openbirthday=Ti.UI.currentWindow;

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume');
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	openbirthday.add(firstView);
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	openbirthday.add(firstView);
});

var groups = Ti.App.Properties.getString('group');
var cols = Ti.App.Properties.getString('col');
 var conn = Ti.Database.install('/Security.sqlite', 'Security');
 if(groups=='All' || groups==''){
	var userBirthdayResultSet = conn.execute('SELECT * FROM Birthday'); 
	}else{
		var userBirthdayResultSet = conn.execute('SELECT * FROM Birthday WHERE groups=?',groups); 
	}
	var count= userBirthdayResultSet.fieldCount;
	var this_birthday_name=[];
	var this_birthday_date=[];
	var this_groups =[];
	while (userBirthdayResultSet.isValidRow()){
    this_birthday_name.push(userBirthdayResultSet.fieldByName('name'));
    this_birthday_date.push(userBirthdayResultSet.fieldByName('date'));
    this_groups.push(userBirthdayResultSet.fieldByName('groups'));
 //   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
    userBirthdayResultSet.next();  
}
// alert(this_birthday_name+'      '+this_birthday_date);
 
userBirthdayResultSet.close();
	
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
	var descreption='';
	var card_no='';
	var expiration_date='';
	var name='';
	var pin='';
	var bank='';
	
		var subself = Ti.UI.createView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
		openbirthday.add(subself);
	var topview = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		width : '100%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '0%'
	});
	subself.add(topview);
	var topImageView = Ti.UI.createImageView({
		image : '/images/appicon.png',
		width : '8%',
		height : '70%',
		top : '15%',
		right : '3%'
	});
	topImageView.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	topview.add(topImageView);
	
	var toptext = Ti.UI.createLabel({
		text : 'Security',
		color : 'white',
		font : {
			fontSize : tmp3,
			fontWeight:'bold'
		},
		height : 'auto',
		width : 'auto',
		left : '3%',
	});
	// Add to the parent view.
	topview.add(toptext);
	
		var backImageView = Ti.UI.createImageView({
		image : '/images/back_icon2.png',
		width:'7%',
		height : '60%',
		right : '18%',	
	});
	backImageView.addEventListener('click', function() {
		openbirthday.close();
	});
	// Add to the parent view.
	topview.add(backImageView);
	
var border = Math.round(Ti.Platform.displayCaps.platformWidth*0.005);
var nextview = Ti.UI.createView({
	backgroundColor:'white',
		height : '87%',
		width : '92%',
		top:'10%',
		left:'4%',
		borderColor: '#B7B7B7',
        borderWidth:border
	});
	subself.add(nextview);
	var nextsubview1 = Ti.UI.createView({
		backgroundColor:'#0054A5',
		height : '9%',
		width : '100%',
		top:'0%',
		left:'0%',
	});
	nextview.add(nextsubview1);
	var text = Ti.UI.createLabel({
		text : 'Birthday Detail',
		color : 'white',
		font : {
			fontSize : tmp3, 
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	nextsubview1.add(text);
	
		var typrImageView = Ti.UI.createImageView({
		image : '/images/birthday_icon.png',
		width:'8%',
		height : '70%',
		right : '3%',	
	});
	nextsubview1.add(typrImageView);
	
var nextmainview=Ti.UI.createView({
	height:'auto',
	width:'100%',
	top:'10%',
	layout:'vertical'
});
nextview.add(nextmainview);
var tableData = [];

for(var i=0;i<this_birthday_name.length;i++){
	
var row=Ti.UI.createTableViewRow({
	height:'auto',
	width:'100%',
	backgroundColor:'white',
	layout:'vertical'
});
row.addEventListener('click',function(e){
	Ti.App.Properties.setString('rowId',e.index);
	Ti.App.Properties.setString('gro',this_groups[e.index]);
	Ti.App.Properties.setString('cols',cols);
	Ti.App.Properties.setString('Name', this_birthday_name[e.index]);
	Ti.App.Properties.setString('Date', this_birthday_date[e.index]);
		var openbirthdaywindow = Ti.UI.createWindow({
			backgroundColor:'white',
			url:'openbirthdaywindow.js',
			modal: true,
			fullscreen : true,
			navBarHidden : true,	
		});
		openbirthdaywindow.open();
	});
	var text2 = Ti.UI.createLabel({
		text : 'Name: '+this_birthday_name[i],
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight:'bold',   
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		top:'10%'
	});	
	row.add(text2);	
	var text1 = Ti.UI.createLabel({
		text : 'Date: '+this_birthday_date[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text1);
	
		var text3 = Ti.UI.createLabel({
		text : 'Group: '+this_groups[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text3);
	 
	 var text4 = Ti.UI.createLabel({
		text : ' ',
		color : 'gray',
		font : {
			fontSize : tmp1,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text4);
 tableData.push(row);
}
// Create a TableView.
var accountdata = Ti.UI.createTableView({
	data:tableData
}); 
// Listen for click events.
accountdata.addEventListener('click', function(e) {
	//alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
});
// Add to the parent view.
nextmainview.add(accountdata);
