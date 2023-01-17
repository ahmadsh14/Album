const newdiv = document.querySelector('.main-album')
const newalbum = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    const data = await response.json();
    const userid = localStorage.getItem("users")
    const duser = JSON.parse(userid)
    let finalalbum = data.filter(q => q.userId === duser.id)
    console.log(finalalbum)
    for (let i = 0; i <= finalalbum.length - 1; i++) {
        const newsec = document.createElement('SECTION');
        const newti = document.createElement('h1');
        newsec.setAttribute('id', finalalbum[i].id)
        newdiv.appendChild(newsec);
        newsec.appendChild(newti);
        newti.innerText = finalalbum[i].title;
    }
    const clicksec = document.querySelectorAll('section')
    clicksec.forEach(go => {
        go.addEventListener('click', function () {
            console.log(go.id)
            let myid = JSON.stringify(go.id)
            localStorage.setItem('albumid', myid)
            window.location.href = "./index3.html"
        })
    })
}
newalbum();