document.getElementById('apply').addEventListener('click', () => {
  const colorScheme = document.getElementById('colorScheme').value
  console.log(colorScheme)
  clickFunction(colorScheme);
});

function clickFunction(colorScheme) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: colorScheme});
  });
}




