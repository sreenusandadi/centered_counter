import { factory } from './factory';

let count = factory(0, 1);

function update_count_and_reset_counter() {
  if (
    isNaN(Number(start_at_control.value)) ||
    isNaN(Number(step_control.value))
  ) {
    alert('Please enter valid number!');
    return;
  }

  count = factory(+start_at_control.value, +step_control.value);
  current_count.innerText = start_at_control.value
    ? start_at_control.value
    : '0';
}

const start_at_control = document.getElementById(
  'start_at',
) as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('change', () => {
  update_count_and_reset_counter();
});

step_control?.addEventListener('change', () => {
  update_count_and_reset_counter();
});

const count_button = document.querySelector(
  '.count_button',
) as HTMLButtonElement;

const current_count = document.querySelector(
  '.current_count',
) as HTMLSpanElement;

function update_count() {
  current_count.innerText = count().toString();
}

count_button.addEventListener('click', update_count);
