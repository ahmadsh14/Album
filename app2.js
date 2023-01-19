const mainDiv = document.querySelector('.mainAlbum')
const newAlbum = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
    const userGetInfo = JSON.parse(localStorage.getItem("users"))
    const finalAlbum = response.data.filter(data => data.userId === userGetInfo.id)
    finalAlbum.forEach(albumData => {
        const section = document.createElement('SECTION');
        const titleH1 = document.createElement('h1');
        section.setAttribute('id', albumData.id)
        mainDiv.appendChild(section);
        section.appendChild(titleH1);
        titleH1.innerText = albumData.title;
    });
    const clickSection = document.querySelectorAll('section');
    clickSection.forEach(clickData => {
        clickData.addEventListener('click', function() {
            window.location.href = `./index3.html?q=${clickData.id}`
        })
    })
}
newAlbum();