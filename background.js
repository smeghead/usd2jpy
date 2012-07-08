
function usd2jpy(info, tab) {
  var selection = info.selectionText;
  var matches = selection.match(/\$\s*[\d.,]+/g);
  var numbers = [];
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i].match(/\$\s*([\d.,]+)/);
    numbers.push(match[1]);
  }

  if (numbers.length == 0) {
    alert('please select usd expression text, retry.');
    return;
  } 
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {action: "get_yen"}, function(response) {
      console.log(response);
      var yen = response.yen;
      var message = '';
      for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        message += '$' + number + "     ≒  " + (Math.round(number * yen * 100) / 100) + '円\n';
      }
      message += '--\n  為替参考値 $1 = ' + yen + '円\n';
      message += '        usd2jpy - Google Chrome Extensions\n';
      message += '        powered by http://api.aoikujira.com/kawase/\n';
      alert(message);
    });
  });
}

var child1 = chrome.contextMenus.create({"title": "USD を日本円に変換", "contexts": ["selection"], "onclick": usd2jpy});

/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
