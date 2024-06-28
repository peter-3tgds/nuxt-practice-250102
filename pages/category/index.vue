<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">類別頁-首頁</h1>
    <section class="mb-5">
      <h2 class="mb-2 text-center text-3xl text-primary">進階</h2>
      <nav>
        <ul class="text-center">
          <li>
            <nuxt-link to="/category/8" class="text-2xl text-secondary">/category/8</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/category/8/posts/1" class="text-2xl text-secondary">
              /category/8/posts/1
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/category/top-3" class="text-2xl text-secondary">
              /category/top-3
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/category/top-10" class="text-2xl text-secondary">
              /category/top-10
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>
