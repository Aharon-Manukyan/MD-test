<template>
    <div class="dashboard">

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
    padding: 28px;



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