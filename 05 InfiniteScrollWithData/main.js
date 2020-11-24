const sectionBlogList = document.querySelector(".section__blog-list");
const footerWrap = document.querySelector('.footer')
window.addEventListener("DOMContentLoaded", (e) => {
    let counter = 1;
    let URL = `https://wp.venture7.com/wp-json/wp/v2/posts?per_page=4&_embed=true&page=${counter}`;
    console.log(URL);
    const getData = () => {
        fetch(URL).
            then(res => res.json())
            .then(data => {
                data.map((item) => {
                    //console.log(item._embedded["wp:featuredmedia"][0].media_details.sizes);
                    const articleWrap = document.createElement('article');
                    const articalString = `
                        <div class="article__wrap">
                        <img src=${item._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}>
                            <h3 class="article__title">${item.title.rendered}</h3>
                        </div>
                        `
                    articleWrap.innerHTML = articalString.trim();
                    return sectionBlogList.append(articleWrap)
                });
            });
    }
    getData();
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    }
    const handleObserver = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry);
                //console.log(entry.intersectionRatio);
                counter += 1;
                //console.log(`count value: ${counter}`);
                URL = `https://wp.venture7.com/wp-json/wp/v2/posts?per_page=4&_embed=true&page=${counter}`;
                getData();
            }
        })
    }
    const intersectionObserver = new IntersectionObserver(handleObserver, options);
    intersectionObserver.observe(footerWrap);

})