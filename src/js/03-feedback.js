import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
let feedbackFormData = {};
populateTextarea();

function onFormInput(evt) {
  feedbackFormData[evt.target.name] = evt.target.value;
  const storageData = JSON.stringify(feedbackFormData);
  localStorage.setItem(STORAGE_KEY, storageData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(feedbackFormData);
  return (feedbackFormData = {});
}

function populateTextarea() {
  const savedStorageData = localStorage.getItem(STORAGE_KEY);
  if (savedStorageData) {
    feedbackFormData = JSON.parse(savedStorageData);
    if (feedbackFormData.email) {
      refs.email.value = feedbackFormData.email;
    }
    if (feedbackFormData.message) {
      refs.textarea.value = feedbackFormData.message;
    }
  }
}
