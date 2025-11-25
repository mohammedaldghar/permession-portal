<script setup lang="ts">
import {useFetch} from "nuxt/app";
import {Permit} from "../../types/permit";

const {data: permits, pending, refresh} = useFetch<Permit[]>('/api/permits', {
  key: 'permits',
  default: () => [],
  server: false,
  lazy:true
})

const statusBadge = (status: string) => {
  if (status === 'Approved') return 'bg-[#006633] text-white'
  if (status === 'Rejected') return 'bg-red-600 text-white'
  return 'bg-yellow-500 text-black'
}
</script>

<template>
  <div class="space-y-12">
    <div class="flex justify-between items-center flex-wrap gap-6">
      <h2 class="text-4xl font-bold text-primary">جميع طلبات التصاريح</h2>
      <NuxtLink to="/apply"
                class="bg-primary hover:bg-[#004d25] hover:text-white text-[#004d25] px-8 py-5 rounded-xl text-xl font-bold shadow-lg transition">
        تقديم طلب جديد
      </NuxtLink>
    </div>

    <!-- Loading -->
    <div v-if="pending" class="text-center py-20">
      <p class="text-2xl text-gray-500">جاري تحميل الطلبات...</p>
    </div>

    <!-- Permits List -->
    <div v-else-if="permits.length" class="grid gap-8">
      <div v-for="p in permits" :key="p.id" class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
        <div class="flex justify-between items-start flex-col md:flex-row gap-6">
          <div class="space-y-3">
            <h3 class="text-2xl font-bold text-primary">{{ p.applicant_name }}</h3>
            <p class="text-lg text-gray-700">{{ p.applicant_email }}</p>
            <p class="text-lg">النوع: <span class="font-bold">{{ p.permit_type }}</span></p>
            <p class="text-sm text-gray-500">
              {{ new Date(p.submitted_at).toLocaleString('ar-SA') }}
            </p>
          </div>
          <span :class="statusBadge(p.application_status)" class="px-8 py-4 rounded-full text-lg font-bold">
            {{
              p.application_status === 'Approved' ? 'تمت الموافقة' :
                  p.application_status === 'Rejected' ? 'مرفوض' : 'قيد الانتظار'
            }}
          </span>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <p class="text-2xl text-gray-600">لا توجد طلبات حتى الآن</p>
    </div>
  </div>
</template>