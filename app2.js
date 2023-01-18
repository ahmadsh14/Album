const newdiv = document.querySelector('.main-album')
const newalbum = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
    const duser = JSON.parse(localStorage.getItem("users"))
    let finalalbum = response.data.filter(q => q.userId === duser.id)
    finalalbum.forEach(re => {
        const newsec = document.createElement('SECTION');
        const newti = document.createElement('h1');
        newsec.setAttribute('id', re.id)
        newdiv.appendChild(newsec);
        newsec.appendChild(newti);
        newti.innerText = re.title;
    });
    const clicksec = document.querySelectorAll('section')
    clicksec.forEach(go => {
        go.addEventListener('click', function() {
            window.location.href = `./index3.html?q=${go.id}`
        })
    })
}
newalbum();