<template>
    <div class="navbar">
        <div class="navbar--menu">
            <div>
                <img src="@/assets/burger.svg" alt="burger">
            </div>
            <h6>Team</h6>
        </div>
        <div class="navbar--profile">
            <div class="navbar--profile__actions">
                <img src="@/assets/search.svg" alt="search">
                <img src="@/assets/notification.svg" alt="notification">
            </div>
            <div class="navbar--profile__menu">
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
</template>

<style lang="scss" scoped>
.navbar {
    width: calc(100% - 56px);
    padding: 0 28px;
    border-top-right-radius: 15px;
    height: 76px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(to right, #2A355A0A 0%, #2A355A0A 4%, white 5%, white 100%);
    align-items: center;
    margin: 0 auto;

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
</style>