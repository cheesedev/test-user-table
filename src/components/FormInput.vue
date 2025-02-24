<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { required, email, date, phone } from '@/utils/validation';

const props = defineProps({
  modelValue: String,
  label: String,
  type: String,
  placeholder: String,
  required: Boolean,
});

const emit = defineEmits(['update:modelValue', 'validation']);

const inputValue = ref(props.modelValue || '');
const errorMessage = ref('');

const validate = () => {
  errorMessage.value = '';

  const validationRules = [];

  if (props.required) validationRules.push(required);
  if (props.type === 'email') validationRules.push(email);
  if (props.type === 'tel') validationRules.push(phone);
  if (props.type === 'date') validationRules.push(date);

  for (const rule of validationRules) {
    const error = rule(inputValue.value);
    if (error) {
      errorMessage.value = error;
      break;
    }
  }

  emit('validation', !errorMessage.value);
};

watch(inputValue, () => {
  validate();
  emit('update:modelValue', inputValue.value);
});
</script>

<template>
  <div class="form-input">
    <label class="form-input__label" v-if="label">{{ label }}</label>
    <input
        :type="type"
        v-model="inputValue"
        :placeholder="placeholder"
        @blur="validate"
    />
    <p class="form-input__error">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
      outline: none;
      border: 1px solid #1e1e1e;
    }
  }

  &__label {
    font-size: 12px;
    margin-bottom: 4px;
  }

  &__error {
    user-select: none;
    color: #2c4086;
    font-size: 12px;
    margin-top: 4px;
    height: 6px;
  }

}
</style>
