const newdiv2 = document.querySelector('.main-photo');
const param = new URLSearchParams(document.location.search);
const rep = async() => {
    const response1 = await axios.get(`https://jsonplaceholder.typicode.com/albums/${param.get('q')}/photos`);
    response1.data.forEach(re => {
        const sec = document.createElement('SECTION');
        const pa = document.createElement('p');
        const img1 = document.createElement('img');
        newdiv2.appendChild(sec);
        sec.appendChild(pa);
        sec.appendChild(img1);
        img1.setAttribute('src', re.thumbnailUrl);
        pa.innerText = re.title;
    });
}
rep();