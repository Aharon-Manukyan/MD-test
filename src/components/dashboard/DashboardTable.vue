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
                        <td class="row__name">
                            <img :src="user.img ? user.img : require('@/assets/no_avatar.png')" alt="Avatar">
                            <span>{{ user['business name'] }}</span>
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
                            <img src="@/assets/recycle.svg" alt="recycle">
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
            ],
            currentPage: 1,
            usersPerPage: 3,

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

        thead {
            height: 64px;
            background: #efefef;
            border-radius: 12px;

            tr {
                &>th:first-child {
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;
                }

                &>th:last-child {
                    border-top-right-radius: 12px;
                    border-bottom-right-radius: 12px;
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
            tr td {
                padding: 14px 16px;

                img {
                    width: 36px;
                    height: 36px;
                }

                span {
                    font-family: "Commissioner";
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #2A355A;

                }
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
