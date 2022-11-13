<template>
    <div class="selected-publication-modal">
        <div class="selected-publication-modal__backdrop" @click="this.$emit('closeModal')">
        </div>
        <div class="selected-publication-modal__card">
            <div class="selected-publication-modal__card__left">
                <div class="selected-publication-modal__card__left__top">
                    <div class="selected-publication-modal__card__left__top__close-button" @click="this.$emit('closeModal')">
                        <img src="../static/close.svg" alt="close">
                    </div>
                </div>
                <div class="selected-publication-modal__card__left__content">
                    <div class="selected-publication-modal__card__left__content__title">
                        {{ title }}
                    </div>
                    <div class="selected-publication-modal__card__left__content__meta">
                        <div class="selected-publication-modal__card__left__content__authors">
                            By&nbsp;
                            <div v-for="(author, index) in authors" :key="index" class="selected-publication-modal__card__left__content__authors__author">
                                {{ author }}
                                <span v-if="index < authors.length - 1">,&nbsp;</span>
                            </div>
                        </div>
                        <div class="selected-publication-modal__card__left__content__tags">
                            Keywords&nbsp;
                            <div v-for="(tag, index) in tags" :key="index" class="selected-publication-modal__card__left__content__tags__tag">
                                {{ tag }}
                                <span v-if="index < tags.length - 1">,&nbsp;</span>
                            </div>
                            <div class="selected-publication-modal__card__left__content__tags__tag" v-if="tags.length === 0">
                                No Keywords Were Given
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="selected-publication-modal__card__right">
                <div class="selected-publication-modal__card__right__top">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" @click="openInNewTab(link)"
                    >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 10.5C12.6642 10.5 13 10.1642 13 9.74998L13 0.75C13 0.335787 12.6642 1.68587e-06 12.25 1.3487e-06L3.25 0C2.83579 0 2.5 0.335786 2.5 0.749999C2.5 1.16421 2.83579 1.5 3.25 1.5L10.4393 1.5L0.21967 11.7197C-0.0732233 12.0125 -0.0732234 12.4874 0.21967 12.7803C0.512563 13.0732 0.987437 13.0732 1.28033 12.7803L11.5 2.56066L11.5 9.74998C11.5 10.1642 11.8358 10.5 12.25 10.5Z" fill="#24292F"/>
                    </svg>

                </div>
                <div class="selected-publication-modal__card__right__content">
                    <div v-html="getAbstract" class="selected-publication-modal__card__right__content__abstract">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "publicationModal",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: this.item.title,
            tags: this.item.tags,
            abstract: this.item.abstract,
            authors: this.item.authors,
            link: this.item.link
        }
    },
    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
        openInNewTab(url) {
            window.open(url, '_blank');
        }
    },
    computed: {
        getAbstract() {
            let text = this.abstract
            text = '<span class="selected-publication-modal__card__right__content__title" style="font-weight: 700">Abstract&nbsp;</span>' + text
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, function (url) {
                return '<a href="' + url + '">' + url + '</a>';
            })
        }
    }
}
</script>

<style scoped lang="scss">

@import url("https://use.typekit.net/kqg5gmj.css");


$breakpoint-mobile-small: 360px;
$breakpoint-mobile: 800px;
$breakpoint-tablet-portrait: 1020px;
$breakpoint-tablet-landscape: 1280px;
$breakpoint-small-laptop: 1366px;
$breakpoint-laptop: 1440px;
$container-max-width: 1130px;

$padding: 8px;

$light-background-color: #9D69E0;
$color-line: #9D69E0;

$border-top: 0 -1px 0 0 $color-line;
$border-right: 1px 0 0 0 $color-line;
$border-bottom: 0 1px 0 0 $color-line;
$border-left: -1px 0 0 0 $color-line;
$border-all: 0 0 0 1px $color-line;


@mixin responsive($breakpoint) {
    @media (max-width: $breakpoint) {
        @content
    };
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Aktiv Grotesk', sans-serif;
    font-size: 16px;
    color: #000;
}

.selected-publication-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: $padding*4 $padding*2;

    &__backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(#000, 0.6);
    }

    &__card {
        min-width: 600px;
        width: min-content;
        border-radius: 4px;
        border-radius: 4px;
        overflow-x: hidden;
        flex-shrink: 1;
        display: flex;
        flex-direction: row;
        background: #fff;
        z-index: 15;
        box-shadow: $border-all;
        box-shadow: 0 0 50px 0 #9D69E0, inset 0 0 0 1px #9D69E0;
        @include responsive($breakpoint-mobile) {
            min-width: 100%;
        }

        &__left {
            box-shadow: $border-right;
            width: 33%;
            flex-shrink: 0;
            min-width: 200px;

            &__top {
                display: flex;
                flex-direction: row;

                &__close-button {
                    cursor: pointer;
                    padding-left: $padding;
                    padding-top: $padding;
                }

                box-shadow: $border-bottom;
            }

            &__content {
                padding: $padding*2;
                display: flex;
                flex-direction: column;
                gap: $padding*4;

                &__title {
                    font-weight: 700;
                    font-family: "Aktiv Grotesk", sans-serif;
                }

                &__authors {
                    font-family: "Aktiv Grotesk", sans-serif;
                    color: #000;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    font-weight: 700;

                    &__author {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        font-weight: 400;
                    }
                }

                &__tags {
                    font-family: "Aktiv Grotesk", sans-serif;
                    color: #000;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    font-weight: 700;

                    &__tag {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        font-weight: 400;
                    }

                }
            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            font-family: "Aktiv Grotesk", sans-serif;
            height: 100%;
            width: 600px;

            &__top {
                display: flex;
                flex-direction: row;
                direction: rtl;
                padding-right: 8px;
                padding-top: 8px;
                cursor: pointer;

                &__img {
                    cursor: pointer;
                    padding-right: $padding;
                    padding-top: $padding;


                }
                &:hover {
                    animation: arrow-slide-animation 1s infinite;
                }
            }

            &__content {
                padding: $padding*2;
                display: flex;
                flex-direction: column;
                gap: $padding*4;

                &__title {
                    margin-right: 0.5rem;
                    font-weight: 700;
                }
            }

        }
    }
}

@keyframes arrow-slide-animation {
    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(3px, -3px);
    }
}
</style>