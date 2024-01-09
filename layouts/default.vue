<template>
  <div>
    <header class="shadow-sm bg-white"> 
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/abc"  > abc product</NuxtLink>
          </li>
        </ul>
        <!-- <a href="/about">normal link -- about page</a> -->
      </nav>
    </header>
    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <!-- <div class="w-auto h-1 bg-gray-500"></div> -->
      <slot  />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
