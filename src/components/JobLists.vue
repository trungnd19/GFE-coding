<template>
  <h1>Hacker news jobs board</h1>
  <div v-for="jobDetail of jobsDetail">
    <div>
      <a :href="jobDetail?.url" v-if="jobDetail?.url" target="_blank">
        {{ jobDetail?.title }}
      </a>
      <div v-else>
        {{ jobDetail?.title }}
      </div>
    </div>
    <div>By: {{ jobDetail?.by }}</div>
    <div>Date Posted: {{ new Date(jobDetail?.time * 1000).toLocaleString() }}</div>
  </div>
  <button
    type="button"
    @click="handleLoadMore"
    :disabled="isFetchingJobDetail"
    v-if="!(jobsDetail.length === idsList.length)"
  >
    Load more
  </button>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

export interface JobDetail {
  by: string
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
}
const ID_API = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
const JOB_DETAIL_API = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const idsList = ref<number[]>([])
const jobsDetail = ref<JobDetail[]>([])
const latestStartIndex = ref(0)
const isFetchingJobDetail = ref(false)

async function getIdsList() {
  try {
    const response = await window.fetch(ID_API, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    idsList.value = json
  } catch (error) {
    console.log(error)
  }
}

async function getJobDetail() {
  isFetchingJobDetail.value = true
  const selectedSixJobs = idsList.value.slice(latestStartIndex.value, latestStartIndex.value + 6)
  const jobPromises = selectedSixJobs.map(async (jobId) => {
    try {
      const response = await window.fetch(JOB_DETAIL_API(jobId))
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      return response.json()
    } catch (err) {
      console.log(err)
      return null // Return null or handle the error as needed
    }
  })

  try {
    const jobsDetails = await Promise.all(jobPromises)
    jobsDetails.forEach((job) => {
      if (job) {
        jobsDetail.value.push(job)
      }
    })
  } catch (err) {
    console.log(err)
  }
  isFetchingJobDetail.value = false
}

function handleLoadMore() {
  latestStartIndex.value += 6
  getJobDetail()
}

onMounted(async () => {
  await getIdsList()
  await getJobDetail()
})
</script>
<style scoped></style>
