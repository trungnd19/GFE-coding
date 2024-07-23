<template>
  <div>
    <button class="time" @click="toggleStopwatch">
      <span v-if="formattedTime.hours > 0">
        <span class="time-number">{{ formattedTime.hours }}</span>
        <span class="time-unit">h</span>
      </span>
      <span v-if="formattedTime.minutes > 0">
        <span class="time-number">{{ formattedTime.minutes }}</span>
        <span class="time-unit">m</span>
      </span>
      <span>
        <span class="time-number">{{ formattedTime.seconds }}</span>
        <span class="time-unit">s</span>
      </span>
      <span class="time-number time-number--small">
        {{ padTwoDigit(Math.floor(formattedTime.ms / 10)) }}
      </span>
    </button>
    <div>
      <button @click="toggleStopwatch">
        {{ isRunning ? 'Stop' : 'Start' }}
      </button>
      <button @click="resetStopwatch">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const timerId = ref<number | null>(null)
const isRunning = computed(() => Boolean(timerId.value))
const lastTickTiming = ref<number | null>(null)
const totalDuration = ref<number>(0)

const MS_IN_SECOND = 1000
const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60

const MS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND // 60 * 60 * 1000
const MS_IN_MINUTE = SECONDS_IN_MINUTE * MS_IN_SECOND // 60 * 1000

// Suppose time = 3,728,456 ms (which is 1 hour, 2 minutes, 8 seconds, and 456 milliseconds).
// parts.hours = Math.floor(3,728,456 / 3,600,000) = 1;
// time %= MS_IN_HOUR => time = 3,728,456 % 3,600,000 = 128,456 ms;
// parts.minutes = Math.floor(128,456 / 60,000) = 2;
// time %= MS_IN_MINUTE; => time = 128,456 % 60,000 = 8,456 ms;
// parts.seconds = Math.floor(time / MS_IN_SECOND);
// parts.seconds = Math.floor(8,456 / 1,000) = 8;
// time %= MS_IN_SECOND; => time = 8,456 % 1,000 = 456 ms;
function formatTime(timeParam: number) {
  let time = timeParam
  const parts = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0
  }

  if (time >= MS_IN_HOUR) {
    parts.hours = Math.floor(time / MS_IN_HOUR)
    time %= MS_IN_HOUR
  }

  if (time >= MS_IN_MINUTE) {
    parts.minutes = Math.floor(time / MS_IN_MINUTE)
    time %= MS_IN_MINUTE
  }

  if (time >= MS_IN_SECOND) {
    parts.seconds = Math.floor(time / MS_IN_SECOND)
    time %= MS_IN_SECOND
  }

  parts.ms = time
  return parts
}

function toggleStopwatch() {
  if (isRunning.value) {
    pauseStopwatch()
  } else {
    startStopwatch()
  }
}

function startStopwatch() {
  lastTickTiming.value = Date.now()
  timerId.value = setInterval(() => {
    const now = Date.now()
    const timePassed = now - lastTickTiming.value!!
    totalDuration.value += timePassed
    lastTickTiming.value = now
  }, 1)
}

function padTwoDigit(number: number) {
  return number >= 10 ? String(number) : `0${number}`
}

function pauseStopwatch() {
  clearInterval(timerId.value!!)
  timerId.value = null
}

function resetStopwatch() {
  pauseStopwatch()
  totalDuration.value = 0
}

const formattedTime = computed(() => formatTime(totalDuration.value))
</script>

<style scoped>
.time {
  align-items: baseline;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 16px;
  user-select: none;
}

.time-unit {
  font-size: 24px;
}

.time-number {
  font-size: 62px;
}

.time-number--small {
  font-size: 36px;
}
</style>

<!-- NOTE 
- Dùng totalDuration để hiển thị thời gian đã trôi qua
- totalDuration là ms => quy đổi từ ms ra h, m, s 
-->
