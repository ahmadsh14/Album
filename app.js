let newemail = document.querySelector('#emailch');
const newerror = document.querySelector('#error1');
newemail.addEventListener('submit', async(l) => {
    l.preventDefault();
    let useremail = newemail.elements.email.value;
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    try {
        let finaldata = response.data.find(k => k.email === useremail);
        if (finaldata !== undefined) {
            let myobj = JSON.stringify(finaldata)
            localStorage.setItem('users', myobj)
            window.location.href = "./index2.html";
        } else {
            throw 'Email not valid '
        }
    } catch (e) {
        newerror.innerHTML = e
    }
});