const apiKey = 'uejVe7KmU_zIbhUtXJqe8sMbqKEZ3srjKkO9sfFhMw4';
const searchForm = document.getElementById('search-form');
        const queryInput = document.getElementById('query');
        const imageContainer = document.getElementById('image-container');
        const showMoreButton = document.getElementById('show-more');
        let page = 1;

        searchForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            page = 1; // Reset the page when a new search is performed
            const query = queryInput.value.trim();
            if (query === '') return;

            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${apiKey}`);
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    displayImages(data.results);
                    showMoreButton.style.display = 'block';
                } else {
                    imageContainer.innerHTML = '<p>No results found</p>';
                    showMoreButton.style.display = 'none';
                }
            } catch (error) {
                console.error(error);
                imageContainer.innerHTML = '<p>An error occurred</p>';
                showMoreButton.style.display = 'none';
            }
        });

        showMoreButton.addEventListener('click', async function () {
            page++;

            const query = queryInput.value.trim();
            if (query === '') return;

            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${apiKey}`);
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    appendImages(data.results);
                } else {
                    showMoreButton.style.display = 'none';
                }
            } catch (error) {
                console.error(error);
                showMoreButton.style.display = 'none';
            }
        });

        function displayImages(images) {
            imageContainer.innerHTML = '';
            appendImages(images);
        }

        function appendImages(images) {
            images.forEach(image => {
                const imageCard = document.createElement('div');
                imageCard.classList.add('image-card');

                const img = document.createElement('img');
                img.src = image.urls.small;
                img.alt = image.alt_description;

                const author = document.createElement('p');
                author.textContent = `By ${image.user.name}`;

                imageCard.appendChild(img);
                imageCard.appendChild(author);

                imageContainer.appendChild(imageCard);
            });
        }