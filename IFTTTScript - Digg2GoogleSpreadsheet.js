
try 
{    
	var articleTitle 		= Digg.newForCategory.Title; // Title of the article
	var articleDescription 	= Digg.newForCategory.Description; // A description of the article 
	var articleAuthor 		= ""; // Author of the article. Ex. CNN - NANCY SCOLA
	var articleCategory 	= "News, Civil Rights"; // Article category Ex. Science, Technology
	var articleURL 			= Digg.newForCategory.URL; // Article URL Ex. cnn.com/15420
	var articleImageURL 	= Digg.newForCategory.ImageURL; // Article img url

	var publishedDate 	= Digg.newForCategory.PublishedAt; // published date Ex. reddit 2016.12.05
	var publishedBy 	= ""; // published by. Ex. reddit user andrewornot

	var sourceService 		= "Digg"; // source Ex. Reddit, Digg
	var sourceURL 			= ""; // source url. Ex. Reddit.com/post124
	var sourceFeedCategory	= "New For Category"; // Ex. Top Trending Technology post
	var sourceFeedURL 		= ""; // Ex. Reddit.com/r/Technology

	var appletID 		= "xXxXxXxX"; 
	var serviceTrigger 	= "Digg";
	var serviceAction 	= "GoogleSheets";
	var appletVersion 	= "V1";
	var currentUserTime = Meta.currentUserTime;
	var triggerTime 	= Meta.triggerTime;
	var activityStatus 	= true;	
	
	var cusCellSeparator = "|||";
	var cusFilename		= "Feeds";
	var cusPath 		= "IFTTT";	

	// Function 01
	// Making the Output
	var output = "";
	
	output += articleTitle + cusCellSeparator;
	output += articleDescription + cusCellSeparator;
	output += articleAuthor + cusCellSeparator;
	output += articleCategory + cusCellSeparator;
	output += articleURL + cusCellSeparator;
	output += articleImageURL + cusCellSeparator;

	output += publishedDate + cusCellSeparator;
	output += publishedBy + cusCellSeparator;

	output += sourceService + cusCellSeparator;
	output += sourceURL + cusCellSeparator;
	output += sourceFeedCategory + cusCellSeparator;
	output += sourceFeedURL + cusCellSeparator;

	output += appletID + cusCellSeparator;
	output += serviceTrigger + cusCellSeparator;
	output += serviceAction + cusCellSeparator;
	output += appletVersion + cusCellSeparator;
	output += currentUserTime + cusCellSeparator;
	output += triggerTime + cusCellSeparator;
	output += activityStatus + cusCellSeparator;
	// End: Making the Output
	
	// Function 04 (Final)
	GoogleSheets.appendToGoogleSpreadsheet.setFilename(cusFilename);
	GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(output);
	GoogleSheets.appendToGoogleSpreadsheet.setPath(cusPath);
}
catch(err) 
{
    GoogleSheets.appendToGoogleSpreadsheet.skip(err.message);
}