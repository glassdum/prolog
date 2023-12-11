const veganul = document.querySelector('.vegan_list')
const sundaeul = document.querySelector('.sundae_list')
const etcul = document.querySelector('.etc_list')


let vegan = [
    {
        id:0,
        nameKR:`초콜릿 퍼지 브라우니`,
        nameEN:`Vegan - Chocolate Fudge Brownie`,
        imgurl:`images/product/vegan/chocolate-fudge-brownie-non-dairy.webp`
    },
    {
        id:0,
        nameKR:`쿠키 온 쿠키 도우`,
        nameEN:`Vegan - Cookies On Cookie Dough`,
        imgurl:`images/product/vegan/cookies-on-cookie-dough-non-dy.webp`
    },
    {
        id:0,
        nameKR:`넷플릭스 & 차일드`,
        nameEN:`Vegan - Netflix & Chilld`,
        imgurl:`images/product/vegan/netflix-chilld-non-dairy.webp`
    },
    {
        id:0,
        nameKR:`피쉬 푸드`,
        nameEN:`Vegan - Phish Food`,
        imgurl:`images/product/vegan/phish-food-non-dairy.webp`
    },
    {
        id:0,
        nameKR:`솔티드 카라멜 브라우니`,
        nameEN:`Vegan - Salted Caramel Brownie`,
        imgurl:`images/product/vegan/salted-caramel-brownie-nd.webp`
    },
]

let sundae = [
    {
        id:0,
        nameKR:`오 마이 바노피 파이`,
        nameEN:`Oh My! Banoffee Pie!`,
        imgurl:`images/product/sundae/Oh My! Banoffee Pie!.webp`
    },
    {
        id:0,
        nameKR:`쿠키 버몬드 스터`,
        nameEN:`Cookie Vermont Ster`,
        imgurl:`images/product/sundae/Cookie Vermont-ster.webp`
    },
    {
        id:0,
        nameKR:`헤이즐넛 벗 초콜릿`,
        nameEN:`Hazel Nuttin' but Chocolate`,
        imgurl:`images/product/sundae/Hazel-nuttin but Chocolate.webp`
    },
    {
        id:0,
        nameKR:`초코로타 치즈케이크`,
        nameEN:`Choco Lotta Cheesecake`,
        imgurl:`images/product/sundae/Choco-lotta Cheesecake.webp`
    },
    {
        id:0,
        nameKR:`둘스 데 리쉬`,
        nameEN:`Dulce De Lish`,
        imgurl:`images/product/sundae/Dulce De Lish.webp`
    },
]
let etc = [
    {
        id:0,
        nameKR:`초콜릿 칩 쿠키 도우 청크`,
        nameEN:`Chocolate Chip Cookie Dough Chunks`,
        imgurl:`images/product/etc/chocolate-chip-cookie-dough-chunks.webp`
    },
    {
        id:0,
        nameKR:`피스 팝`,
        nameEN:`Peace Pop`,
        imgurl:`images/product/etc/peace-pop.webp`
    },
]


function veganIce (){
    let htmlempty = ``;
    for(let i = 0; i<vegan.length; i++){
        htmlempty+= `<li>
        <a href="javascript:void(0)"><div class="img"><img src="./${vegan[i].imgurl}" alt="${vegan[i].nameEN}"></div></a>
                        <div class="product_name">
                            <p class="name_en">${vegan[i].nameEN}</p>
                            <p class="name_ko">${vegan[i].nameKR}</p>
                        </div>
                    </li>`
        veganul.innerHTML = htmlempty;
    }
}
function sundaeIce (){
    let htmlempty = ``;
    for(let i = 0; i<sundae.length; i++){
        htmlempty+= `<li>
        <a href="javascript:void(0)"><div class="img"><img src="./${sundae[i].imgurl}" alt="${sundae[i].nameEN}"></div></a>
                        <div class="product_name">
                            <p class="name_en">${sundae[i].nameEN}</p>
                            <p class="name_ko">${sundae[i].nameKR}</p>
                        </div>
                    </li>`
        sundaeul.innerHTML = htmlempty;
    }
}
function etcIce (){
    let htmlempty = ``;
    for(let i = 0; i<etc.length; i++){
        htmlempty+= `<li>
        <a href="javascript:void(0)"><div class="img"><img src="./${etc[i].imgurl}" alt="${etc[i].nameEN}"></div></a>
                        <div class="product_name">
                            <p class="name_en">${etc[i].nameEN}</p>
                            <p class="name_ko">${etc[i].nameKR}</p>
                        </div>
                    </li>`
        etcul.innerHTML = htmlempty;
    }
}
veganIce();
sundaeIce();
etcIce();