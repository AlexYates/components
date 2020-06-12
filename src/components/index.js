import Vue from "vue";
import SimpleButton from './SimpleButton.vue';
import SimpleInput from './SimpleInput.vue';
import SimpleIcon from './SimpleIcon.vue';
import SimpleHeading from './SimpleHeading.vue';

const Components = {
  SimpleButton,
  SimpleHeading,
  SimpleIcon,
  SimpleInput
};

Object.keys(Components).forEach((name) => Vue.component(name, Components[name]));

export default Components;
