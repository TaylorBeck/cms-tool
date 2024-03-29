<template>
<div class="min-h-screen flex relative lg:static surface-ground">
  <div id="app-sidebar-1" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width:280px">
    <div class="flex flex-column h-full">
      <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
        <img :src="logo" alt="logo" height="35">
        <span class="font-bold text-xl ml-3">CMS Tool</span>
      </div>
      <div class="overflow-y-auto">
        <ul class="list-none p-3 m-0">
          <li>
            <ul class="list-none p-0 m-0 overflow-hidden">
              <li v-for="item in menu" :key="item.name">
                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple" :class="{ 'surface-100': item.active }" @click="onSelect(item)">
                  <i class="pi mr-2" :class="`pi-${item.icon}`"></i>
                  <span class="font-medium">{{item.name}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
        <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
          <img src="https://i.pravatar.cc/40" class="mr-3 border-circle"/>
          <span class="font-medium">Christian Ross</span>
        </a>
      </div>
    </div>
  </div>
  <div class="min-h-screen flex flex-column relative flex-auto">
    <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
      <div class="flex">
        <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
          v-styleclass="{ selector: '#app-sidebar-1', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
          <i class="pi pi-bars text-4xl"></i>
        </a>
        <span class="p-input-icon-left">
          <i class="pi pi-search"></i>
          <InputText type="text" class="border-solid w-20rem" placeholder="Search" />
        </span>
      </div>
      <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
        <i class="pi pi-ellipsis-v text-2xl"></i>
      </a>
      <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row 
        surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
        <li>
          <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors p-ripple">
            <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
            <span class="block lg:hidden font-medium">Inbox</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors p-ripple">
            <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
            <span class="block lg:hidden font-medium">Notifications</span>
          </a>
        </li>
        <li class="border-top-1 surface-border lg:border-top-none">
          <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors p-ripple">
            <img src="https://i.pravatar.cc/30" class="mr-3 lg:mr-0 border-circle" style="width: 32px; height: 32px"/>
            <div class="block lg:hidden">
              <div class="text-900 font-medium">Josephine Lillard</div>
              <span class="text-600 font-medium text-sm">Marketing Specialist</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="p-3 flex flex-column flex-auto">
      <div class="surface-ground flex-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { shallowRef } from "vue";
import logo from "../assets/logo.svg";
import InputText from "primevue/inputtext";

const emit = defineEmits(["selectMenu"]);

const menu = shallowRef([
  { name: "Dashboard", icon: "home", active: true },
  { name: "Bookmarks", icon: "bookmark" },
  { name: "Team", icon: "users" },
  { name: "Messages", icon: "comments" },
  { name: "Calendar", icon: "calendar" },
  { name: "Settings", icon: "cog" },
]);

const onSelect = (item) => {
  menu.value.forEach((menuItem) => {
    menuItem.active = false;
  });
  item.active = true;
  emit("selectMenu", item.name?.toLowerCase());
};
</script>

<style lang="sass">
</style>
