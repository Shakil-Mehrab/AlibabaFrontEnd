<template>
  <div class="container mx-auto mt-5 px-2">
    <h1 class="mt-5 text-lg font-bold">Checkout</h1>
    <Progressbar
      widthBorderColor="w-1/4 border-blue-400"
      nameOfPage="checkout"
    />
    <div class="row flex">
      <div class="w-full sm:w-9/12">
        <article class="bg-white">
          <h1
            class="text-lg font-semibold text-customcolor-300 bg-gray-400 px-2"
          >
            Ship to
          </h1>
          <ShippingAddress />
        </article>
        <article class="bg-white">
          <!-- <PaymentMethod /> -->
        </article>
        <article class="message" v-if="shippingMethodId">
          <h1 class="title is-5">Shipping</h1>
          <div class="select is-fullwidth">
            <select v-model="shippingMethodId">
              <!-- eta jotil cz total a jog krte hobe -->

              <!-- <option :value="shipping.id" v-for="shipping in shippingMethods" :key="shipping.id">{{shipping.name}} ({{shipping.price}})</option> -->
            </select>
          </div>
        </article>
        <article class="bg-white mt-5">
          <h1
            class="text-lg font-semibold text-customcolor-300 bg-gray-400 px-2 mb-2"
          >
            Cart Sumury
          </h1>
          <CartSumury />
        </article>
        <article class="message">
          <button
            class="w-full bg-customcolor-300 text-white px-2 rounded-sm"
            @click.prevent="order"
          >
            Palce Order
          </button>
        </article>
        <br />
      </div>
      <div class="hidden sm:block w-3/12 pl-2">
        <button
          class="w-full bg-customcolor-300 text-white px-2 rounded-sm"
          @click.prevent="order"
        >
          Palce Order
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ShippingAddress from "@/components/checkout/address/ShippingAddress";
import CartSumury from "@/components/cart/CartSumury";
import PaymentMethod from "@/components/checkout/paymentMethod/PaymentMethod";

export default {
  data() {
    return {
      submitting: false,
      addresses: [],
      shippingMethods: [],
      paymentMethods: [],
      form: {
        address_id: null,
        payment_method_id: null
      }
    };
  },
  watch: {
    // "form.address_id"(addressId) {
    //   this.getShippingMethodsForAddress(addressId).then(() => {
    //     this.setShipping(this.shippingMethods[0]); //cart.js a setShipping parameter chay.ekhane default etkta pathalam
    //   });
    // },
    // shippingMethodId() {
    //   this.getCart();
    // }
  },
  components: {
    CartSumury,
    ShippingAddress,
    PaymentMethod
  },
  computed: {
    ...mapGetters({
      // total: "cart/total",
      // products: "cart/products",
      // empty: "cart/empty",
      // shipping: "cart/shipping"
    }),
    shippingMethodId: {
      // get() {
      //   return this.shipping ? this.shipping.id : ""; //mapGetters theke
      // },
      // set(shippingMethodId) {
      //   this.setShipping(
      //     this.shippingMethods.find(s => s.id === shippingMethodId)
      //   );
      // }
    }
  },
  methods: {
    // ...mapActions({
    //   setShipping: "cart/setShipping",
    //   getCart: "cart/getCart",
    //   flash: "alert/flash"
    // }),
    // async order() {
    //   this.submitting = true;
    //   console.log(this.form.payment_method_id);
    //   try {
    //     await this.$axios.$post("orders", {
    //       ...this.form,
    //       shipping_method_id: this.shippingMethodId
    //     });
    //     await this.getCart(); //cart refresh
    //     this.$router.replace({
    //       //go to order page
    //       name: "orders"
    //     });
    //   } catch (e) {
    //     this.flash(e.response.data.message);
    //     this.getCart();
    //   }
    //   this.submitting = false;
    // },
    // async getShippingMethodsForAddress(addressId) {
    //   let response = await this.$axios.$get(`addresses/${addressId}/shipping`);
    //   this.shippingMethods = response.data; //adress component help korlo
    //   return response;
    // }
  }
  // async asyncData({ app }) {
  //   let address = await app.$axios.$get("addresses");
  //   let paymentMethods = await app.$axios.$get("payment-methods");

  //   return {
  //     addresses: address.data,
  //     paymentMethods: paymentMethods.data
  //   };
  // }
};
</script>

