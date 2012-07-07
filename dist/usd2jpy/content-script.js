var yen;
$.ajax({
  url: 'http://starbug1.com/usd2jpy.php',
  dataType: 'json',
  success: function(data){
    console.log(data);
    yen = data.JPY;
  },
  error: function(x){
    console.log('usd2jpy: error. ', x.responseText);
  }
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse({yen: yen});
});
