<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">我是首頁</h1>
    <ul class="mb-3 flex justify-center gap-2">
      <li><button type="button" class="btn btn-primary" @click="week = 'all'">All</button></li>
      <li><button type="button" class="btn btn-primary" @click="week = '1'">week1</button></li>
      <li><button type="button" class="btn btn-primary" @click="week = '2'">week2</button></li>
      <li><button type="button" class="btn btn-primary" @click="week = '3'">week3</button></li>
    </ul>
    <template v-if="week === '1' || week === 'all'">
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">一般路由</h2>
        <nav>
          <ul class="flex items-center justify-center gap-x-3">
            <li><nuxt-link to="/about" class="text-2xl text-secondary">關於我們</nuxt-link></li>
            <li><nuxt-link to="/contact" class="text-2xl text-secondary">聯絡方式</nuxt-link></li>
          </ul>
        </nav>
      </section>
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">巢狀路由</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/users/peter" class="text-2xl text-secondary">/users/peter</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/users/alan" class="text-2xl text-secondary">/users/alan</nuxt-link>
            </li>
          </ul>
        </nav>
      </section>
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">多個參數</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/catch-all/hello" class="text-2xl text-secondary">
                /catch-all/hello
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/catch-all/hello/apple" class="text-2xl text-secondary">
                /catch-all/hello/apple
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </section>
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">404 頁</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/asdfasdf" class="text-2xl text-secondary"> /asdfasdf </nuxt-link>
            </li>
          </ul>
        </nav>
      </section>
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">進階</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/category" class="text-2xl text-secondary">/category</nuxt-link>
            </li>
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
    </template>
    <template v-if="week === '2' || week === 'all'">
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">元件</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/component" class="text-2xl text-secondary">/component</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/component2" class="text-2xl text-secondary">/component2</nuxt-link>
            </li>
          </ul>
        </nav>
      </section>
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">組合式函式 (Composables)</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/composables" class="text-2xl text-secondary">/composables</nuxt-link>
            </li>
          </ul>
        </nav>
      </section>
    </template>
    <template v-if="week === '3' || week === 'all'">
      <section class="mb-5">
        <h2 class="mb-2 text-center text-3xl text-primary">Store 狀態儲存: pinia 套件</h2>
        <nav>
          <ul class="text-center">
            <li>
              <nuxt-link to="/store/counter" class="text-2xl text-secondary">
                /store/counter
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/store/display" class="text-2xl text-secondary">
                /store/display
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </section>
    </template>
  </div>
</template>

<script setup>
const week = ref('1')
</script>
