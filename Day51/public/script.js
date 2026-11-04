const POSTBook = async (e) => {
            alert("Sending books");
            e.preventDefault();
            console.log("the booking sending event");
            const formData = new FormData(bookForm);
            
            // Build the Book object matching books.json
            const bookData = {
                id: formData.get('id'),
                book_name: formData.get('book_name'),
                author_name: formData.get('author_name'),
                author_id: formData.get('author_id'),
                price: parseFloat(formData.get('price')),
                page: parseInt(formData.get('page'), 10)
            };
           console.log("the bookform data", bookData);
            await sendData('http://localhost:3000/books', bookData);
}





    // 1. Handle Books Form Submission
    const bookForm = document.getElementById('bookForm');
    console.log("the bookForm is", bookForm);
    if (bookForm) {
        bookForm.addEventListener('submit', async (event) => {
        });
    }

    // 2. Handle Author Form Submission
    const authorForm = document.getElementById('authorForm');
    if (authorForm) {
        authorForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(authorForm);

            // Build the Author object matching author.json
            const authorData = {
                id: formData.get('id'),
                author_name: formData.get('author_name'),
                phone_no: formData.get('phone_no'),
                email: formData.get('email')
            };

            await sendData('http://localhost:3000/authors', authorData);
        });
    }


// Helper function to send POST requests
async function sendData(url, payload) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        alert('Data submitted successfully!');
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send data to server.');
    }
}
