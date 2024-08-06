<template>
  <div>
    <form @submit.prevent="handleCalculate">
      <div class="input-container">
        <label for="loan-amount" class="label-input">Loan amount ($):</label>
        <input
          name="loan-amount"
          id="loan-amount"
          type="number"
          required
          :min="1"
          v-model.number="loanAmount"
        />
      </div>

      <div class="input-container">
        <label for="loan-term" class="label-input">Loan term (in years):</label>
        <input
          name="loan-term"
          id="loan-term"
          type="number"
          required
          :min="1"
          v-model.number="loanTerm"
        />
      </div>

      <div class="input-container">
        <label for="annual-interest-rate" class="label-input">Annual interest rate (%):</label>
        <input
          name="annual-interest-rate"
          id="annual-interest-rate"
          type="number"
          required
          :min="0.1"
          :step="0.1"
          v-model.number="annualInterestRate"
        />
      </div>

      <div class="submit-btn">
        <button type="submit">Calculate</button>
      </div>
    </form>

    <div class="result">
      <div>
        Monthly Payment Amount: <span class="result__text">{{ monthlyMortgagePayment }}</span>
      </div>
      <div>
        Total Payment Amount: <span class="result__text">{{ totalPaymentAmount }}</span>
      </div>
      <div>
        Total Interest Paid: <span class="result__text">{{ totalInterestPaid }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const loanAmount = ref<number | null>(100000)
const loanTerm = ref<number | null>(30)
const annualInterestRate = ref<number | null>(3)

const monthlyMortgagePayment = ref<string>()
const totalPaymentAmount = ref<string>()
const totalInterestPaid = ref<string>()

const monthlyInterestRate = computed(() => {
  if (annualInterestRate.value) {
    return annualInterestRate.value / 100 / 12
  }
  return null
})

const totalNumberOfPayments = computed(() => {
  if (loanTerm.value) {
    return loanTerm.value * 12
  }
  return null
})

function formatNumber(num: number) {
  return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(num)
}

function handleCalculate() {
  if (
    !loanAmount.value ||
    !loanTerm.value ||
    !annualInterestRate.value ||
    !monthlyInterestRate.value ||
    !totalNumberOfPayments.value
  ) {
    return
  }

  const monthlyMortgagePaymentResult =
    (loanAmount.value *
      (monthlyInterestRate.value *
        Math.pow(1 + monthlyInterestRate.value, totalNumberOfPayments.value))) /
    (Math.pow(1 + monthlyInterestRate.value, totalNumberOfPayments.value) - 1)

  const totalPaymentAmountResult = monthlyMortgagePaymentResult * totalNumberOfPayments.value
  const totalInterestPaidResult = totalPaymentAmountResult - loanAmount.value

  monthlyMortgagePayment.value = formatNumber(monthlyMortgagePaymentResult)
  totalPaymentAmount.value = formatNumber(totalPaymentAmountResult)
  totalInterestPaid.value = formatNumber(totalInterestPaidResult)
}
</script>

<style scoped>
.label-input {
  margin-right: 10px;
}

.input-container {
  margin-top: 6px;
}

.input-container:first-child {
  margin-top: 0;
}

.submit-btn {
  margin-bottom: 20px;
}

.result__text {
  font-weight: bold;
}
</style>
