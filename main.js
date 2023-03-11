let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a907e6a4cb7d479fb55abdae7f4a35a2";

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let news = data.articles;
        let newsHTML = "";
        news.forEach(n => {
            newsHTML += `
                        <div class="news">
                            <h2>${n.title}</h2>
                            <img src="${n.urlToImage}" alt="${n.title}">
                            <span>Autor: ${n.author}</span>
                            <p>${n.description}</p>
                        </div>
                    `;
        });
        document.querySelector("main").innerHTML = newsHTML;

    })
    .catch(error => console.log(error));