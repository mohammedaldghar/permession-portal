<script setup lang="ts">
const form = reactive({
  applicant_name: '',
  applicant_email: '',
  permit_type: ''
})

const submit = async () => {
  if (!form.applicant_name || !form.applicant_email || !form.permit_type) {
    alert('يرجى تعبئة جميع الحقول المطلوبة')
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
  <div class="min-h-screen bg-gray-50 py-12" dir="rtl">
    <div class="max-w-7xl mx-auto px-6">
      <h1 class="text-center text-4xl font-bold text-primary mb-12">طلب إصدار تصريح</h1>

      <div class="grid md:grid-cols-4 gap-10">
        <!-- الفورم على اليمين -->
        <div class="md:col-span-3">
          <div class="bg-white rounded-2xl shadow-xl p-10">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <h2 class="text-2xl font-bold text-primary">البيانات الأساسية</h2>
            </div>

            <form @submit.prevent="submit" class="space-y-10">
              <!-- الاسم الكامل -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-lg font-bold mb-2">
                    الاسم الكامل <span class="text-red-600">*</span>
                  </label>
                  <input v-model="form.applicant_name" required
                    class="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:border-primary outline-none text-lg"
                    placeholder="أدخل الاسم الكامل" />
                </div>
                <div></div>
              </div>

              <!-- البريد الإلكتروني -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-lg font-bold mb-2">
                    البريد الإلكتروني <span class="text-red-600">*</span>
                  </label>
                  <input v-model="form.applicant_email" type="email" required
                    class="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:border-primary outline-none text-lg"
                    placeholder="example@domain.com" />
                </div>
                <div></div>
              </div>

              <!-- نوع التصريح -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-lg font-bold mb-2">
                    نوع التصريح <span class="text-red-600">*</span>
                  </label>
                  <input v-model="form.permit_type" required
                    class="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:border-primary outline-none text-lg"
                    placeholder="مثال: تصريح بناء، تصريح تجاري..." />
                </div>
                <div></div>
              </div>

              <!-- الأزرار -->
              <div class="flex justify-start pt-8 gap-3">
                <NuxtLink to="/" class="px-12 py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg text-xl transition">
                  رجوع
                </NuxtLink>

                <button type="submit" class="px-12 py-4 bg-primary hover:bg-[#1B8354] bg-[#1B8354] text-white font-bold rounded-lg text-xl shadow-lg transition">
                  إرسال الطلب
                </button>
              </div>
            </form>
          </div>
        </div>

         <!-- المراحل على اليسار -->
        <div class="md:col-span-1 bg-[#F9FAFB]">
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-primary text-[#1B8354] flex items-center justify-center font-bold text-xl shadow-lg border-[#1B8354] border" >
                1
              </div>
              <div>
                <p class="font-bold text-primary">تعبئة البيانات</p>
                <p class="text-sm text-gray-600">وضع الحقول</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>