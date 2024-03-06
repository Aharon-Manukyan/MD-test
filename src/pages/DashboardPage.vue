<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <div>
                <div>
                    <img src="" alt="">
                </div>
                <div>Team</div>
            </div>
            <div></div>

        </div>
        <section class="dashboard__main">
            <div class="dashboard__main--shorts"></div>
            <div class="dashboard__main--addEmployee"></div>
            <div class="dashboard__main--table table">

            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {

    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &__header {
        width: 100%;
        height: 76px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #FFFFFF;
    }
}
</style>