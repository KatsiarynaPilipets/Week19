// Функция для создания постов
function createPost() {
    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');

    const title = titleInput.value;
    const body = bodyInput.value;

    const postData = {
        title: title,
        body: body,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(post => {
        const postMarkup = createPostMarkup(post);
        const postsContainer = document.getElementById('posts-container');
        appendToContainer(postsContainer, postMarkup);

        // Очищаем поля ввода после создания поста
        titleInput.value = '';
        bodyInput.value = '';
    })
    .catch(error => console.error('Ошибка при создании поста:', error));
}

// Получаем объект поста и возвращаем строку HTML-разметки
function createPostMarkup(post) {
    return `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `;
}

// Добавляем полученную разметку в указанный контейнер
function appendToContainer(container, markup) {
    container.innerHTML += markup;
}