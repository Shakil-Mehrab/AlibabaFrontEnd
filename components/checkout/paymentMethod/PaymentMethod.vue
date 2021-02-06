<template>
  <article class="mt-5">
    <h1 class="text-lg font-semibold text-customcolor-300 bg-gray-400 px-2">
      Payment Method
    </h1>

    <template v-if="selecting">
      <PaymentMethodSelector
        :payment-methods="paymentMethods"
        :selected-payment-method="selectedPaymentMethod"
        @click="paymentMethodSelected"
      />
    </template>
    <!-- <template v-else-if="creating">
      <PaymentMethodCreator @cancel="creating = false" @added="created" />
    </template> -->
    <template v-else>
      <!-- <template v-if="selectedPaymentMethod">
        <p>
          {{ selectedPaymentMethod.card_type }} ending
          {{ selectedPaymentMethod.last_four }}
        </p>
        <br />
      </template> -->
      <div>
        <a
          href=""
          class="bg-customcolor-300 text-white text-xs py-1 px-2 rounded-sm"
          @click.prevent="selecting = true"
          >Change Payment Method</a
        >
        <a
          href=""
          class="bg-customcolor-300 text-white text-xs py-1 px-2 rounded-sm"
          @click.prevent="creating = true"
          >Add a Payment Method</a
        >
      </div>
    </template>
  </article>
</template>
<script>
import PaymentMethodSelector from "@/components/checkout/paymentMethod/PaymentMethodSelector";
// import PaymentMethodCreator from "./PaymentMethodCreator";

export default {
  data() {
    return {
      selecting: false,
      creating: false,
      localPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: null
    };
  },
  watch: {
    selectedPaymentMethod(paymentMethod) {
      ///checkout-index page a address_id dynamic change er jonno eta
      this.$emit("input", paymentMethod.id); //checkout-index page er v-model **input** listen kore
    }
  },
  components: {
    PaymentMethodSelector
    // PaymentMethodCreator
  },
  props: {
    // paymentMethods: {
    //   required: true,
    //   type: Array
    // }
  },
  computed: {
    defaultPaymentMethod() {
      // return this.localAddresses.find((address)=>{
      //   return address.default ===true;
      // })
      return this.localPaymentMethods.find(p => p.default === 1); //this.localAddresses=addresses a=address jata database theke asche.default adress table theke
    }
  },
  methods: {
    paymentMethodSelected(paymentMethod) {
      this.switchPaymentMethod(paymentMethod);
      this.selecting = false;
    },
    switchPaymentMethod(paymentMethod) {
      this.selectedPaymentMethod = paymentMethod;
    },
    created(paymentMethod) {
      //ShippingAddressCreator theke response.data meand address niye asche
      this.localPaymentMethods.push(paymentMethod);
      this.creating = false;
      this.switchPaymentMethod(paymentMethod);
    }
  },
  created() {
    //created age.created switch  call krche
    // if (this.paymentMethods.length) {
    //   this.switchPaymentMethod(this.defaultPaymentMethod);
    // }
  }
};
</script>
