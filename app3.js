const mainPhoto = document.querySelector('.mainPhoto');
const param = new URLSearchParams(document.location.search);
const views = async() => {
    const response1 = await axios.get(`https://jsonplaceholder.typicode.com/albums/${param.get('q')}/photos`);
    response1.data.forEach(resData => {
        const section = document.createElement('SECTION');
        const photoTitle = document.createElement('p');
        const img = document.createElement('img');
        mainPhoto.appendChild(section);
        section.appendChild(photoTitle);
        section.appendChild(img);
        img.setAttribute('src', resData.thumbnailUrl);
        photoTitle.innerText = resData.title;
    });
}
views();