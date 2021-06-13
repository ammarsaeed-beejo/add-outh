
let FirstName = document.getElementById("first-name");
let LastName = document.getElementById("last-name");
let idBook = document.getElementById("book-id");
let getbutton = document.getElementById("btn-get-authors");
let addouth = document.getElementById("addauth");

options =
{
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
        idBook: `${idBook.value}`,
        firstName: `${FirstName.value}`,
        lastName: `${LastName.value}`,
    })
}


document.getElementById('btn-get-authors').addEventListener('click', () => {
    fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors')
        .then(response => response.json())
        .then(result => {
            for (let i = 0; i < 10; i++) {
                const author = result[i];
                authors.insertAdjacentHTML('beforeend', `<div id="${author.id}" class="author">
                    <button>Do nothing</button>
                    <h3>
                     ${author.firstName} ${author.lastName}
                    </h3>
                    <h4>
                        Book ID: ${author.idBook}
                    </h4>
                    <button class="btn-delete">Delete Author</button>
                </div>`);
            }
        });
});




const authors = document.getElementById('authors');
authors.addEventListener('click', event => {
    if (event.target.className === 'btn-delete') {
        fetch(
            `https://fakerestapi.azurewebsites.net/api/v1/Authors${event.target.parentElement.id}`,
            { method: 'DELETE' }
        ).then(response => {
            if (response.status == 200) {
                event.target.parentElement.remove();
            }
        });
    }
});




addouth.addEventListener("click", event => {
    event.preventDefault();
    fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`, options)
        .then(response => {
            if (response.status === 200) {
                if (button.disabled === true) {
                    div.insertAdjacentHTML('beforeend', `
                    <div class="author">
                    <button>Do nothing</button>
                    <h3>${input1.value} ${input2.value}</h3>
                    <h4>Book ID {${input3.value}}</h4>
                    <button class="button">Delete</button>
                    </div>`)
                }
            }
        })
})

