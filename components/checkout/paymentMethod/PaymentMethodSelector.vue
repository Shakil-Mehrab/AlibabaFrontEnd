<template>
  <table class="table is-hoverable is-fullwidth">
    <tbody>
      <!-- <tr v-for="paymentMethod in paymentMethods" :key="paymentMethod.id">
        <td>
          <p :class="{'has-text-weight-bold' : paymentMethod.id===selectedPaymentMethod.id}">
           {{selectedPaymentMethod.card_type}} ending {{selectedPaymentMethod.last_four}}
          </p>
        </td>
        <td>
          <a href="" class="button is-info" @click.prevent="$emit('click',paymentMethod)">Pay with this</a>
        </td>
      </tr> -->
      <tr>
        <td>
          <p>
            Bkash
          </p>
        </td>
        <td>
          <a
            href=""
            class="bg-customcolor-300 text-white text-xs px-2 rounded-sm py-1"
            @click.prevent="$emit('click', paymentMethod)"
            >Pay with this</a
          >
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Douch Bangla
          </p>
        </td>
        <td>
          <a
            href=""
            class="bg-customcolor-300 text-white text-xs px-2 rounded-sm py-1"
            @click.prevent="$emit('click', paymentMethod)"
            >Pay with this</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    paymentMethods: {
      required: true,
      type: Array
    },
    selectedPaymentMethod: {
      required: true,
      type: Object
    }
  }
};
</script>
