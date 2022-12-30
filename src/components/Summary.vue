<script setup>
const summary = [
    {
        label: "Users",
        amount: "1,400",
        icon: "pi pi-users",
    },
    {
        label: "Orders",
        amount: "466",
        icon: "pi pi-shopping-cart"
    },
    {
        label: "Sales",
        amount: "$136,240",
        icon: "pi pi-dollar"
    },
    {
        label: "Messages",
        amount: "32",
        icon: "pi pi-comment"
    },
    {
        label: "Visits",
        amount: "1,245",
        icon: "pi pi-eye"
    },
    {
        label: "Subscriptions",
        amount: "1,245",
        icon: "pi pi-envelope"
    }
]
</script>

<template>
<div class="fadein animation-duration-500 py-5 md:px-6 lg:px-8 mx-0">
    <div class="grid">
        <div class="col-12 xl:col-4 sm:col-6 px-3 hover:cursor-pointer" v-for="(data, index) in summary" :key="data.label">
            <div class="shadow-2 surface-card p-3" style="border-radius: 12px">
                <div class="flex align-items-center justify-content-between">
                    <div>
                        <span class="text-3xl text-900 font-bold">{{data.amount}}</span>
                        <p class="mt-2 mb-0 text-600 text-2xl">{{data.label}}</p>
                    </div>
                    <div>
                        <i :class="[data.icon, 'mr-3', 'text-blue-500', 'font-regular']" style="font-size: 50px" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="sass">
</style>