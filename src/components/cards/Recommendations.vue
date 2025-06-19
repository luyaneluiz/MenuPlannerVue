<script>
    import RecipeCard from '../recipes/RecipeCard.vue'

    export default {
        name: 'Recommendations',
        components: {
            RecipeCard,
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
    }
</script>

<template>
    <section class="card">
        <div class="flex items-center justify-between">
            <h1>Recommendations</h1>
            <a href="" class="text-base">See More</a>
        </div>

        <div class="flex gap-4 overflow-x-scroll">
            <RecipeCard
                v-for="recipe in recommendations"
                :key="recipe.id"
                :image="recipe.image"
                :title="recipe.title"
            />
        </div>
    </section>
</template>
