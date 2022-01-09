<footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__parts">
                    <section class="footer__about">
                        <svg viewBox = "0 0 196 40">
                            <use xlink:href="icons/icons.svg#logo"></use>
                        </svg>
                        <p>© 2021 Sale Media LLC.<br>Все права защищены.</p>
                    </section>
                    <section class="footer__article">
                        <h2>Интересно почитать:</h2>
                        <nav class="footer__articles">
                            <a href="#">Как повысить конверсию</a>
                            <a href="#">9 инструментовки в для повышения продаж</a>
                            <a href="#">20 способовов привлечь клиента</a>
                            <a href="#">Как повысить конверсию</a>
                            <a href="#">9 инструментовки в для повышения продаж</a>
                        </nav>
                    </section>
                </div>
                
                <section class="footer__refs">
                    <h2>Мы в социальных сетях:</h2>
                    <div class="footer__socials">
                        <a href="#">
                            <svg width = "32" height = "32">
                                <use xlink:href="icons/socials/socials.svg#facebook"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width = "32" height = "32">
                                <use xlink:href="icons/socials/socials.svg#vk"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width = "32" height = "32">
                                <use xlink:href="icons/socials/socials.svg#instagram"></use>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    </footer>
    <div class="banner">
        <div class="container">
            <div class="banner__wrapper">
                <div class="banner__parts">
                    <h3>Почему не стоит откладывать<span> создание сайта</span>?</h3>
                    <p><span>Но мы знаем, что раз вы здесь, то вам уже нужен сайт. </span> Поэтому не теряйте время! Пока вы раздумываете, ваши клиенты уходят к конкурентам.</p>
                </div>
                <button class="banner__order contactModalTrigger">заказать сайт</button>
            </div>
            <button class="banner__close">
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
    <div class="write-modal write-modal__hidden">
        <div class="write-modal__wrapper">
            <h2>Напишите нам и мы <span>обязательно</span> поможем вам!</h2>
            <div class="write-modal__socials">
                <a href="#">
                    <svg width = "24" height = "24">
                        <use xlink:href="icons/socials/socials.svg#telegram-sm"></use>
                    </svg>
                    <p>Написать в <span>Telegram</span></p>
                </a>
                <a href="#">
                    <svg width = "24" height = "24">
                        <use xlink:href="icons/socials/socials.svg#whatsapp-sm"></use>
                    </svg>
                    <p>Написать в <span>Whatsapp</span></p>
                </a>
                <a href="#">
                    <svg width = "24" height = "24">
                        <use xlink:href="icons/socials/socials.svg#viber-sm"></use>
                    </svg>
                    <p>Написать в <span>Viber</span></p>
                </a>
            </div>
            <button class="write-modal__close">
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <div class="mobile-banner">
        <button>
            <svg width = "22" height = "22" transform = "scale(1.5)" transform = "translate(3 3)">
                <use xlink:href="icons/socials/socials.svg#whatsapp-sm"></use>
            </svg>
            whatsapp
        </button>
        <button>позвонить</button>
    </div>
    <div class="portfolio-modal portfolio-modal__hidden">
        <div class="portfolio-modal__wrapper">
            <h2><span>Куда</span> отправить портфолио?</h2>
            <div class="portfolio-modal__socials">
                <button>
                    <svg width = "24" height = "24">
                        <use xlink:href="icons/socials/socials.svg#telegram-sm"></use>
                    </svg>
                    telegram
                </button>
                <button>
                    <svg width = "24" height = "24">
                        <use xlink:href="icons/socials/socials.svg#whatsapp-sm"></use>
                    </svg>
                    whatsapp
                </button>
                <button>
                    <svg width = "24" height = "24">
                        <use xlink:href="icons/socials/socials.svg#viber-sm"></use>
                    </svg>
                    viber
                </button>
            </div>
            <button class="portfolio-modal__close">
                <span></span>
                <span></span>
            </button>
            <form action="#">
                <label for="credentials">Укажите имя аккаунта или номер телефона</label>
                <input id="credentials" type="text" placeholder="имя аккаунта или номер телефона">
                <button type="submit">ЗАПРОСИТЬ</button>
            </form>
        </div>
    </div>
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>