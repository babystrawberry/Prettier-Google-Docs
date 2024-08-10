const applyTheme = (theme) => {
  document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'brown-theme', 'purple-theme');

  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else if (theme === 'blue') {
    document.body.classList.add('blue-theme');
  } else if (theme === 'pink') {
    document.body.classList.add('pink-theme');
  } else if (theme === 'brown') {
    document.body.classList.add('brown-theme');
  } else if (theme === 'purple') {
    document.body.classList.add('purple-theme');
  }
  
};

// Apply styles initially
applyTheme();

checkColors()
function checkColors() {
    chrome.storage.sync.get(["colorScheme"]).then((result) => {
        
        if (result.colorScheme) {
           applyTheme(result.colorScheme)
        }
      })
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  applyTheme(request.message)
  chrome.storage.sync.set({ colorScheme: request.message })
})




  