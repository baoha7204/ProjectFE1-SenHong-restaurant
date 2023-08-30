const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('header');
const footer = $('footer');
const head = $('head');

/**
 * Insert fontAwesome
 */
function insertFontAwesome(){
    var script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/311807c634.js";
    script.crossOrigin = "anonymous";
    head.append(script);
}

/**
 * Insert header
 */
function insertHeader() {
    header.innerHTML = `<div class="header__container">
    <!-- Logo -->
    <div class="logo"><a href="index.html"></a></div>
    <!-- Navigation bar -->
    <div class="header__navbar">
        <label for="checkbox_toggle" class="navbar__hamburger">
            <input type="checkbox" id="checkbox_toggle">
        </label>
        <nav class="navbar__list">
            <li class="list__item">
                <a href="index.html" class="item--index" title="Trang chủ">Trang chủ</a>
            </li>
            <li class="list__item">
                <a href="introduction.html" class="item--introduction" title="Giới thiệu">Giới thiệu</a>
            </li>
            <li class="list__item">
                <a href="menu.html" class="item--menu" title="Thực đơn">Thực đơn</a>
            </li>
            <li class="list__item">
                <a href="order.html" class="item--order" title="Đặt bàn">Đặt bàn</a>
            </li>
            <li class="list__item">
                <a href="store_locator.html" class="item--store-locator" title="Hệ thống">Hệ thống</a>
            </li>
        </nav>
    </div>
</div>`;
}
/**
 * Insert footer
 */
function insertFooter() {
    footer.innerHTML = `<div class="footer__container">
    <div class="footer__upper">
        <div class="logo"><a href="index.html"></a></div>
        <div class="footer__card upper__item">
            <div class="upper-item__title">
                <h4>trụ sở chính</h4>
                <h4 data-title="nhà hàng miền tây sen hồng">nhà hàng miền tây sen hồng</h4>
            </div>
            <div class="upper-item__body">
                <li class="body__text"><p><strong>MST:</strong> 0762953411</p></li>
                <li class="body__text"><p><strong>Địa chỉ:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non quos sit voluptatibus recusandae. Ut voluptatem maxime eum. Asperiores quaerat fugit aut nemo quas ad, odio error qui quis accusamus!</p></li>
                <li class="body__text"><p><strong>Hotline:</strong><a href="tel: +1-555-555-5555"> 1-555-555-5555</a></p></li>
            </div>
        </div>
        <div class="footer__social-media upper__item">
            <div class="upper-item__title">
                <h4>mạng xã hội</h4>
            </div>
            <div class="upper-item__body">
                <button type="button" class="button" id="facebook"><a href="https://www.facebook.com/bao.haminhquoc/" title="Facebook Sen Hồng" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></button>
                <button type="button" class="button" id="facebook"><a href="https://www.instagram.com/bao_ha_real/" title="Instagram Sen Hồng" target="_blank"><i class="fa-brands fa-instagram"></i></a></button>
            </div>
        </div>
    </div>
    <div class="footer__bottom">Sen Hồng &copy; 2023</div>
    <div class="footer__scrollUp">
        <button type="button" class="button" id="up"><a href='#'><i class="fa-solid fa-arrow-up"></i></a></button>
    </div>
</div>`;
}

/**
 * Style header moving
 */
function styleHeaderMoving() {
    const headerContainer = $('.header__container');
    const firstSection = $('section');
    const headerHeight = header.offsetHeight;
    document.onscroll = () => {
        const sectionOffsetTop = firstSection.offsetTop;
        if(window.matchMedia("(min-width: 769px)").matches){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var dist = sectionOffsetTop - (scrollTop + headerHeight);
            if(dist < 0){
                headerContainer.classList.add('header__container--moving');
            } else{
                headerContainer.classList.remove('header__container--moving');
            }
        }
    }
}

/**
 * Prevent from scrolling when open header menu in sidebar
 */
function preventScrollingSidebar() {
    const checkBoxNavbar = $('#checkbox_toggle');
    checkBoxNavbar.onclick = () => {
        if(checkBoxNavbar.checked){
            document.body.classList.add('disable-scrolling');
        } else{
            document.body.classList.remove('disable-scrolling');
        }
    }
}

/**
 * Set active html page
 */
function setActiveHtml(){
    // detect active html
    var path = window.location.pathname;
    var activePage = path.split("/").pop().split(".html").shift();
    var activePageIndex = null;
    // remove active page
    var pages = $$('.list__item a');
    var pagesItem = $$('.list__item');
    pages.forEach((page, index) => {
        var namePage = page.classList.value.split("item--").pop();
        // Check active page
        if(namePage.match(activePage)){
            activePageIndex = index;
        } else{
            pagesItem[index].classList.remove('mobile-list__item--active');
        }
    });
    pagesItem[activePageIndex].classList.add("mobile-list__item--active");
}

function myWebApp() {
    // fontAwesome
    insertFontAwesome();
    // header
    insertHeader();
    styleHeaderMoving();
    preventScrollingSidebar();
    setActiveHtml();
    // footer
    insertFooter();
}

myWebApp();