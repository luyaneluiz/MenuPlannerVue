<script>
    import RecipeCard from '../recipes/RecipeCard.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'

    export default {
        name: 'Recommendations',
        components: {
            RecipeCard,
            Swiper, 
            SwiperSlide
        },
        data() {
            return {
                recommendations: [
                    {
                        id: 1,
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                    },
                    {
                        id: 2,
                        image: 'https://img.spoonacular.com/recipes/716430-556x370.jpg',
                        title: 'Spaghetti Carbonara',
                    },
                    {
                        id: 3,
                        image: 'https://img.spoonacular.com/recipes/716431-556x370.jpg',
                        title: 'Vegetarian Chili',
                    },
                    {
                        id: 4,
                        image: 'https://img.spoonacular.com/recipes/716432-556x370.jpg',
                        title: 'Chicken Tikka Masala',
                    },
                    {
                        id: 5,
                        image: 'https://img.spoonacular.com/recipes/716433-556x370.jpg',
                        title: 'Beef Stroganoff',
                    },
                ],
            }
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper)
            }

            const onSlideChange = () => {
                console.log('slide change')
            }

            return {
                onSwiper,
                onSlideChange,
            }
        },
    }
</script>

<template>
    <section class="card">
        <div class="flex items-center justify-between">
            <h1>Recommendations</h1>
            <a href="" class="text-base">See More</a>
        </div>

        <swiper
            navigation
            :slides-per-view="2"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="w-full"
        >
            <swiper-slide v-for="recipe in recommendations" :key="recipe.id">
                <RecipeCard
                    :image="recipe.image"
                    :title="recipe.title"
                />
            </swiper-slide>
        </swiper>
    </section>
</template>
