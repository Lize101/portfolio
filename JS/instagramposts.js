// const apiURL = 'http://localhost:3000/instagram-feed';

            // Make API request
            fetch('https://dazzling-baklava-6e882a.netlify.app/instagram-feed')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const feedContainer = document.getElementById('instagram-feed');
                //Add .slice(0, 3) to just include first 3 posts. Remove .slice(0, 3) to display all posts
                data.data.slice(0, 3).forEach(post => {
                const postElement = document.createElement('div');
                postElement.className ='posts';
                postElement.innerHTML = `
                    <a href="${post.media_url}"><img src="${post.media_url}" alt="${post.caption}" class="img"></a>
                    <p>${post.caption}</p>
                `;
                feedContainer.appendChild(postElement);
            });
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
            });