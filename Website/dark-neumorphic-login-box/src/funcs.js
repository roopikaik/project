function getRegister(userInfo1){

    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Credentials");
  
    ws.appendRow([userInfo1.name,userInfo1.pass,new Date()]);
  
  }
  
  function getCredentials(creds){
  
      var ss = SpreadsheetApp.openByUrl(url);
      var ws = ss.getSheetByName("Credentials");
      var data = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();
      Logger.log(data);
  }