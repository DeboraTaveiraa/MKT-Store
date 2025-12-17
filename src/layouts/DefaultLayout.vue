<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

let itemsNav = ref([
  { name: 'Produtos', path: '/' },
  { name: 'Carrinho', path: '/carrinho' }
])

const isActiveRoute = (path: string) => route.path === path

const lastNavIndex = ref(itemsNav.value.length - 1)

</script>
<template>
  <div class="shopping">
    <header class="shopping__header">
      <h1>MTK STORE</h1>
    </header>

    <nav class="shopping__nav">
      <ul>
        <li 
          v-for="(item, index) in itemsNav" 
          :key="item.name"
        >
          <RouterLink :to="item.path">
            <span :class="{ 'shopping__nav-link--active': isActiveRoute(item.path) }">
              {{ item.name }}
            </span>
          </RouterLink>

           <span v-if="index < lastNavIndex" class="shopping__nav-separator">|</span>
        </li>
      </ul>
    </nav>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.shopping {
  display: flex;
  flex-direction: column;
}

.shopping__header {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    font-size: 1rem;
  }

  @include tablet {
    padding: 0.5rem 1rem;

    h1 {
      font-size: 1.5rem;
    }
  }
}

.shopping__nav {
  padding-top: 2rem;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: $color-text-light;
  }

  .shopping__nav-link--active {
    color: $color-primary;
  }

  .shopping__nav-separator {
    margin: 0 1rem;
    color: #ccc;
  }
}
</style>