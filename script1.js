// Получаем объект поста и возвращаем строку HTML-разметки
function createPostMarkup(post) {
    return `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `;
}

// Добавляем полученную разметку в контейнер
function appendToContainer(container, markup) {
    container.innerHTML += markup;
}

// Выполняем GET запросы и добавляем посты на страницу
const postsContainer = document.getElementById('posts-container');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postMarkup = createPostMarkup(post);
            appendToContainer(postsContainer, postMarkup);
        });
    })
    .catch(error => console.error('Ошибка при получении постов:', error));