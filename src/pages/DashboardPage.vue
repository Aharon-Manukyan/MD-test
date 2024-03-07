<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <div class="dashboard__header--menu">
                <div>
                    <img src="@/assets/burger.svg" alt="burger">
                </div>
                <h6>Team</h6>
            </div>
            <div class="dashboard__header--profile">
                <div class="dashboard__header--profile__actions">
                    <img src="@/assets/search.svg" alt="search">
                    <img src="@/assets/notification.svg" alt="notification">
                </div>
                <div class="dashboard__header--profile__menu">
                    <div class="avatar">
                        <img src="@/assets/avatar.png" alt="avatar">
                    </div>
                    <p>Ernest Eberly</p>
                    <div>
                        <img src="@/assets/arrow-down.svg" alt="arrow-down">
                    </div>
                </div>
            </div>

        </div>
        <section class="dashboard__main">
            <ShortsComponent class="dashboard__main--shorts"></ShortsComponent>
            <div class="dashboard__main--addEmployee">
                <button>
                    <img src="@/assets/employee_plus.svg" alt="plus">
                    <span>Add new Employee</span>
                </button>
            </div>
            <DashboardTable class="dashboard__main--table"></DashboardTable>
        </section>
    </div>
</template>

<script>
import ShortsComponent from '@/components/dashboard/ShortsComponent.vue';
import DashboardTable from '@/components/dashboard/DashboardTable.vue';
export default {
    components: {
        ShortsComponent,
        DashboardTable
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    /* header */
    background: #E5E8EF;
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding-bottom: 28px;

    &__header {

        width: calc(100% - 56px);
        padding: 0 28px;
        border-top-right-radius: 15px;
        height: 76px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #FFFFFF;
        align-items: center;

        &--menu {
            display: flex;
            flex-direction: row;
            gap: 10px;
            justify-content: flex-start;
            align-items: center;


            img {
                width: 16px;
                height: 11px;
            }

            h6 {
                font-weight: 500 !important;
                font-family: 'Commissioner' !important;
                font-size: 22px !important;
                line-height: 33px !important;
                color: #2A355A;
                margin: 0 !important;
                padding: 0 !important;
            }
        }

        &--profile {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 20px;

            &__actions,
            &__menu {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }

            &__actions {
                gap: 15px;
            }

            &__menu {
                border-width: 2px;
                border-left: solid #E5E8EF;
                gap: 10px;
                padding-left: 20px;

                p {
                    font-weight: 500;
                    font-family: 'Commissioner';
                    font-size: 14px;
                    line-height: 20px;
                    margin: 0 !important;
                    color: #2A355A;
                }
            }
        }

        .avatar {
            display: flex;


        }
    }

    /* main */
    &__main {
        width: calc(100% - 56px);
        // width: fit-content;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 28px;


        &--addEmployee {
            button {
                border: none;
                display: flex;
                flex-direction: row;
                padding: 14px 16px;
                width: 184px;
                height: 48px;
                justify-content: center;
                align-items: center;
                border-radius: 12px;
                background: #8F20EF;
                color: white;
                cursor: pointer;
                white-space: nowrap;
                gap: 12px;

                span {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                }

                img {
                    // filter: brightness(0) saturate(100%) invert(46%) sepia(28%) saturate(841%) hue-rotate(229deg) brightness(96%) contrast(86%);
                }
            }

        }
    }

}
</style>