
try 
{    
	//var filename = GoogleSheets.newRowInSpreadsheet.Filename;
	//var path = GoogleSheets.newRowInSpreadsheet.Path;
	//var spreadsheetUrl = GoogleSheets.newRowInSpreadsheet.SpreadsheetUrl;
	//var createdAt = GoogleSheets.newRowInSpreadsheet.CreatedAt;
	//var rowIndex = GoogleSheets.newRowInSpreadsheet.RowIndex;
	
	var articleTitle = GoogleSheets.newRowInSpreadsheet.ColumnA;
	var articleDescription = GoogleSheets.newRowInSpreadsheet.ColumnB;
	var articleAuthor = GoogleSheets.newRowInSpreadsheet.ColumnC;
	var articleCategory = GoogleSheets.newRowInSpreadsheet.ColumnD;
	var articleURL = GoogleSheets.newRowInSpreadsheet.ColumnE;
	var articleImageURL = GoogleSheets.newRowInSpreadsheet.ColumnF;
	var publishedDate = GoogleSheets.newRowInSpreadsheet.ColumnG;
	var publishedBy = GoogleSheets.newRowInSpreadsheet.ColumnH;
	var sourceService = GoogleSheets.newRowInSpreadsheet.ColumnI;
	var sourceURL = GoogleSheets.newRowInSpreadsheet.ColumnJ;
	
	// Function 01
	// Make title bold
	var Array1= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

	var Array2= ['𝟬', '𝟭', '𝟮', '𝟯', '𝟰', '𝟱', '𝟲', '𝟳', '𝟴', '𝟵', '𝗔', '𝗮', '𝗕', '𝗯', '𝗖', '𝗰', '𝗗', '𝗱', '𝗘', '𝗲', '𝗙', '𝗳', '𝗚', '𝗴', '𝗛', '𝗵', '𝗜', '𝗶', '𝗝', '𝗷', '𝗞', '𝗸', '𝗟', '𝗹', '𝗠', '𝗺', '𝗡', '𝗻', '𝗢', '𝗼', '𝗣', '𝗽', '𝗤', '𝗾', '𝗥', '𝗿', '𝗦', '𝘀', '𝗧', '𝘁', '𝗨', '𝘂', '𝗩', '𝘃', '𝗪', '𝘄', '𝗫', '𝘅', '𝗬', '𝘆', '𝗭', '𝘇'];

	var length = Array1.length;   

	for (var i = 0; i < length; i++)   
	{
	  articleTitle = articleTitle.split(Array1[i]).join(Array2[i]);    
	}
	// End: Make title bold
	
	
	// Function 02
	// Tagging
	articleCategory = articleCategory.replace(/\s/gi, '');
	articleCategory = articleCategory.replace(/,/gi, ' #');
	articleCategory = "#" + articleCategory;
	// End: Tagging
	
  // Function 03
  // Add Break to Description
	if(articleDescription.length > 1)
  {
    articleDescription = "<br /> " + articleDescription + "<br /> ";
  }
  // End: Add Break to Description


	//Set Body
	var output = "";
	output += articleTitle + "<br />";
	output += articleDescription;
	output += articleCategory;

	FacebookPages.createLinkPage.setLinkUrl(articleURL);
	FacebookPages.createLinkPage.setMessage(output);
	
}
catch(err) 
{
    FacebookPages.createLinkPage.skip(err.message);
}