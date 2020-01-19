<template>
    <modal v-if="showSettingsModal">
        <h3 slot="header">Update Vending Machine Inventory </h3>
        <div slot="body">
            <table >
                <tr>
                    <th>Product</th>
                    <th>Inventory</th>
                    <th>Max Inventory</th>
                </tr>
                <tr  v-for="snack in products" :key="snack.id">
                    <td> {{snack.name}}</td>
                    <td>
                        <p v-if="!inEdit"> {{snack.inventory}}</p>
                        <input v-if="inEdit" v-model="counter" @input="updateCounter(snack, counter)" />
                    </td>
                    <td> {{snack.maxInventory}}</td>
                    <td>
                        <button v-if="!inEdit" class="table-button" @click="addToInventory(snack)">+</button>
                    </td>
                    <td> <button  class="table-button" @click="takeFromInventory(snack)">-</button></td>
                </tr>

            </table>
        </div>
        <div slot="footer">
            <button  class="modal-default-button" @click="exitModal">
                Close
            </button>
        </div>

    </modal>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import { mapState, mapActions } from 'vuex';
    import modal from '@/components/modal'
    // eslint-disable-next-line no-unused-vars
    export default {
        name: "MachineSettings",
        components: {
            modal
        },
        props: {
            showSettingsModal: {
                type: Boolean,
                default: false,

            }
        },
        data:function () {
            return {
                counter: 0,
                inEdit: false
            }
        },
        computed: {
            ...mapState({ products: state => state.products.all }),

        },
        methods: {
            ...mapActions('products', ['updateProduct', 'buyProduct']),
            addToInventory(snack) {
               this.updateProduct(snack);
            },
            takeFromInventory(snack) {
                this.buyProduct(snack);
            },
            updateCounter(snack, counter) {
                snack.inventory = counter;
            },

            exitModal() {
               this.$emit('closeChanges')
            }
        }
    }
</script>

<style >
    .modal-container {
        max-height: 400px;
        overflow-y: scroll;
    }

    .modal-default-button {
        margin: 10px
    }

    .table-button {
        cursor: pointer !important;
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
        background-color:#ffffff;
        border-radius:6px;
        border:1px solid #dcdcdc;
        display:inline-block;
        color:#666666;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:5px;
        text-decoration:none;
        text-shadow:0px 1px 0px #ffffff;
        margin: 0 5px;
    }
</style>