<template>
  <div class="p-2">
    <!-- <template v-if="selecting"> -->
    <template v-if="selecting">
      <ShippingAddressSelector @click="addressSelected" />
    </template>
    <template v-else-if="creating">
      <ShippingAddressCreator @cancel="creating = false" @created="created" />
    </template>
    <template v-else>
      <!-- <template v-if="selectedAddress"> -->
      <p>
        Nayakandi<br />
        Nayakandi ,Jalirpur<br />
        Gopalgonj<br />
        7791<br />
        Banglasesh
      </p>
      <br />
      <!-- </template> -->
      <div>
        <a
          href=""
          class="text-xs bg-customcolor-300 text-white px-2 py-1 rounded-sm whitespace-no-wrap"
          @click.prevent="selecting = true"
          >Change Shipping Address</a
        >
        <a
          href=""
          class="text-xs bg-customcolor-300 text-white px-2 py-1 rounded-sm whitespace-no-wrap"
          @click.prevent="creating = true"
          >Add an Address</a
        >
      </div>
    </template>
  </div>
</template>
<script>
import ShippingAddressSelector from "@/components/checkout/address/ShippingAddressSelector";
import ShippingAddressCreator from "@/components/checkout/address/ShippingAddressCreator";
export default {
  data() {
    return {
      selecting: false,
      creating: false,
      localAddresses: this.addresses,
      selectedAddress: null
    };
  },
  watch: {
    selectedAddress(address) {
      ///checkout-index page a address_id dynamic change er jonno eta
      this.$emit("input", address.id); //checkout-index page er v-model **input** listen kore
    }
  },
  components: {
    ShippingAddressSelector,
    ShippingAddressCreator
  },
  props: {
    addresses: {
      required: true,
      type: Array
    }
  },
  computed: {
    defaultAddress() {
      // return this.localAddresses.find((address)=>{
      //   return address.default ===true;
      // })
      return this.localAddresses.find(a => a.default === 1); //this.localAddresses=addresses a=address jata database theke asche.default adress table theke
    }
  },
  methods: {
    addressSelected(address = 1) {
      // this.switchAddress(1);
      this.selecting = false;
    },
    switchAddress(address) {
      this.selectedAddress = address;
    },
    created(address) {
      // this.localAddresses.push(address);
      // this.creating = false;
      // this.switchAddress(address);
    }
  },
  created() {
    //created age.created switch  call krche
    // if (this.addresses.length) {
    //   this.switchAddress(this.defaultAddress);
    // }
  }
};
</script>
