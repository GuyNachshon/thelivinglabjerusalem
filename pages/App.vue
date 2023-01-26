<template>
    <div class="app">
        <publication-modal class="publication_modal" v-if="publicationModalItem" :item="publicationModalItem" @click="activeHoursModal" @closeModal="closeModal"></publication-modal>
        <div class="section__black">
            <div class="navbar">
                <div class="navbar__link" @click="scrollMeTo('pastRes')">מחקרים</div>
                <div class="navbar__link" @click="scrollMeTo('findings')">ממצאים</div>
                <div class="navbar__link" @click="scrollMeTo('us')">עלינו</div>
                <div class="navbar__link" @click="scrollMeTo('publications')">פרסומים</div>
                <div class="navbar__link" @mouseover.native="activeHours" @mouseout.native="activeHoursModal = false">
                    שעות פעילות
                    <open-hours-modal v-if="activeHoursModal"></open-hours-modal>
                </div>
                <div class="navbar__link" @click="openInNewTab('https://mada.smarticket.co.il/')">למוזיאון</div>
                <div class="navbar__link" @click="scrollMeTo('us')">צרו קשר</div>
            </div>
            <div class="landing">
                <div class="landing__hebrew">
                    <div class="landing__hebrew__title">המעבדה הפתוחה</div>
                </div>
                <div class="landing__english">
                    <div class="landing__english__title">The Living Lab</div>
                    <div class="landing__english__subtitle">פרוייקט מחקר מדעי לכל המשפחה
                        ביוזמת האוניברסיטה העברית ומוזיאון
                        המדע ע"ש בלומפילד בירושלים,<br> לזכרו של נעם כנפו
                    </div>
                </div>
                <div class="landing__arabic">
                    <div class="landing__arabic__buy_tickets" @click="openInNewTab('https://mada.smarticket.co.il/')">לקניית כרטיסים למוזיאון המדע</div>
                    <div class="landing__arabic__title">المختبر المفتوح</div>

                </div>
            </div>
        </div>
        <div class="section__white">
            <div class="visit-us">בואו לבקר אותנו!<br> ימי שישי 10:00 עד 14:00 או במהלך חופשות החגים</div>
            <div ref="about" class="about">
                <div class="about__content">
                    <div class="about__content__text">
                        במעבדה הפתוחה אנחנו חוקרים כיצד ילדים מבינים את העולם מסביבם,
                        כיצד הם מתפתחים, לומדים, מתקשרים זה עם זה ורוכשים שפה.
                        כל מבקרי המוזיאון מוזמנים לבקר במעבדה כדי ללמוד על עולמם הקוגניטיבי של ילדים,
                        לדבר עם חוקרים וכמובן להשתתף במחקר מדעי קצר, חוויתי ונושא פרסים!
                    </div>
                    <div class="about__content__more">
                        <svg width="150" height="250" viewBox="0 0 150 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="logo_prpl" width="50" height="250"/>
                            <rect class="logo_prpl" x="50" y="200" width="100" height="50"/>
                            <rect class="logo_trqz" x="100" y="1" width="50" height="150"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div ref="pastRes" class="past_research">
                <div class="past_research__title">מחקרי עבר</div>
                <div class="past_research__items">
                    <div class="past_research__items__button_cont">
                        <div class="past_research__items__button_cont__button">על המחקר</div>
                    </div>
                    <div class="past_research__items__grid">
                        <div v-for="item in pastResearchItems" class="past_research__items__grid__item" :id="item.id">
                            <div class="past_research__items__grid__item__details">
                                <div class="past_research__items__grid__item__details__title">
                                    {{ item.name }}
                                </div>
                                <div class="past_research__items__grid__item__details__box">
                                    <div class="past_research__items__grid__item__details__description">
                                        {{ item.description }}
                                    </div>
                                    <div class="past_research__items__grid__item__details__goal" v-if="item.goal">
                                        מטרה:<br><br>
                                        {{ item.goal }}
                                    </div>
                                </div>
                            </div>
                            <div class="past_research__items__grid__item__picture_cont">
                                <img :src="item.image" class="past_research__items__grid__item__picture_cont__pic"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref="findings" class="findings">
                <div class="findings__items">
                    <div class="findings__items__button_cont">
                        <div class="findings__items__button_cont__button">לכל הממצאים</div>
                    </div>
                    <div class="findings__items__grid">
                        <div class="findings__items__grid__gap"></div>
                        <div class="findings__items__grid__cont">
                            <div v-for="(item, index) in Object.values(findings)" class="findings__items__grid__cont__item_left" v-show="index % 2 !== 0">
                                <div class="findings__items__grid__cont__item_left__details">
                                    <div class="findings__items__grid__cont__item_left__details__title">
                                        {{ item.name }}
                                    </div>
                                    <div class="findings__items__grid__cont__item_left__details__box">
                                        <div class="findings__items__grid__cont__item_left__details__description">
                                            {{ item.description }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-for="(item, index) in Object.values(findings)" class="findings__items__grid__cont__item_right" v-show="index % 2 === 0">
                                <div class="findings__items__grid__cont__item_right__details">
                                    <div class="findings__items__grid__cont__item_right__details__title">
                                        {{ item.name }}
                                    </div>
                                    <div class="findings__items__grid__cont__item_right__details__box">
                                        <div class="findings__items__grid__cont__item_right__details__description">
                                            {{ item.description }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__black">
            <div ref="publications" class="publications">
                <div class="publications__title">פרסומים</div>
                <kinesis-container class="publications__items">
                    <kinesis-element @click="openPublicationModal(publication)" @closeModal="publicationModalItem = false" class="publications__items__item" :strength="Math.random() * 14 + 2" v-for="publication in publications">{{ publication.name }}</kinesis-element>
                </kinesis-container>
            </div>
            <div ref="us" class="us">
                <div class="us__top">
                    <div class="us__top__title">עלינו</div>
                    <div class="us__top__description">המעבדה הפתוחה הוקמה בשיתוף בין פרופ' ענבל ארנון ופרופ' אריאל כנפו. המעבדה מורכבת מצוות של חוקרים וחוקרות מהחוג לפסיכולוגיה באוניברסיטה העברית, בהפעלת צוות סטודנטים וסטודנטיות מסור ובתמיכת צוות מוזיאון המדע בירושלים.</div>
                </div>
                <div class="us__main">
                    <div class="us__main__button_cont">
                        <div class="us__main__button_cont__button" @click="sendEmail">דברו איתנו</div>
                    </div>
                    <div class="us__main__grid">
                        <div class="us__main__grid__gap"></div>
                        <div class="us__main__grid__cont">
                            <div class="us__main__grid__cont__two_items">
                                <div class="us__main__grid__cont__two_items__item__big" id="participants">
                                    <div class="us__main__grid__cont__two_items__item__title">משתתפים</div>
                                    <div class="us__main__grid__cont__two_items__item__data">{{ numOfParticipants }}</div>
                                </div>
                                <div class="us__main__grid__cont__two_items__item" id="circa">
                                    <div class="us__main__grid__cont__two_items__item__title">שנת הקמה</div>
                                    <div class="us__main__grid__cont__two_items__item__data">{{ numOfCirca }}</div>
                                </div>
                            </div>
                            <div class="us__main__grid__cont__three_items">
                                <div class="us__main__grid__cont__three_items__item" id="publications">
                                    <div class="us__main__grid__cont__three_items__item__title">מאמרים</div>
                                    <div class="us__main__grid__cont__three_items__item__data">{{ numOfPublications }}</div>
                                </div>
                                <div class="us__main__grid__cont__three_items__item" id="youngest">
                                    <div class="us__main__grid__cont__three_items__item__title">המשתתפת הצעירה ביותר</div>
                                    <div class="us__main__grid__cont__three_items__item__data">
                                        <div class="us__main__grid__cont__three_items__item__data__number">{{ numOfYoungest }}</div>
                                        <div class="us__main__grid__cont__three_items__item__data__months">חודשים</div>

                                    </div>
                                </div>
                                <div class="us__main__grid__cont__three_items__item" id="researches">
                                    <div class="us__main__grid__cont__three_items__item__title">מחקרים</div>
                                    <div class="us__main__grid__cont__three_items__item__data">{{ numOfResearches }}</div>
                                </div>
                            </div>
                            <div class="us__main__grid__cont__two_items" id="multilang">
                                <div class="us__main__grid__cont__two_items__item__big">
                                    <div class="us__main__grid__cont__two_items__item__title">משתתפים רב לשוניים</div>
                                    <div class="us__main__grid__cont__two_items__item__data">{{ numOfMultilang }}</div>
                                </div>
                                <div class="us__main__grid__cont__two_items__item" id="conventions">
                                    <div class="us__main__grid__cont__two_items__item__title">כנסים</div>
                                    <div class="us__main__grid__cont__two_items__item__data">{{ numOfConventions }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="researchers" ref="researchers">
            <div class="researchers__title">
                החוקרים
            </div>
            <div class="researchers__items">
                <div class="researchers__items__item" v-for="researcher in researchers" @click="openInNewTab(researcher.website)">
                    <div class="researchers__items__item__image_cont">
                        <img :src="researcher.image" class="researchers__items__item__image_cont__picture" alt=""/>
                    </div>
                    <div class="researchers__items__item__details">
                        <div class="researchers__items__item__details__name"> {{ researcher.name }}</div>
                        <div class="researchers__items__item__details__description">{{ researcher.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pastRes from '../past-research.json'
import findings from '../findings.json'
import publications from '../publications.json'
import researchers from '../researchers.json'
import us from '../us.json'
import publicationModal from "./publicationModal.vue";
import openHoursModal from "./openHoursModal.vue";

export default {
    name: 'App',
    data() {
        return {
            pastResearch: pastRes,
            findings: findings,
            publications: publications,
            researchers: researchers,
            us: us,
            publicationModalItem: false,
            activeHoursModal: false,
            numOfParticipants: 0,
            numOfResearches: 0,
            numOfPublications: 0,
            numOfCirca: 1900,
            numOfYoungest: 0,
            numOfMultilang: 0,
            numOfConventions: 0,
            chocolateCoinsObserver: false,
            chocolateCoinsObserverRun: false,
            participantsObsrv: false,
            participantsObsrvRun: false,
            researchesObsrv: false,
            researchesObsrvRun: false,
            publicationsObsrv: false,
            publicationsObsrvRun: false,
            circaObsrv: false,
            circaObsrvRun: false,
            youngestObsrv: false,
            youngestObsrvRun: false,
            multilangObsrv: false,
            multilangObsrvRun: false,
            conventionsObsrv: false,
            conventionsObsrvRun: false,

        }
    },
    components: {'publication-modal': publicationModal, 'open-hours-modal': openHoursModal},
    methods: {
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            element.scrollIntoView({behavior: 'smooth'});
        },
        sendEmail() {
            window.location = 'mailto:test@example.com'
        },
        openPublicationModal(publication) {
            let link, authors, abstract, tags, title;
            link = publication.link;
            authors = publication.authors;
            abstract = publication.abstract;
            tags = publication.tags;
            title = publication.title;

            document.body.style =
                "overflow-y:hidden; position: relative; margin-right: var($widthReflow);";

            this.publicationModalItem = {
                link,
                authors,
                abstract,
                tags,
                title
            }
        },
        closeModal() {
            document.body.style = "overflow-y:visible; position: static; margin-right: 0;";

            this.publicationModalItem = false;
        },
        activeHours() {
            this.activeHoursModal = true;
        },
        openInNewTab(url) {
            window.open(url, '_blank');
        }
    },
    computed: {
        pastResearchItems() {
            return Object.values(this.pastResearch)
        },
    },
    mounted() {
        const chocolateCoins = document.querySelector('#chocolate-coins');
        const fairness = document.querySelector('#fairness');
        const values = document.querySelector('#values');
        const eyeLanguage = document.querySelector('#eye-language');
        const research_button = document.querySelector('.past_research__items__button_cont__button');
        const participants = document.querySelector('#participants');
        const circa = document.querySelector('#circa');
        const publications = document.querySelector('#publications');
        const researches = document.querySelector('#researches');
        const youngest = document.querySelector('#youngest');
        const multilang = document.querySelector('#multilang');
        const conventions = document.querySelector('#conventions');
        const logo_prpl = document.querySelectorAll('.logo_prpl');
        const logo_trqz = document.querySelectorAll('.logo_trqz');

        this.participantsObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.participantsObsrvRun = true;
                let isRunning = false
                let finalNum = this.us['משתתפים']
                finalNum = Number(this.us['משתתפים'].replace('+', '').replace(',', ''))
                let currNum = 0
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfParticipants = this.us['משתתפים']
                            return
                        }
                        this.numOfParticipants = currNum;
                        currNum += Math.ceil(Math.random() * 100)
                    }, 1);
                }
                this.isRunning = !this.isRunning
            }
        });
        this.circaObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.circaObsrvRun = true
                let isRunning = false
                let finalNum = this.us['שנת הקמה']
                let currNum = 1900
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfCirca = this.us['שנת הקמה']
                            return
                        }
                        this.numOfCirca = currNum;
                        currNum += Math.ceil(Math.random() * 10)
                    }, 10);
                }
                this.isRunning = !this.isRunning
            }
        });
        this.publicationsObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.publicationsObsrvRun = true
                let isRunning = false
                let finalNum = this.us['מאמרים']
                let currNum = 0
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfPublications = this.us['מאמרים']
                            return
                        }
                        this.numOfPublications = currNum;
                        currNum += Math.ceil(Math.random() * 2)
                    }, 20);
                }
                this.isRunning = !this.isRunning
            }
        });
        this.researchesObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.researchesObsrvRun = true
                let isRunning = false
                let finalNum = this.us['מחקרים']
                let currNum = 0
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfResearches = this.us['מחקרים']
                            return
                        }
                        this.numOfResearches = currNum;
                        currNum += Math.ceil(Math.random() * 5)
                    }, 10);
                }
                this.isRunning = !this.isRunning
            }
        });
        this.youngestObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.youngestObsrvRun = true
                let isRunning = false
                let finalNum = this.us['המשתתפת הצעירה ביותר']

                let currNum = 0
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfYoungest = this.us['המשתתפת הצעירה ביותר']
                            return
                        }
                        this.numOfYoungest = currNum;
                        currNum += Math.ceil(Math.random() * 1)
                    }, 10);
                }
                this.isRunning = !this.isRunning
            }
        });
        this.multilangObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.multilangObsrvRun = true
                let isRunning = false
                let finalNum = this.us['משתתפים רב לשוניים']
                finalNum = Number(this.us['משתתפים רב לשוניים'].replace('+', '').replace(',', ''))
                let currNum = 0
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfMultilang = this.us['משתתפים רב לשוניים']
                            return
                        }
                        this.numOfMultilang = currNum;
                        currNum += Math.ceil(Math.random() * 5)
                    }, 1);
                }
                this.isRunning = !this.isRunning
            }
        });
        this.conventionsObsrv = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.conventionsObsrvRun = true
                let isRunning = false
                let finalNum = this.us['כנסים']

                let currNum = 0
                if (isRunning) {
                    clearInterval(this.interval);
                } else {
                    this.interval = setInterval(() => {
                        if (currNum >= finalNum) {
                            isRunning = true;
                            this.numOfConventions = this.us['כנסים']
                            return
                        }
                        this.numOfConventions = currNum;
                        currNum += Math.ceil(Math.random() * 5)
                    }, 10);
                }
                this.isRunning = !this.isRunning
            }
        });

        let prpl = [157, 105, 224]
        let trqz = [110, 196, 194]
        let lastScrollPos = 0
        let scrollDirection = 'down'
        document.addEventListener('scroll', () => {

            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollPos) {
                scrollDirection = 'down'
            } else {
                scrollDirection = 'up'
            }

            if (window.scrollY >= fairness.offsetTop) {
                research_button.textContent = pastRes['fairness']['description'];
            }
            if (window.scrollY >= values.offsetTop) {
                research_button.textContent = pastRes['values']['description'];
            }
            if (window.scrollY >= eyeLanguage.offsetTop) {
                research_button.textContent = pastRes['eye-language']['description'];
            }
            if (400 <= window.scrollY <= 1700) {
                prpl.map((color) => {
                    color += scrollDirection === "up" ? 1 : -1
                })
                trqz.map((color) => {
                    color += scrollDirection === "up" ? 1 : -1
                })
                logo_prpl.forEach((logo) => {
                    logo.style.fill = `rgb(${prpl[0]}, ${prpl[1]}, ${prpl[2]})`
                })
                logo_trqz.forEach((logo) => {
                    logo.style.fill = `rgb(${trqz[0]}, ${trqz[1]}, ${trqz[2]})`
                })

            }


        });

        this.chocolateCoinsObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                research_button.textContent = pastRes['chocolate-coins']['description'];
            }
        });

        this.chocolateCoinsObserver.observe(chocolateCoins);
        this.participantsObsrv.observe(participants)
        this.circaObsrv.observe(circa)
        this.publicationsObsrv.observe(publications)
        this.researchesObsrv.observe(researches)
        this.youngestObsrv.observe(youngest)
        this.multilangObsrv.observe(multilang)
        this.conventionsObsrv.observe(conventions)
    },
    watch: {
        chocolateCoinsObserverRun: function () {
            if (this.chocolateCoinsObserverRun) {
                const chocolateCoins = document.querySelector('#chocolate-coins');
                this.chocolateCoinsObserver.unobserve(chocolateCoins);
            }
        },
        participantsObsrvRun: function () {
            if (this.participantsObsrvRun) {
                const participants = document.querySelector('#participants');
                this.participantsObsrv.unobserve(participants);
            }
        },
        circaObsrvRun: function () {
            if (this.circaObsrvRun) {
                const circa = document.querySelector('#circa');
                this.circaObsrv.unobserve(circa);
            }
        },
        publicationsObsrvRun: function () {
            if (this.publicationsObsrvRun) {
                const publications = document.querySelector('#publications');
                this.publicationsObsrv.unobserve(publications);
            }
        },
        researchesObsrvRun: function () {
            if (this.researchesObsrvRun) {
                const researches = document.querySelector('#researches');
                this.researchesObsrv.unobserve(researches);
            }
        },
        youngestObsrvRun: function () {
            if (this.youngestObsrvRun) {
                const youngest = document.querySelector('#youngest');
                this.youngestObsrv.unobserve(youngest);
            }
        },
        multilangObsrvRun: function () {
            if (this.multilangObsrvRun) {
                const multilang = document.querySelector('#multilang');
                this.multilangObsrv.unobserve(multilang);
            }
        },
        conventionsObsrvRun: function () {
            if (this.conventionsObsrvRun) {
                const conventions = document.querySelector('#conventions');
                this.conventionsObsrv.unobserve(conventions);
            }
        }
    }
}
</script>


<style scoped lang="scss">
@import url("https://use.typekit.net/kqg5gmj.css");

$color-background: #151515;
$color-button: #9D69E0;
$color-line: #e0e0e0;

$title-size-desktop: 180px;
$title-size-laptop: 120px;
$text_level_5: 20px;

$padding-level-3: 20px;

$font-family-heb: "aktiv grotesk hebr", sans-serif;
$font-family-en: "aktiv grotesk", sans-serif;
$font-family-arb: "aktiv grotesk arabic", sans-serif;

$border-top: 0 -1px 0 0 $color-line;
$border-right: 1px 0 0 0 $color-line;
$border-bottom: 0 1px 0 0 $color-line;
$border-left: -1px 0 0 0 $color-line;
$border-all: 0 0 0 1px $color-line;
$border-all-glow: 0 0 0 1px #9D69E0;

$screen-breakpoint-mobile: 500px;
$screen-breakpoint-tablet-portrait: 800px;
$screen-breakpoint-tablet-landscape: 1268px;
$screen-breakpoint-laptop: 1440px;

@mixin responsive($breakpoint) {
    @media (max-width: $breakpoint) {
        @content
    };
}


@mixin show-on-breakpoint($breakpoint) {
    display: none;

    @include responsive($breakpoint) {
        display: inherit;
    }
}

@mixin hide-on-breakpoint($breakpoint) {
    @include responsive($breakpoint) {
        display: none;
    }
}


@mixin defuse-links($color, $text-decoration: none) {
    text-decoration: $text-decoration;
    color: $color;

    &:active, &:visited, &:link, &:hover {
        color: $color;
    }
}

@media only screen and (min-width: 992px) {
    body {
        $widthReflow: 15px;
    }
}

@media only screen and (max-width: 991px) {
    body {
        $widthReflow: 0px;
    }
}

* {
    box-sizing: border-box;
}

html, body {
    cursor: none;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section {
    &__black {
        padding: 70px 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $color-background;
    }

    &__white {
        padding: 70px 100px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
    }
}

.navbar {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 700px;

    &__link {
        font-family: "Aktiv Grotesk Hebr", sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: $text_level_5;
        color: white;
        cursor: pointer;
    }
}

.landing {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: 600px;
    background: url(../static/gradient_cover.png) 0 0 / cover no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &__hebrew {
        font-family: "aktiv grotesk hebr", sans-serif;
        font-weight: 900;
        font-style: normal;
        font-size: $title-size-desktop;
        text-align: right;
        display: flex;
        width: 100%;
        justify-content: right;

        animation: moveOnScroll 1s infinite linear;
        animation-play-state: paused;
        animation-delay: calc(var(--scroll) * -1s);

        animation-iteration-count: 1;
        animation-fill-mode: both;

        @keyframes moveOnScroll {

        }

        @include responsive($screen-breakpoint-laptop) {
            font-size: $title-size-laptop;
        }

        &__title {

        }
    }

    &__english {
        font-family: "Aktiv Grotesk", sans-serif;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        &__title {
            font-family: "Aktiv Grotesk", sans-serif;
            font-size: $title-size-desktop;
            font-weight: 900;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
            flex-wrap: nowrap;

            @include responsive($screen-breakpoint-laptop) {
                font-size: $title-size-laptop;
            }
        }

        &__subtitle {
            direction: rtl;
            font-family: "Aktiv Grotesk Hebr", sans-serif;
            font-size: $text_level_5;
            font-weight: 300;
            width: 400px;
            text-align: right;

            @include responsive($screen-breakpoint-laptop) {
                width: 300px;
            }
        }
    }

    &__arabic {
        font-family: aktiv-grotesk-arabic, sans-serif;
        font-size: $title-size-desktop;
        font-weight: 900;
        text-align: right;
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        &__buy_tickets {
            font-family: "Aktiv Grotesk", sans-serif;
            margin-top: 40px;
            padding: 20px;
            box-shadow: $border-all;
            border-radius: 50px;
            font-size: $text_level_5;
            font-weight: 700;
            color: #fff;
            text-align: center;
            direction: rtl;
            height: 100%;
            transition: all 0.1s ease-in-out;

            &:hover {
                cursor: pointer;
                background-color: rgba(100, 100, 5, 0.1);
            }
        }


        @include responsive($screen-breakpoint-laptop) {
            font-size: $title-size-laptop;
        }

        &__title {

        }
    }



}

.visit-us {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    direction: rtl;

    background: url(../static/gradient_cover.png) 0 0 / cover no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about {
    background-color: #fff;

    &__content {
        margin-top: 100px;
        height: 300px;
        display: flex;
        flex-direction: row;
        place-content: center;
        box-shadow: $border-top;
        font-family: "Aktiv Grotesk Hebr", sans-serif;

        &__text {
            padding: 50px;
            flex-grow: 2;
            text-align: right;
            width: 25%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            direction: rtl;
            font-size: 32px;
            font-weight: 400;
        }

        &__more {
            text-align: center;
            width: 25%;
            display: flex;
            align-items: flex-start;
            padding: 50px 0 50px 50px;
            box-shadow: $border-left;
            justify-content: center;


            &__button {
                background: $color-button;
                border-radius: 100px;
                color: #fff;
                width: 100%;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
            }
        }
    }
}

.past_research {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    width: 100%;


    &__title {
        direction: rtl;
        font-size: $title-size-desktop;
        font-family: "Aktiv Grotesk Hebr", sans-serif;
        font-weight: 700;
        display: flex;
        justify-content: flex-start;
    }

    &__items {

        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
        width: 100%;
        box-shadow: $border-top;

        &__button_cont {
            position: sticky;
            top: 0;
            width: 33%;
            display: flex;
            padding: 50px 0 50px 50px;
            min-width: 260px;
            height: 100%;

            &__button {
                font-family: "Aktiv Grotesk Hebr", sans-serif;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                font-size: 20px;
                background: $color-button;
                border-radius: 20px;
                direction: rtl;
                color: #fff;
                //height: 70px;
                width: 100%;
            }
        }

        &__grid {
            flex-grow: 2;

            &__item {
                display: flex;
                flex-direction: row-reverse;
                box-shadow: $border-top, $border-right;

                &__details {
                    padding: 50px;
                    text-align: right;
                    direction: rtl;

                    &__title {
                        font-family: "Aktiv Grotesk Hebr", sans-serif;
                        font-size: 40px;
                    }

                    &__box {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-family: "Aktiv Grotesk", sans-serif;
                        height: 100%;
                        padding: 100px 0;

                        &__description {
                            padding: 50px 0;
                            font-family: "Aktiv Grotesk", sans-serif;
                            font-size: 20px;
                            font-weight: 400;
                            width: 450px;
                        }

                        &__goal {
                            font-family: "Aktiv Grotesk", sans-serif;
                            font-size: 20px;
                            font-weight: 400;
                            width: 450px;
                        }
                    }

                }

                &__picture_cont {
                    padding: 50px 50px 50px 0;
                    box-shadow: $border-right;
                    &__pic {
                        height: 500px;

                    }
                }
            }

        }


    }

}

.findings {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__items {

        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
        width: 100%;
        box-shadow: $border-top;

        &__button_cont {
            position: sticky;
            top: 0;
            width: 33%;
            min-width: 200px;
            display: flex;
            padding: 50px 0 50px 50px;

            &__button {
                font-family: "Aktiv Grotesk Hebr", sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                font-size: 20px;
                background: $color-button;
                border-radius: 100px;
                color: #fff;
                height: 70px;
                width: 100%;
            }
        }

        &__grid {
            flex-grow: 2;
            box-shadow: $border-left, $border-right;

            &__gap {
                height: 200px;
            }

            &__cont {
                display: flex;
                flex-direction: row-reverse;
                direction: rtl;

                &__item_left {
                    padding-top: 100px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: $border-right;

                    &__details {
                        padding: 100px;

                        &__title {
                            font-family: $font-family-heb;
                            font-weight: 700;
                            font-size: 20px;
                            padding-bottom: 20px;
                            box-shadow: $border-bottom;
                        }

                        &__box {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            font-family: "Aktiv Grotesk", sans-serif;
                            height: 100%;
                            padding: 20px 0;

                            &__description {
                                font-family: "Aktiv Grotesk", sans-serif;
                                font-size: 20px;
                                font-weight: 400;
                                width: 450px;
                            }

                        }
                    }


                }

                &__item_right {
                    padding-top: 0;
                    display: flex;
                    flex-direction: column;
                    box-shadow: $border-right;

                    &__details {
                        padding: 100px;

                        &__title {
                            font-family: $font-family-heb;
                            font-weight: 700;
                            font-size: 20px;
                            padding-bottom: 20px;
                            box-shadow: $border-bottom;
                        }

                        &__box {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            font-family: "Aktiv Grotesk", sans-serif;
                            height: 100%;
                            padding: 20px 0;

                            &__description {
                                font-family: "Aktiv Grotesk", sans-serif;
                                font-size: 20px;
                                font-weight: 400;
                                width: 450px;
                            }

                        }
                    }


                }


            }


        }


    }

}

.publications {
    width: 100%;

    &__title {
        direction: rtl;
        font-size: $title-size-desktop;
        font-family: "Aktiv Grotesk Hebr", sans-serif;
        font-weight: 700;
        display: flex;
        justify-content: flex-start;
        color: #fff;
    }

    &__items {
        padding-top: 40px;
        color: #fff;
        width: 100%;
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &__item {
            font-family: "Aktiv Grotesk Hebr", sans-serif;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: max-content;
            padding: 20px;
            border: 1px solid #fff;
            border-radius: 50px;
            cursor: pointer;

            &:hover {
                animation: slide 3s infinite linear;
                background: url(../static/gradient_cover.png) 0 0 / cover no-repeat;
                background-size: 400%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            @keyframes slide {
                0% {
                    background-position: 10%;
                }
                50% {
                    background-position: 100%;
                }
                100% {
                    background-position: 0; /* The image width */
                }
            }
        }

    }
}

.us {
    &__top {
        display: flex;
        direction: rtl;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 70px;
        padding-bottom: 70px;
        box-shadow: $border-bottom;

        &__title {
            font-family: "Aktiv Grotesk Hebr", sans-serif;
            font-size: $title-size-desktop;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }

        &__description {
            font-family: "Aktiv Grotesk", sans-serif;
            font-size: 20px;
            font-weight: 400;
            display: flex;
            justify-content: center;
            color: #fff;
            max-width: 1300px;
        }
    }

    &__main {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: flex-start;

        &__button_cont {
            position: sticky;
            top: 0;
            width: 33%;
            display: flex;
            padding: 50px 50px 50px 0;
            min-width: 180px;

            &__button {
                font-family: "Aktiv Grotesk Hebr", sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                font-size: 20px;
                background: $color-button;
                border-radius: 100px;
                color: #fff;
                height: 70px;
                width: 100%;
                cursor: pointer;
            }
        }

        &__grid {
            flex-grow: 2;
            box-shadow: $border-left;
            width: 100%;

            &__gap {
                height: 200px;
            }

            &__cont {
                display: flex;
                flex-direction: column;
                direction: rtl;
                justify-content: space-around;
                align-items: flex-start;
                flex-wrap: wrap;
                color: #fff;
                font-family: "Aktiv Grotesk Hebr", sans-serif;

                &__two_items {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-between;
                    box-shadow: $border-bottom;

                    &__item {
                        padding: 20px 20px 0 20px;
                        width: 33%;

                        &__data {
                            direction: rtl;
                            font-size: 100px;
                        }

                        &__big {
                            padding: 20px 20px 0 20px;
                            box-shadow: $border-left;
                            width: 66%;

                        }
                    }
                }

                &__three_items {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    box-shadow: $border-bottom;

                    &__item {
                        padding: 20px 20px 0 20px;
                        width: 33%;
                        display: flex;
                        flex-direction: column;

                        &__data {
                            direction: rtl;
                            font-size: 100px;
                            display: flex;
                            flex-direction: row;
                            align-items: baseline;

                            &__months {
                                font-size: 20px;
                            }
                        }

                        &:nth-child(1), &:nth-child(2) {
                            box-shadow: $border-left;
                        }
                    }
                }


            }
        }
    }
}

.researchers {

    display: flex;
    flex-direction: column;
    padding: 40px 200px;
    width: 100%;


    &__title {
        font-family: "Aktiv Grotesk Hebr", sans-serif;
        font-size: $title-size-desktop;
        direction: rtl;
        font-weight: 700;
        padding-bottom: 20px;
    }

    &__items {
        display: grid;
        grid-template-columns: 1fr 1fr;


        &__item {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            direction: rtl;


            &__image_cont {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                height: 200px;
                width: 200px;
                margin: 20px;
                overflow: hidden;
                background: url(../static/gradient_cover.png) 0 0 / cover no-repeat;
                cursor: url("../static/cursor.svg"), auto;

                &__picture {
                    width: 200px;
                    display: flex;
                }
            }

            &__details {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                cursor: url("../static/cursor.svg"), auto;

                &__name {
                    font-family: "Aktiv Grotesk Hebr", sans-serif;
                    font-size: 18px;
                    font-weight: 700;
                    padding-bottom: 4px;

                }

                &__description {
                    font-family: "Aktiv Grotesk hebr", sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
}

.logo_prpl {
    fill: rgb(157, 105, 224);
}

.logo_trqz {
    fill: rgb(110, 196, 194)
}

</style>
