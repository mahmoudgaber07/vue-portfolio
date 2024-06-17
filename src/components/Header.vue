<template>
    <nav class="navbar navbar-expand-lg" :style="navbarStyle">
        <div class="container-fluid">
            <a class="navbar-brand px-3 fs-3" href="#">
                <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" /> -->
                VUE-PORTFOLIO
            </a>
            <button class="navbar-toggler order-1" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" :class="{ active: $route.name === '/' }">ABOUT</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/ecommerce" class="nav-link" :class="{ active: $route.name === 'ecommerce' }">
                            E-COMMERCE</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/todo" class="nav-link" :class="{ active: $route.name === 'todo' }">
                            TODO
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/counter" class="nav-link" :class="{ active: $route.name === 'counter' }">
                            COUNTER
                        </RouterLink>
                    </li>
                    <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> -->
                </ul>
            </div>
            <RouterLink to="/cart" class="position-relative px-5" v-motion-roll-visible-once-bottom :delay="200"
                :duration="1200">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-white" />
                <span class="badge bg-dark text-white ms-1 rounded-pill position-absolute top-0">{{ cartItemsQty
                    }}</span>
            </RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const store = useStore();
        const cartItemsQty = computed(() => store.getters.totalQty);
        const navbarStyle = ref({
            backgroundColor: '#0a0a0a',
            position: 'relative'
        });

    const handleScroll = () => {
        const navbar = document.querySelector('nav');
        if (navbar) {
            if (window.scrollY > 100) {
                navbarStyle.value = {
                    ...navbarStyle.value,
                    backgroundColor: '#ef4444',
                    position: 'fixed'
                };
            } else {
                navbarStyle.value = {
                    ...navbarStyle.value,
                    backgroundColor: '#0a0a0a',
                    position: 'relative'
                };
            }
        }
    };
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>
<style lang="scss" scoped></style>