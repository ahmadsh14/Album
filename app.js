const inputEmail = document.querySelector('#logForm');
const error = document.querySelector('#error1');
inputEmail.addEventListener('submit', async(l) => {
    l.preventDefault();
    const userEmail = inputEmail.elements.email.value;
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    try {
        const finalData = response.data.find(data => data.email === userEmail);
        if (finalData !== undefined) {
            localStorage.setItem('users', JSON.stringify(finalData));
            window.location.href = "./index2.html";
        } else {
            throw 'Email not valid ';
        }
    } catch (err) {
        error.innerHTML = err;
    }
});