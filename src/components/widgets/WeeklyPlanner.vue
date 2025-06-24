<script>
    import { Icon } from '@iconify/vue'
    import WeeklyHome from '../calendar/WeeklyHome.vue'
    import WidgetCard from '../common/WidgetCard.vue'
    import MealCard from '../cards/MealCard.vue'

    export default {
        name: 'WeeklyPlanner',
        components: {
            Icon,
            WeeklyHome,
            WidgetCard,
            MealCard,
        },
        data() {
            return {
                breakfast: [
                    {
                        title: 'Oatmeal with fruits',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '10 min',
                        calories: 300,
                    },
                    {
                        title: 'Smoothie bowl',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '15 min',
                        calories: 250,
                    },
                ],
                lunch: [
                    {
                        title: 'Grilled chicken salad',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '20 min',
                        calories: 400,
                    },
                    {
                        title: 'Vegetable stir-fry',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '25 min',
                        calories: 350,
                    },
                ],
                dinner: [
                    {
                        title: 'Baked salmon with quinoa',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '30 min',
                        calories: 500,
                    },
                    {
                        title: 'Pasta primavera',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '20 min',
                        calories: 450,
                    },
                ],
                snacks: [
                    {
                        title: 'Greek yogurt with honey',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '5 min',
                        calories: 150,
                    },
                    {
                        title: 'Mixed nuts',
                        image: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
                        time: '5 min',
                        calories: 200,
                    },
                ],
            }
        },
    }
</script>

<template>
    <WidgetCard title="Your weekly meal planner">
        <WeeklyHome />

        <div class="flex flex-col gap-1">
            <h3 class="text-lg font-semibold">Breakfast</h3>
            <div>
                <MealCard
                    v-for="(meal, index) in breakfast"
                    :key="index"
                    :meal="meal"
                />
            </div>

            <h3 class="mt-6 text-lg font-semibold">Lunch</h3>
            <div>
                <MealCard
                    v-for="(meal, index) in lunch"
                    :key="index"
                    :meal="meal"
                />
            </div>

            <h3 class="mt-6 text-lg font-semibold">Dinner</h3>
            <div>
                <MealCard
                    v-for="(meal, index) in dinner"
                    :key="index"
                    :meal="meal"
                />
            </div>

            <h3 class="mt-6 text-lg font-semibold">Snacks</h3>
            <div>
                <MealCard
                    v-for="(meal, index) in snacks"
                    :key="index"
                    :meal="meal"
                />
            </div>
        </div>

        <button class="md:hidden">Edit</button>
    </WidgetCard>
</template>
