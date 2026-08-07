const container = document.querySelector("#articleContainer");
const params = new URLSearchParams(window.location.search);
const articled = Number(params.get("id"))
const article = weatherNews.find((card)=>card.id===articled)
if (article) {
  container.innerHTML = `
    <div class="article-hero ${article.bgClass}">
      <div class="article-hero-content">
        <h1>${article.Title}</h1>
        <div class="article-meta">
          <div class="meta-author">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"></path></svg>
            <h4>${article.Author}</h4>
          </div>
          <div class="meta-date">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg>
            <h4>${article.Date}</h4>
          </div>
        </div>
      </div>
    </div>
    <p class="article-content">${article.content}</p>
  `;
} else {
  container.innerHTML = `<p class="not-found">Article not found</p>`;
}