<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-column">
    <div class="bg-gray-900" style="height:250px">
      <div class="py-3 px-5 flex align-items-center justify-content-between relative lg:static" style="min-height: 80px">
        <img src="https://svgur.com/i/jdE.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <a v-ripple class="cursor-pointer block lg:hidden text-gray-400 p-ripple"
          v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
          <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1">
          <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-home mr-2"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-users mr-2"></i>
                <span>Customers</span>
                <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
              </a>
              <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
                <li>
                  <a v-ripple class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 p-ripple">
                    <i class="pi pi-user-plus mr-2"></i>
                    <span class="font-medium">Add New</span>
                  </a>
                </li>
                <li class="relative">
                  <a v-ripple class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 p-ripple" 
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <i class="pi pi-search mr-2"></i>
                    <span class="font-medium">Search</span>
                    <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                  </a>
                  <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
                    <li>
                      <a v-ripple class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-shopping-cart mr-2"></i>
                        <span class="font-medium">Purchases</span>
                      </a>
                    </li>
                    <li class="relative">
                      <a v-ripple class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-comments mr-2"></i>
                        <span class="font-medium">Messages</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-calendar mr-2"></i>
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-chart-line mr-2"></i>
                <span>Stats</span>
              </a>
            </li>
          </ul>
          <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
            <li>
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span class="block lg:hidden font-medium">Inbox</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span class="block lg:hidden font-medium">Notifications</span>
              </a>
            </li>
            <li class="border-top-1 border-gray-800 lg:border-top-none">
              <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                <img src="https://i.ibb.co/W0GH7vG/placeholder-profile-1.jpg" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                <div class="block lg:hidden">
                  <div class="text-white font-medium">Josephine Lillard</div>
                  <span class="text-gray-400 font-medium text-sm">Marketing Specialist</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="list-none py-3 px-5 m-0 flex align-items-center font-medium overflow-x-auto border-top-1 border-gray-800">
        <li class="pr-3">
          <a class="cursor-pointer">
            <i class="pi pi-home text-gray-400"></i>
          </a>
        </li>
        <li class="px-2">
          <i class="pi pi-angle-right text-gray-400"></i>
        </li>
        <li class="px-2">
          <a class="cursor-pointer text-gray-400 white-space-nowrap">Level 3</a>
        </li>
        <li class="px-2">
          <i class="pi pi-angle-right text-gray-400"></i>
        </li>
        <li class="px-2">
          <a class="cursor-pointer text-gray-400 white-space-nowrap">Level 2</a>
        </li>
        <li class="px-2">
          <i class="pi pi-angle-right text-gray-400"></i>
        </li>
        <li class="px-2">
          <a class="cursor-pointer text-indigo-300 white-space-nowrap">Level 1</a>
        </li>
      </ul>
    </div>
    <div class="p-5 flex flex-column flex-auto" style="margin-top: -8rem">
      <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
        
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
