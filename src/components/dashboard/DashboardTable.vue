<template>
    <div class="tableBlock">
        <div class="section">
            <table>
                <thead>
                    <tr class="theadRow">
                        <th v-for="header in headers" :key="header" class="header">
                            <template v-if="header === 'business name' || header === 'gmail'">
                                <div class="header__search">
                                    <div class="header__search--icon icon">
                                        <img src="@/assets/search.svg" alt="search">
                                    </div>
                                    <div class="header__search--body theadText">
                                        <span> {{ capitalizeAllWords(header) }}</span>
                                    </div>
                                    <div class="header__search--actions actions">
                                        <img src="@/assets/arrow-top.svg" alt="top">
                                        <img src="@/assets/arrow-bottom.svg" alt="bottom">
                                    </div>
                                </div>
                            </template>

                            <template v-else-if="header === 'telegram' || header === 'last login'">
                                <div class="header__onlySort">
                                    <div class="header__onlySort--body theadText">
                                        <span> {{ capitalizeAllWords(header) }}</span>
                                    </div>
                                    <div class="header__onlySort--actions actions">
                                        <img src="@/assets/arrow-top.svg" alt="top">
                                        <img src="@/assets/arrow-bottom.svg" alt="bottom">
                                    </div>
                                </div>
                            </template>

                            <template v-else>
                                <div class="header__reset">
                                    <div class="header__reset--left">
                                        <div class="icon">
                                            <img src="@/assets/clear.svg" alt="clear">
                                        </div>
                                        <div class="theadText">
                                            <span> {{ capitalizeAllWords(header) }}</span>
                                        </div>
                                        <div class="actions">
                                            <img src="@/assets/arrow-top.svg" alt="top">
                                            <img src="@/assets/arrow-bottom.svg" alt="bottom">
                                        </div>
                                    </div>
                                    <div class="header__reset--right icon">
                                        <img src="@/assets/arr-down.svg" alt="arr">
                                    </div>
                                </div>
                            </template>
                            <div>

                            </div>
                        </th>
                        <th class="header">
                            <div class="theadText">
                                <span>User permissions</span>
                            </div>
                        </th>
                        <th class="header"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in paginatedUsers" :key="user.id" class="row">
                        <td>
                            <div class="row__name">
                                <img :src="user.img ? user.img : require('@/assets/no_avatar.png')" alt="Avatar">
                                <span>{{ user['business name'] }}</span>
                            </div>
                        </td>
                        <td>
                            <span>{{ user.team }}</span>
                        </td>
                        <td>
                            <span>{{ user.role }}</span>
                        </td>
                        <td>
                            <span>{{ user.gmail }}</span>
                        </td>
                        <td>
                            <span>{{ user.birthday }}</span>
                        </td>
                        <td>
                            <span>{{ user.telegram }}</span>
                        </td>
                        <td>
                            <span>{{ user["last login"] }}</span>
                        </td>
                        <td class="row__edit">
                            <div>
                                <img src="@/assets/pencil.svg" alt="pencil">
                                <span>Edit</span>
                            </div>
                        </td>
                        <td class="row__delete">
                            <div>
                                <img src="@/assets/recycle.svg" alt="recycle">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <DashboardPagination v-if="totalPages > 1" @page-changed="handlePageChange" :currentPage="currentPage"
            :totalPages="totalPages">
        </DashboardPagination>
    </div>


</template>

<script>
import DashboardPagination from './DashboardPagination.vue';
export default {
    components: { DashboardPagination },
    data() {
        return {
            users: [
                {
                    id: 1, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 2, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 3, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 4, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 5, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 6, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 7, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 8, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 9, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 10, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 11, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 12, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 13, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 14, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 15, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 16, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 17, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 18, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 19, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 20, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 21, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 22, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 23, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 24, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 25, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 26, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 27, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 28, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 29, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 30, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 31, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 32, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 33, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 34, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 35, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 36, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 37, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 38, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 39, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 40, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 41, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 42, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 43, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 44, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 45, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 46, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 47, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 48, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 49, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 50, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 51, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 52, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 53, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 54, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 55, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 56, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 57, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 58, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 59, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 60, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
                {
                    id: 61, "business name": "Sarah Conor", img: require('@/assets/avatar1.png'), team: "Crosty", role: "Team Lead", gmail: "sarahconnor@gmail.com", birthday: "25.04.1991", telegram: "@sarahconor", "last login": "03.11.2021"
                },
                {
                    id: 62, "business name": "Arnold Brown", img: "", team: "Gunters", role: "Seo Specialist", gmail: "arnoldbrown@gmail.com", birthday: "12.04.1989", telegram: "@arnoldbrown", "last login": "02.11.2021"
                },
                {
                    id: 63, "business name": "Ernest Eberly", img: require('@/assets/avatar2.png'), team: "Flamethrower", role: "Semantic Specialist", gmail: "ernesteberly@gmail.com", birthday: "17.06.1993", telegram: "@ErnestEberly", "last login": "03.11.2021"
                },
                {
                    id: 64, "business name": "Lance Thomas", img: "", team: "Wizards", role: "Seo Specialist", gmail: "lancethomas@gmail.com", birthday: "12.04.1989", telegram: "@LanceThomas", "last login": "01.11.2021"
                },
            ],
            currentPage: 1,
            usersPerPage: 9,

        }
    },
    computed: {
        headers() {
            return this.users.length ? Object.keys(this.users[0]).filter(el => el !== 'id' && el !== 'img') : []
        },
        totalPages() {
            return Math.ceil(this.users.length / this.usersPerPage);
        },
        paginatedUsers() {
            const startIndex = (this.currentPage - 1) * this.usersPerPage;
            const endIndex = startIndex + this.usersPerPage;
            return this.users.slice(startIndex, endIndex);
        }
    },
    methods: {
        capitalizeAllWords(str) {
            const words = str.split(" ");

            const capitalizedWords = words.map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });

            return capitalizedWords.join(' ');
        },
        handlePageChange(page) {
            this.currentPage = page;
        }
    }
}
</script>

<style lang="scss" scoped>
.tableBlock {
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    .section {
        border-radius: 12px;
        padding: 16px;
        background: #fff;
    }

    .section table {
        width: 100%;
        border-spacing: 0px !important;

        thead {
            background: #efefef;
            border-radius: 12px;

            tr {
                &>th {
                    border-right: 1px solid #E5E8EF;
                }

                &>th:first-child {
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;
                }

                &>th:last-child {
                    border-top-right-radius: 12px;
                    border-bottom-right-radius: 12px;
                    border-right: reset !important;
                }

                .header {
                    padding: 22px 16px;

                    .theadText {
                        span {
                            font-family: "Commissioner";
                            font-weight: 500;
                            font-size: 12px;
                            line-height: 15.6px;
                            color: #2A355A;
                        }
                    }

                    .icon {
                        width: 20px;
                        height: 20px;

                        img {
                            width: 100%;
                        }
                    }

                    .actions {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 4px;

                        img {
                            cursor: pointer;
                        }
                    }

                    &__search,
                    &__onlySort {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        gap: 4px;
                        align-items: center;
                        min-height: 20px;
                    }


                    &__reset {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;

                        &--left {
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-start;
                            align-items: center;
                            gap: 4px;
                        }
                    }


                }
            }
        }

        tbody {


            tr {
                border-bottom: 1px solid red;

                td {
                    padding: 14px 16px;

                    img {
                        width: 36px;
                        height: 36px;
                    }
                }

                span {
                    font-family: "Commissioner";
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #2A355A;

                }
            }

            tr td {
                border-bottom: 1px solid #F5F7FB;
            }

            &>tr:last-child td {
                border-bottom: 0px solid #F5F7FB;
            }

            .row {
                &__name {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    justify-content: flex-start;
                    align-items: center;
                }

                &__delete {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    // height: 64px;

                    div {
                        padding: 7px 0px;
                    }

                    img {
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                    }
                }

                &__edit {
                    div {
                        display: flex;
                        width: 48px;
                        padding: 8px 14px;
                        border: 1px solid #E5E8EF;
                        gap: 8px;
                        border-radius: 8px;
                    }

                    img {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
    }

}
</style>
