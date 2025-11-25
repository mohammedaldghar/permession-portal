<script setup lang="ts">
import {reactive} from "vue";
import {navigateTo} from "nuxt/app";

const form = reactive({
  applicant_name: '',
  applicant_email: '',
  permit_type: ''
})

const submit = async () => {
  if (!form.applicant_name || !form.applicant_email || !form.permit_type) {
    alert('يرجى ملء جميع الحقول')
    return
  }
  await $fetch('/api/permits', {
    method: 'POST',
    body: form
  })
  navigateTo('/')
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="bg-white rounded-2xl shadow-2xl p-10">
      <h2 class="text-4xl font-bold text-primary text-center mb-10">
        تقديم طلب تصريح جديد
      </h2>

      <form @submit.prevent="submit" class="space-y-8">
        <div>
          <label class="block text-xl font-bold mb-3">الاسم الكامل <span class="text-red-600">*</span></label>
          <input v-model="form.applicant_name" required class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary outline-none text-lg" />
        </div>

        <div>
          <label class="block text-xl font-bold mb-3">البريد الإلكتروني <span class="text-red-600">*</span></label>
          <input v-model="form.applicant_email" type="email" required class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary outline-none text-lg" />
        </div>

        <div>
          <label class="block text-xl font-bold mb-3">نوع التصريح <span class="text-red-600">*</span></label>
          <input v-model="form.permit_type" required placeholder="مثال: تصريح بناء، تصريح تجاري..." class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary outline-none text-lg" />
        </div>

        <button type="submit" class="w-full bg-primary hover:bg-[#004d25] hover:text-white text-[#004d25] py-6 rounded-xl text-2xl font-bold transition shadow-lg">
          إرسال الطلب
        </button>
      </form>
    </div>
  </div>
</template>