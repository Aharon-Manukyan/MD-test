<template>
    <div class="shorts">
        <div class="shorts__title">
            <div class="shorts__title--avatar">
                <img src="@/assets/users.svg" alt="users">
            </div>
            <div class="shorts__title--name">
                <span>Team</span>
                <div> <img src="@/assets/info.svg" alt="info"></div>
            </div>
        </div>
        <div class="shorts__main">
            <div class="shorts__main--members content">
                <div class="content__count">130</div>
                <div class="content__title">members</div>
            </div>
            <div class="shorts__main--online content">
                <div class="content__count">36</div>
                <div class="content__title">online</div>
            </div>
            <div class="shorts__main--mens content">
                <div class="content__count">50</div>
                <div class="content__title">men</div>
            </div>
            <div class="shorts__main--womens content">
                <div class="content__count">80</div>
                <div class="content__title">women</div>
            </div>
            <div class="shorts__main--average content">
                <div class="content__count">29</div>
                <div class="content__title">average age</div>
            </div>
            <div class="shorts__main--days content">
                <div class="content__count">265</div>
                <div class="content__title">days work on average</div>
            </div>
            <div class="shorts__main--newest content">
                <div class="content__count">36</div>
                <div class="content__title">days work newest employee</div>
            </div>
            <div class="shorts__main--oldest content">
                <div class="content__count">1256</div>
                <div class="content__title"> days work oldest employee</div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.shorts {
    width: fit-content;
    background: #fff;
    height: 47px;
    display: flex;
    flex-direction: row;
    gap: 72px;
    justify-content: center;
    padding: 16px 28px 16px 28px;
    border-radius: 12px;

    &__title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
        letter-spacing: 1px;

        &--avatar {
            width: 32px;
            height: 32px;
            background: #F3F9FF;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                filter: brightness(0) saturate(100%) invert(52%) sepia(43%) saturate(4359%) hue-rotate(186deg) brightness(97%) contrast(103%);
            }
        }

        &--name {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 6px;

            div {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 14px;
                align-items: flex-start;
            }

            span {
                font-weight: 500;
                font-family: "Commissioner";
                font-size: 14px;
                line-height: 20px;
            }

            // img {
            //     width: 14px;
            //     height: 14px;
            //     position: absolute;
            //     top: -14px;
            //     right: -14px;
            // }
        }
    }

    &__main {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;



        .content {
            border-right: 1px solid #E5E8EF;
            padding: 0 30px;

            &__count {
                font-family: 'Commissioner';
                font-weight: 500;
                font-size: 22px;
                line-height: 28.6px;
                color: #2A355A;
            }

            &__title {
                font-family: 'Commissioner';
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #8591AE;
            }
        }

        &>div.content:nth-child(3),
        &>div.content:last-child {
            border: unset;
        }
    }
}
</style>