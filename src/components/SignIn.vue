<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
</script>

<template>

<div style="background: url('images/blocks/signin/signin-2.jpg') no-repeat; background-size: cover" class="px-4 py-8 md:px-6 lg:px-8">
  <div class="flex flex-wrap">
    <div class="w-full lg:w-6 p-4 lg:p-7" style="background-color: rgba(255,255,255,.7)">
      <img src="images/blocks/logos/bastion-purple.svg" alt="Image" height="50" class="mb-6">
      <div class="text-xl text-900 font-500 mb-3">Welcome to Bastion</div>
      <p class="text-600 line-height-3 mt-0 mb-6">Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea dictumst quisque.</p>
      <ul class="list-none p-0 m-0">
        <li class="flex align-items-start mb-4">
          <div>
            <span class="flex align-items-center justify-content-center bg-purple-400" style="width:38px;height:38px;border-radius:10px">
              <i class="text-xl text-white pi pi-inbox"></i>
            </span>
          </div>
          <div class="ml-3">
            <span class="font-medium text-900">Unlimited Inbox</span>
            <p class="mt-2 mb-0 text-600 line-height-3">Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. </p>
          </div>
        </li>
        <li class="flex align-items-start mb-4">
          <div>
            <span class="flex align-items-center justify-content-center bg-purple-400" style="width:38px;height:38px;border-radius:10px">
              <i class="text-xl text-white pi pi-shield"></i>
            </span>
          </div>
          <div class="ml-3">
            <span class="font-medium text-900">Premium Security</span>
            <p class="mt-2 mb-0 text-600 line-height-3">Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium quam vulputate.</p>
          </div>
        </li>
        <li class="flex align-items-start">
          <div>
            <span class="flex align-items-center justify-content-center bg-purple-400" style="width:38px;height:38px;border-radius:10px">
              <i class="text-xl text-white pi pi-globe"></i>
            </span>
          </div>
          <div class="ml-3">
            <span class="font-medium text-900">Cloud Backups Inbox</span>
            <p class="mt-2 mb-0 text-600 line-height-3">Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
      <div class="text-900 text-2xl font-medium mb-6">Login</div>
      <label for="email3" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email3" type="text" class="w-full mb-4" />

      <label for="password3" class="block text-900 font-medium mb-2">Password</label>
      <InputText id="password3" type="password" class="w-full mb-4" />
    
      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <Checkbox id="rememberme3" :binary="true" v-model="checked3" class="mr-2"></Checkbox>
          <label for="rememberme3">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
      </div>
    
      <Button label="Login" icon="pi pi-user" class="w-full"></Button>

      <Divider align="center" class="my-6">
        <span class="text-600 font-normal text-sm">OR</span>
      </Divider>

      <Button label="Sign In with GitHub" icon="pi pi-github" class="w-full p-button-secondary"></Button>

      <div class="mt-6 text-center text-600">
        Don't have an account? <a tabindex="0" class="font-medium text-blue-500">Sign up</a>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass">
</style>