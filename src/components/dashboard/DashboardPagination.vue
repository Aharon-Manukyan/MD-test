<template>
    <div class="pagination">
        <div @click="prevPage" :disabled="currentPage === 1" class="arrow-left"
            :class="currentPage === 1 ? 'disabled' : ''">
            <img src="@/assets/arrow-left.svg" alt="left">
        </div>
        <template v-for="i in showPages">
            <div :key="i" class="numbers">
                <button v-if="i" @click="curPage(i)" :class="i === currentPage ? 'active' : ''">
                    {{ i }}
                </button>
                <span v-else> . . . </span>
            </div>
        </template>
        <div @click="nextPage" :disabled="currentPage === totalPages" class="arrow-right"
            :class="currentPage === totalPages ? 'disabled' : ''">
            <img src="@/assets/arrow-right.svg" alt="right">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.$emit('page-changed', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('page-changed', this.currentPage + 1);
            }
        },
        curPage(page) {
            this.$emit('page-changed', page);
        }
    },
    computed: {
        showPages() {
            let pages = []
            if (this.totalPages < 4) {
                return this.totalPages
            }

            if (this.currentPage < this.totalPages - 2 && this.currentPage <= this.totalPages) {
                if (this.currentPage - 1 >= 1) {
                    pages.push(this.currentPage - 1)
                }
                pages.push(this.currentPage)
                pages.push(this.currentPage + 1)
                pages.push("")
                pages.push(this.totalPages)
            } else {
                pages.push(1)
                pages.push("")
                if (this.currentPage === this.totalPages) {
                    pages.push(this.currentPage - 1)
                    pages.push(this.currentPage)
                } else if (this.currentPage + 1 === this.totalPages) {
                    pages.push(this.currentPage - 1)
                    pages.push(this.currentPage)
                    pages.push(this.currentPage + 1)
                } else if (this.currentPage + 2 === this.totalPages) {
                    pages.push(this.currentPage)
                    pages.push(this.currentPage + 1)
                    pages.push(this.currentPage + 2)

                }
            }


            return pages
        }
    }
};


</script>

<style lang="scss" scoped>
.pagination {
    width: calc(100% - 32px);
    background: #fff;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    border-radius: 12px;

    .numbers {}

    button,
    span {
        color: #8591AE;
        font-size: 14px;
        line-height: 20px;
        font-family: "Commissioner";
        font-weight: 400;
        border: unset;
        background: #fff;
    }

    button {
        cursor: pointer;
    }

}

.active {
    border-radius: 12px;
    background: #F5F7FB !important;
    color: #2A355A !important;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
}

.arrow-left,
.arrow-right {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: #F5F7FB;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.disabled {
    opacity: 0.5;
    background: #fff;
    cursor: default;
}
</style>