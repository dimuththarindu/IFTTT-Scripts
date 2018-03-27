
try {
    var articleTitle = Feed.newFeedItem.EntryTitle; // Title of the article
    var articleDescription = ""; // A description of the article 
    var articleAuthor = ""; // Author of the article. Ex. CNN - NANCY SCOLA
    var articleCategory = "Technology, Futurology"; // Article category Ex. Science, Technology
    var articleURL = Feed.newFeedItem.EntryContent; // Article URL Ex. cnn.com/15420
    var articleImageURL = Feed.newFeedItem.EntryImageUrl; // Article img url

    var publishedDate = Feed.newFeedItem.EntryPublished; // published date Ex. reddit 2016.12.05
    var publishedBy = Feed.newFeedItem.EntryAuthor; // published by. Ex. reddit user andrewornot

    var sourceService = "Reddit"; // source Ex. Reddit, Digg
    var sourceURL = Feed.newFeedItem.EntryUrl; // source url. Ex. Reddit.com/post124
    var sourceFeedCategory = Feed.newFeedItem.FeedTitle; // Ex. Top Trending Technology post
    var sourceFeedURL = Feed.newFeedItem.FeedUrl; // Ex. Reddit.com/r/Technology

    var appletID = "********";
    var serviceTrigger = "RSS";
    var serviceAction = "GoogleSheets";
    var appletVersion = "V6";
    var currentUserTime = Meta.currentUserTime;
    var triggerTime = Meta.triggerTime;
    var activityStatus = true;

    var cusCellSeparator = "|||";
    var cusFilename = "Feeds";
    var cusPath = "IFTTT";

    // Function 01
    // Getting the Article URL //articleURL
    // Only valid for reddit services
    var loopSucess = false;
	var strURLArray = (articleURL.split(/,| |<|>|\[|\]|{|}|"|'/igm)).sort();

	for (var i = 0; i < strURLArray.length; i++)
	{
		if (/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/igm.test(strURLArray[i]))
		{
			if (!(/reddit.com|redditmedia.com|imgur.com|.jpg|.jpeg|.png|.bmp/gim.test(strURLArray[i])))
			{
				articleURL = strURLArray[i];
				loopSucess = true;
				break;
			}
		}
	}

	if(!loopSucess) 
	{
		activityStatus 	= false;	
		GoogleSheets.appendToGoogleSpreadsheet.skip();
	}
    // End: Getting the Article URL    


    // Function 02
    // Getting correct author (publishedBy)
    publishedBy = publishedBy.replace(/^\/u\//gim, "");
    // End: Getting correct author


    // Function 03
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
catch (err) {
    GoogleSheets.appendToGoogleSpreadsheet.skip(err.message);
}