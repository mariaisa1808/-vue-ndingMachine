<template>
    <div>

        <ul class="snacks-list">
            <li
                    v-for="product in products"
                    :key="product.id">
                <img  v-if="product.inventory >= 1" :src="product.icon" alt="img" />
                <img  v-else :src="product.notInStock" alt="img" />
                <span v-if="product.inventory >= 1">{{product.code}}</span>
                <span v-else> not in stock</span>
                <br>
            </li>
        </ul>

        <modal v-if="showModal">
            <h3 slot="header">Choose a snack</h3>
            <div slot="body">
                <div class="snack-display" v-for="snack in products" :key="snack.code">
                    <button class="snack-button" @click="chooseSnack(snack)">
                        {{snack.code}} - {{snack.price}}€
                    </button>

                </div>
                <p v-if="snackChosen"> Your chosen snack is  {{snackChosen.name}} </p>
            </div>
            <div slot="footer">
                <button class="modal-default-button" :disabled="notEnoughMoney" @click="acceptPurchase">
                    Buy
                </button>
                <button  class="modal-default-button" @click="cancelPurchase">
                    Cancel
                </button>
            </div>

        </modal>
    </div>


</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import { mapState, mapActions } from 'vuex';
    import modal from '@/components/modal'
    // eslint-disable-next-line no-unused-vars
    export default {
        name: "Snacks",
        data: function() {
            return{
                snackChosen: null,
                notEnoughMoney: false
            }
        },
        components: {
            modal
        },
        props: {
            showModal: {
                type: Boolean,
                default: false,

            },
            totalMoney: {
                type: Number,
                default: 0
            }
        },
        computed: {
           ...mapState({ products: state => state.products.all }),
            columns() {
                if (this.products.length === 0) {
                    return [];
                }
                return Object.keys(this.products[0])
    }
        },
        created () {
            this.$store.dispatch('products/getAllProducts')
        },

        methods: {
            ...mapActions('products', ['buyProduct']),
            chooseSnack(snack) {
                if (this.totalMoney > 0 && this.totalMoney >= snack.price ) {
                    this.snackChosen = snack;
                    this.totalMoney = this.totalMoney - this.snackChosen.price;
                    this.notEnoughMoney = false;
                } else {
                    // eslint-disable-next-line no-console
                   alert('not enough credit')
                    this.notEnoughMoney = true;
                    // eslint-disable-next-line no-console
                    console.log(this.notEnoughMoney)
                }
            },
            acceptPurchase() {
                if (this.snackChosen && this.snackChosen.inventory >= 1) {
                    this.buyProduct(this.snackChosen);
                    this.$emit('close', this.snackChosen, this.totalMoney);
                } else {
                    alert ('not in stock')
                }

            },
            cancelPurchase() {
                this.$emit('close');
            }
        }
    }
</script>

<style>
    .snacks-list {
        -moz-column-count: 3;
        -moz-column-gap: 20px;
        -webkit-column-count: 3;
        -webkit-column-gap: 20px;
        column-count: 3;
        column-gap: 20px;
        list-style: none;
        padding: 0;
    }

    .snacks-list li {
        margin-bottom: 40px;
    }

    .snacks-list li img {
        width: 32px;
        height: 32px;
    }

    .snacks-list span {
        font-weight: bold;
        font-size: 14px;
        display: block;
    }

    .snack-button {
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
        background-color:#ffffff;
        border-radius:6px;
        border:1px solid  #42b983;;
        display:inline-block;
        cursor:pointer;
        color: #1f1f1f;
        font-family:Arial;
        font-size:13px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        margin: 5px;
    }

    .snack-display {
        width: auto;
        display: inline-block;
    }

    button:disabled {
        cursor: not-allowed;
        background: #4d4d4d;
    }

    .modal-default-button {
        margin: 10px
    }
</style>