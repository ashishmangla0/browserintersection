const sectionBlogList = document.querySelector(".section__blog-list");
let count = 1;
const URL = `https://wp.venture7.com/wp-json/wp/v2/posts?per_page=10&_embed=true&page=${count}`;

const getData = () => {
    fetch(URL).
        then(res => res.json())
        .then(data => {
            console.log(data);

            data.map((item) => {
                const articleWrap = document.createElement('article');
                const articalString = `<div class="article__wrap">
    <h3 class="article__title">${item.title.rendered}</h3>
</div>`
                articleWrap.innerHTML = articalString

                return sectionBlogList.append(articleWrap)
            }
            )
        })
    console.log('this function is for data');
}

window.addEventListener("DOMContentLoaded", (e) => {

    console.log(URL)
    console.log(sectionBlogList);
    getData();
})