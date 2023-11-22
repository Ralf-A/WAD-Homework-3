<template>
  <div class="products">
    <h2> Our Products page</h2>
    <product-compo-one></product-compo-one>
    <button v-on:click="IncreasePrice"> Increase price </button>
    <button v-on:click="DecreasePrice"> Decrease price </button><br />
    <product-compo-two></product-compo-two>
  </div>
</template>

<script>
import ProductCompoOne from "@/components/ProductCompoOne.vue";
import ProductCompoTwo from "@/components/ProductCompoTwo.vue";
export default {
  name: "Products",
  components: { ProductCompoOne, ProductCompoTwo },

  methods: {
    IncreasePrice: function () {
      this.$store.commit("IncreasePrice")
    },
    DecreasePrice: function () {
      this.$store.dispatch("DecreasePriceAct")
    }
  }
}
</script>

<style scoped>
button {
  background: rgb(31, 163, 163);
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: white;
  border-radius: 20px;
}
</style>
