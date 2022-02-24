const refresh = document.getElementById('refresh');

const randomIndex = (length) => {
  return Math.floor(Math.random() * length);
}

const fetchData = async function(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) { 
          throw new Error(response.statusText);
      }
      const data = await response.json();
      const anime = data.data[randomIndex(data.data.length)];
      console.log(anime);

      const output = `
        <h1>${anime.title}</h1>
        <img src="${anime.images.jpg.image_url}" alt="Cover image of ${anime.title}"
        <p>
          <a href="${anime.url}">More Info</a>
        </p>
        <p>Current status: ${anime.status}</p>
      `;
      
  document.querySelector('.content').innerHTML = output;
      
  } catch (error) {
      console.error(error);
  }
}

const endpoint = 'https://api.jikan.moe/v4/anime';

fetchData(endpoint);

refresh.addEventListener('click', fetchData);