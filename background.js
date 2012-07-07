
function usd2jpy(info, tab) {
  var selection = info.selectionText;
  var matches = selection.match(/\$([\d.]+)/);
  var number;
  if (matches) {
    number = matches[1];
  }

  if (!number) {
    alert('please select usd expression text, retry.');
    return;
  } 
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {action: "get_yen"}, function(response) {
      console.log(response);
      var yen = response.yen;
      alert('$' + number + " is " + (number * yen) + '円 ($1: ' + yen + '円)');
    });
  });
}

var child1 = chrome.contextMenus.create({"title": "USD を日本円に変換", "contexts": ["selection"], "onclick": usd2jpy});

/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
