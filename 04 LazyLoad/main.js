const URL = 'https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json'
const footerWrap = document.querySelector(".footer");
const loadDataHere = document.querySelector("#loadDataHere");

// const itemString = `<figure>
//     <img src=${item.img}>
//     <figcaption>${item.name}</figcaption>
// </figure>`;

const options = {
    root: null,
    rootMargins: '0px',
    threshold: 0.25
};
const getData = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            //  console.log(data);
            data.items.map((item) => {
                const detailWrapepr = document.createElement('figure')
                detailWrapepr.innerHTML = `<img src=${item.img}><figcaption>${item.name}</figcaption>`
                return loadDataHere.append(detailWrapepr);
            })
            // console.log(
            //     data.items.map((item) => {
            //         const detailWrapepr = document.createElement('figure')
            //         detailWrapepr.innerHTML = `<img src=${item.img}>`
            //         return loadDataHere.append(detailWrapepr);
            //     })
            // );
        })
    //console.error(loadDataHere);
}
window.addEventListener('DOMContentLoaded', (event) => {
    getData();
    const handleIntersection = (entries, observer) => {
        // if we have single entry
        //     if(entries[0].isIntersecting){
        //         console.warn('something is intersecting');
        //     }
        entries.forEach(entry => {
            //console.log(entry);
            if (entry.isIntersecting) {
                //console.warn("something is intersecion");
                getData();
            }
        })
    }
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(footerWrap);
});

