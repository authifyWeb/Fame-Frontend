

const el = document.querySelector(".searchterm");



/* Initialising typeahead-standalone.js: https://typeahead.digitalfortress.tech/ */

typeahead({
    input: el,
    source: {
    remote: {
        url: "https://aapifame.authifyweb.com/dinosaurs?alias=%QUERY&select=alias,name,urls,logo,cat,origin,bg,acc", 
		wildcard: "%QUERY",
    requestOptions: {}
  },
        
	identifier: 'alias',
	
    transform: (data) => { 
    return data.Source;
    },
	
  identity: (suggestion) => `${suggestion.name}`
	},
	
	
  display: (item, event) => {
    

    return `${item.name}`;
	 },
	


debounceRemote: 300,
highlight: true,
className: 'typeahead-sgst',
minLength: 3,
preventSubmit: true,
limit:25,
hint: false,
autoSelect: false,
templates: {
    suggestion: (authifyFame) => (
		
     `<div  class="single-item">
      <img class="propic" src="https://favatar.authifyweb.com/avatar/${authifyFame.logo}"; style="background-color:${authifyFame.bg}; font-size:12px; " loading="lazy">
      <div class="details">
      <div class="company_name"><span>${authifyFame.name}</span><span> <img class="badge" src="images/bluetick.svg"></span></div>
	  <div class="company_type">${authifyFame.cat}: ${authifyFame.origin} </div>
    </div></div>`
    ),
   
header: (resultSet) => `Results for <span style="color:#A2FB15; background-color:#1f282d; text-transform: uppercase;">" ${resultSet.query} "</span> : ${resultSet.count} `,
notFound: (resultSet) => {   return `Nothing found for <span style="color:yellow; background-color:#1f282d; text-transform: uppercase;">" ${resultSet.query} "</span>`;},

footer:() => 'an <a href="https://authifyweb.com" target="_blank" style="color:goldenrod; font-size:14px;"> authifyWeb.com</a> project ',
loader: () => '<div style="text-align: center"><img src="images/loader.svg" /></div>',
/*empty: (resultSet) => {
  return `<div style="font-size:12px;">Enter the Name and click enter</div>`;
    },*/
},
display: (item, event) => {
  if (event) {
    let userId = item.acc;
    function handleFormSubmit(event) {
      event.preventDefault();
    if (userId) {
      const profileUrl = `https://fame.authifyweb.com/user/${userId}`;
      window.location.href = profileUrl;
    } else {
      // Handle case where no user is selected
      console.error('No user selected');
    }
  }
  
  // Attach the event listener to the form
  const profileForm = document.getElementById('profileForm');
  profileForm.addEventListener('submit', handleFormSubmit);
    
  }
  return `${item.name}`;
}


});
/*
document.addEventListener("DOMContentLoaded", function() {
  const categories = [
    "CREATORS", "INFLUENCERS", "CELEBRITIES", "AUTHORS", "DESIGNERS", "CURATORS", "JOURNALISTS"
  ];
  let index = 0;
  const categoryElement = document.getElementById("category");

  function rotateCategories() {
    categoryElement.textContent = categories[index];
    index = (index + 1) % categories.length;
  }

  rotateCategories(); // Initial call

  setInterval(rotateCategories, 1500); // Rotate every 4 seconds
});
*/
/*   */
