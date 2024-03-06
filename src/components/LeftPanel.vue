<template>
    <div class="leftPanel">
        <div class="leftPanel__top">
            <router-link to="/">
                <img src="@/assets/companyLogo.svg" alt="Logo">
            </router-link>
            <router-link to="/" :class="{ active: isActive === '/' }">
                <span></span>
                <img src="@/assets/settings.svg" alt="Settings">
            </router-link>
            <router-link to="/charts" :class="{ active: isActive === '/charts' }">
                <span></span>
                <img src="@/assets/chart.svg" alt="Chart">
            </router-link>
            <router-link to="/wallet" :class="{ active: isActive === '/wallet' }">
                <span></span>
                <img src="@/assets/wallet.svg" alt="Wallet">
            </router-link>
            <router-link to="/interface" :class="{ active: isActive === '/interface' }">
                <span></span>
                <img src="@/assets/interface.svg" alt="interface">
            </router-link>
            <router-link to="/lists" :class="{ active: isActive === '/lists' }">
                <span></span>
                <img src="@/assets/text.svg" alt="Text">
            </router-link>
            <router-link to="/essentials" :class="{ active: isActive === '/essentials' }">
                <span></span>
                <img src="@/assets/essential.svg" alt="Essentials">
            </router-link>
            <router-link to="/setting" :class="{ active: isActive === '/setting' }">
                <span></span>
                <img src="@/assets/setting.svg" alt="Setting">
            </router-link>
            <router-link to="/products" :class="{ active: isActive === '/products' }">
                <span></span>
                <img src="@/assets/products.svg" alt="Products">
            </router-link>
            <router-link to="/dashboard" :class="{ active: isActive === '/dashboard' }">
                <span></span>
                <img src="@/assets/users.svg" alt="Users" @click="linkToPage('dashboard')">
            </router-link>
        </div>
        <div class="leftPanel__bottom">
            <div>
                <img src="@/assets/plus.svg" alt="Plus">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isActive() {
            return this.$route.fullPath
        }
    }

}
</script>

<style lang="scss" scoped>
.leftPanel {
    position: fixed;
    left: 0;
    top: 0;
    width: 72px;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    &__top {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 28px 0;

        div,
        a {
            cursor: pointer;
            padding: 12px 24px 12px 24px;

            span {
                display: none;
                width: 4px;
                height: 20px;
                position: absolute;
                left: 0;
                background: #8F20EF;
                border-top-right-radius: 100px;
                border-bottom-right-radius: 100px;
            }
        }

    }


    &__bottom {
        padding: 28px 0;
        border-top: 1px solid #E5E8EF;
        width: 100%;

        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: fit-content;
            cursor: pointer;
            position: relative;


        }
    }

}

.active {
    img {
        filter: brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(7014%) hue-rotate(272deg) brightness(97%) contrast(95%);
    }

    span {
        display: block !important;
    }
}
</style>