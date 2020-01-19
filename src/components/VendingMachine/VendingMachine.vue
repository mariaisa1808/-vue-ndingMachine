<template>
    <div class="machine">
        <div class="border">
            <Snacks :showModal="showModal" @close="onClickChild" class="snacks" :totalMoney="credit"></Snacks>
            <div class="glass">
            </div>
        </div>
        <div class="tray">
            <span>PUSH</span>
        </div>
        <div class="open-tray" :class="{'open-tray-product': productBought}" @click="takeProduct">
            <img :src="productBought.icon" :alt="img">
        </div>
        <div class="money-display">
            {{credit}} €
        </div>
        <div class="control-panel" @click="selectProducts">
            <img alt="panel" src="../../assets/calculator.png" />
        </div>
        <div class="money-add" @click="showMoneyModal">
            <img alt="coin" src="../../assets/insert-coin.png" />
        </div>
        <div class="change">
            <button class="give-change" @click="resetCredit">Request change</button>
            <img :class="{'showCoins': showChange}" @click="takeChange" alt="coins" src="../../assets/euro.png" />
        </div>
        <div class="machine-settings" @click="showSettingsModal" >
            <img alt="settings" src="../../assets/settings.png" />
        </div>
        <MachineSettings :showSettingsModal="showSettings" @closeChanges="closeSettingsModal"></MachineSettings>
        <modal v-if="showCoinsModal">
            <h3 slot="header">Please insert money </h3>
            <div slot="body">
                <span>Select coins</span>
                <div class="coin-display" v-for="coin in coins" :key="coin.value">
                    <button class="coin-button" @click="addCredit(coin)">
                        {{coin.value}} €
                    </button>
                </div>
            </div>
            <div slot="footer">
                <button class="modal-default-button" @click="closeMoneyModal">
                    OK
                </button>
            </div>
        </modal>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import { mapState, mapActions, MapGetters } from 'vuex';
    import Snacks from "@/components/Snacks/Snacks";
    import MachineSettings from "@/components/MachineSettings/MachineSettings";
    import modal from '@/components/modal'
    export default {
        name: "VendingMachine",
        data: function () {
            return {
                showModal: false,
                showCoinsModal: false,
                showSettings: false,
                credit : 0,
                showChange: false,
                productBought: ''
            }
        },
        components: {
            Snacks,
            modal,
            MachineSettings
            // eslint-disable-next-line vue/no-unused-components
        },
        methods: {
            /* open window from where you choose a product */
            selectProducts() {
                this.showModal = true;
            },

            /* open window from where you insert money */
            showMoneyModal() {
                this.showCoinsModal = true;
            },

            showSettingsModal() {
                this.showSettings = true
            },

            /* add money in the vending machine */
            addCredit(selectedCoin) {
                this.credit += Number(selectedCoin.value);
                // eslint-disable-next-line no-console
                return this.credit;

            },

            /*close window from where you insert money */
            closeMoneyModal() {
                this.showCoinsModal = false
            },

            closeSettingsModal() {
                this.showSettings =false;
            },

            onClickChild (chosenSnack, moneyLeft) {
                // eslint-disable-next-line no-console
                if(chosenSnack) {
                    this.credit = moneyLeft;
                    this.productBought = chosenSnack;
                    alert('You just bought ' + chosenSnack.name);
                }
                this.showModal = false;
            },

            /*function that gives change when requested */
            resetCredit() {
                if (this.credit !== 0 ) {
                    if (this.credit <= 5) {
                        this.showChange = true;
                        this.credit = 0;
                    } else {
                        alert ('The machine only gives change up to 5€ ');
                    }
                } else {
                    alert ('There is no money left in the machine');
                }
            },

            /* take the change from the slot when it appears */
            takeChange() {
                this.showChange = false;
            },

            /* take product from tray when it appears after purchase*/
            takeProduct() {
                this.productBought = '';
            }
        },
        computed: {
            ...mapState({ coins: state => state.coins.allCoins }),
            currency(coin) {
                let curr = '';
                for (let i=0; i < coin.coins.length; i++) {
                    let money = Number(coin.coins[i].value);
                    if (money < 1) {
                        curr = '¢'
                    }  else {
                        curr = '€'
                    }

                }
                return curr;
            }
        },
        created () {
            this.$store.dispatch('coins/getAllCoins');
            // eslint-disable-next-line no-console

        },
    }
</script>

<style scoped>
 .machine {
     width: 400px;
     height: 550px;
     background-color: #000033;
     border-radius: 10px;
     margin: auto;
     position: relative;
 }

 .border {
     width: 280px;
     height: 330px;
     background-image: linear-gradient(to right, rgba(192, 192, 192), rgba(115, 115, 115));;
 }
    .glass {
        width: 250px;
        height: 300px;
        background-image: linear-gradient(to right, rgba(255, 255, 255), rgba(204, 255, 255));
        position: absolute;
        top: 15px;
        left: 15px;
        opacity: 0.4;
    }

    .tray, .open-tray {
        width: 360px;
        height: 50px;
        position: absolute;
        bottom: 5px;
        left: 20px;
    }

    .tray {
        background-color:#52527a;
    }

    .tray span {
        line-height: 50px;
        color: #fff;
    }

    .open-tray {
        background-color: #000;
        visibility: hidden;
    }

    .open-tray-product {
        visibility: visible;
    }

    .open-tray-product img {
        width: 32px;
        height: 32px;
        margin-top: 10px;
        cursor: pointer;
    }

    .money-display {
        width: 50px;
        height: 40px;
        color: #ccffff;
        border-radius: 5px;
        background-color: #4d4d4d;
        font-family: "Fira Code Medium",serif;
        position: absolute;
        overflow: hidden;
        top: 20px;
        right: 30px;
        line-height: 40px;

    }

    .control-panel img {
        position: absolute;
        top: 100px;
        right: 17px;
        width: 80px;
        cursor: pointer;
    }

    .money-add img {
        position: absolute;
        top: 200px;
        right: 35px;
        width: 45px;
        cursor: pointer;
    }

    .machine-settings img {
        width: 40px;
        bottom: 60px;
        right: 5px;
        position: absolute;
        cursor: pointer;
    }

    .change {
        width: 35px;
        height: 35px;
        background-color: #000;
        border-radius: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: #d5d5d5;
        position: absolute;
        right: 35px;
        top: 350px;
    }

    .change img {
        visibility: hidden;
    }

    .change .showCoins {
        visibility: visible;
        cursor: pointer;
    }

    .snacks {
        width: 100%;
        position: relative;
        top: 30px;
    }

    .coin-button {
        background-color: #ffff80;
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        border-radius: 50%;
        min-height: 35px;
        min-width: 35px;
        margin: 5px;
        font-weight: bold;
        color: #1f1f1f;
    }

    .coin-display {
        width: auto;
        display: inline-block;
    }

    .modal-body span {
        display: block;
        color: #1f1f1f;
        font-weight: bold;
    }

    .give-change {
        right: 70px;
        position: absolute;
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
        background-color:#ffffff;
        border-radius:6px;
        border:1px solid #dcdcdc;
        display:inline-block;
        cursor:pointer;
        color:#666666;
        font-family:Arial;
        font-size: 12px;
        font-weight: bold;
        padding: 5px 5px;
        text-decoration:none;
        text-shadow:0px 1px 0px #ffffff;
    }
</style>