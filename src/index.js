/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

 fetch(`${baseUrl}/api/avo`)
 .then(respuesta => respuesta.json())
 .then((responseJson) => {
     const allItems = [];
     responseJson.data.forEach(item => {
         const imagen = document.createElement("img");
         imagen.src = `${baseUrl}${item.image}`
         const title = document.createElement("h2");
         title.textContent = item.name;
         const price = document.createElement("div");
         price.textContent = item.price;
         const container = document.createElement("div");
         container.append(imagen, title, price);
         allItems.push(container)
     });
     appNode.append(...allItems)
 });

 

 /* //ASYNC AWAIT
 const url = "https://platzi-avo.vercel.app/api/avo";

 async function fetchData() {
     const response = await fetch(url),
     data = await response.json(),
     allItems = [];

     data.data.forEach((item) => {
        const image = document.createElement("img");
        // create title
        const title = document.createElement("h2");
        // create price
        const price = document.createElement("div");
    
        const container = document.createElement("div");
        container.append(image, title, price);
    
        allItems.push(container);
     });
     document.body.append(...allItems);
 }

 fetchData(): */