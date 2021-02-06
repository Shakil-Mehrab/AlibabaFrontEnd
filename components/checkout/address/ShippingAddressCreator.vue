<template>
  <form action="#" @submit.prevent="store">
    <div>
      <label for="" class="text-base font-bold"> Name&nbsp; </label>
      <input
        type="text"
        class="border focus:outline-none w-full px-2 rounded-sm"
        v-model="form.name"
      />
    </div>
    <div>
      <label for="" class="text-base font-bold">Address Line 1</label>
      <input
        type="text"
        class="border focus:outline-none w-full px-2 rounded-sm"
        v-model="form.address_1"
      />
    </div>
    <div>
      <label for="" class="text-base font-bold">City</label>
      <input
        type="text"
        class="border focus:outline-none w-full px-2 rounded-sm"
        v-model="form.city"
      />
    </div>
    <div class="columns">
      <div class="column is-6">
        <div>
          <label for="" class="text-base font-bold">Postal Code</label>

          <input
            type="text"
            class="border focus:outline-none w-full px-2 rounded-sm"
            v-model="form.postal_code"
          />
        </div>
      </div>
      <div class="column is-6">
        <div>
          <label for="" class="text-base font-bold">Country</label>

          <div class="select is-fullwidth">
            <!-- <CountryDropdown v-model="form.country_id"/> -->
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
      <button
        class="text-sm bg-customcolor-300 text-white px-2 py-1 rounded-sm"
      >
        Add Address
      </button>
      <a href="#" class="button is-text" @click.prevent="$emit('cancel')"
        >Cancel</a
      >
    </div>
  </form>
</template>
<script>
// import CountryDropdown from "@/components/form/CountryDropdown";
export default {
  data() {
    return {
      form: {
        name: "",
        address_1: "",
        city: "",
        postal_code: "",
        country_id: "",
        default: "true"
      }
    };
  },
  components: {
    // CountryDropdown
  },
  methods: {
    async store() {
      let response = await this.$axios.$post("addresses", this.form);
      this.$emit("created", response.data);
    }
  }
};
</script>
