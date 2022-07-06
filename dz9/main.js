const getPosts = async () => {
  const urla = "https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6";
  const response = await fetch(urla);
  const data = await response.json();
  for (const post of data) {
    const $post = document.createElement("div");
    $post.className = "post";
    $post.id = `post-${post.id}`;
    $post.innerHTML = `
        <div class="button">
          <img onclick="localStorage.setItem('showId','${post.id}')" height="200px" width="70px" src="${post.image_url}" alt="photo">
        </div>
        <div>
        <span>
        ${post.description}
        </span>
        </div>
    `;
    $post.style.fontSize = "14px";
    document.body.appendChild($post);
  }
};

getPosts();
