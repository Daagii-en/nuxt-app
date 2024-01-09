<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit
      reprehenderit possimus dolores neque libero est quasi suscipit cupiditate
      ut.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit
      reprehenderit possimus dolores neque libero est quasi suscipit cupiditate
      ut.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch("/api/currency/GBP" );
  const { data } = await useFetch("/api/test" );
  // console.log("dagadg"+ data)
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
