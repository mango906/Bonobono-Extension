let bonobono = document.getElementById('bonobono');

bonobono.onclick = function(element) {
  let url = 'https://pbs.twimg.com/profile_images/1007313784153620480/2VJM9zOS_400x400.jpg';

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `for(let image of document.images){
        image.setAttribute('src', '${url}')}`
    });
  });
};
