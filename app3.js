const newdiv2 = document.querySelector('.main-photo');
const photoid = localStorage.getItem("albumid");
const duser1 = JSON.parse(photoid);
const rep = async () => {
    const response1 = await fetch(`https://jsonplaceholder.typicode.com/albums/${duser1}/photos`)
    const data2 = await response1.json();
    console.log(data2)
    for (let i = 0; i <= data2.length - 1; i++) {
        const sec = document.createElement('SECTION')
        const pa = document.createElement('p')
        const img1 = document.createElement('img')
        newdiv2.appendChild(sec)
        sec.appendChild(pa)
        sec.appendChild(img1)
        img1.setAttribute('src', data2[i].thumbnailUrl)
        pa.innerText = data2[i].title
    }
}
rep()