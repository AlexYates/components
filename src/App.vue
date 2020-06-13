<template>
  <div class="p-4" id="app">
    <SimpleHeading :level="1">This is a heading component at level 1</SimpleHeading>
    <SimpleInput
      hint="Some usefull information about this component"
      error="A custom error message for this component"
      name="hello"
      :required="true"
    >
      <template slot="label">This is the Label Input Text component</template>
    </SimpleInput>
    <SimpleButton :disabled="false" :wide="true">
      <SimpleIcon class="mr-2">
        <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </SimpleIcon>
      <template slot="default">Default</template>
      <SimpleIcon class="ml-2">
        <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </SimpleIcon>
    </SimpleButton>
    <SimpleHeading :level="2">This is a heading component at level 2</SimpleHeading>
    <p
      class="mb-2"
    >Repellendus id corporis, accusamus voluptates neque rem blanditiis sequi deserunt saepe adipisci ullam cupiditate ad dicta omnis, sunt illo ipsum. Veniam, quod.</p>
    <p class="mb-2">
      Quam laborum unde natus itaque. Quaerat blanditiis sint ipsum sit nostrum, doloribus hic obcaecati magni incidunt maxime magnam eaque veniam qui nulla.
      <br />Amet error doloribus dolorem ea totam, minus tempore quasi rerum nam ipsam commodi provident quaerat architecto expedita beatae minima porro inventore itaque. Dolorum, doloribus consequuntur. Veniam ipsam atque ab itaque enim, facere distinctio suscipit molestiae recusandae! Accusantium ullam at quod quasi facere suscipit minus?
    </p>

    <SimpleSelect
      hint="Some usefull information about this component"
      error="A custom error message for this component"
      name="someOptions"
      :options="[
        {
          text: 'Hello',
          value: 'hello'
        },
        {
          text: 'Goodbye',
          value: 'goodbye'
        },
        {
          text: 'Hello2',
          value: 'hello2'
        },
        {
          text: 'Goodbye2',
          value: 'goodbye2'
        },
      ]"
      :required="true"
    >
      <template slot="label">This is the Simple Select component</template>
    </SimpleSelect>

    <p
      class="mb-2"
    >Minima distinctio deleniti quibusdam ullam odit ratione tempora saepe suscipit modi maiores voluptatem maxime unde porro nulla, impedit sunt illo vitae. Consequatur?</p>
    <SimpleHeading :level="3">This is a heading component at level 3</SimpleHeading>
    <p
      class="mb-2"
    >Corporis fugit voluptatem recusandae! Nam fugit temporibus modi expedita hic nesciunt aspernatur officiis tenetur maxime enim, sit inventore error natus ipsam consequuntur?</p>
    <SimpleButton :disabled="true" :wide="false">
      <SimpleIcon class="mr-2">
        <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </SimpleIcon>
      <template slot="default">Default</template>
      <SimpleIcon class="ml-2">
        <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </SimpleIcon>
    </SimpleButton>
    <p class="mb-2">
      Velit iusto tempore quod minus provident eligendi omnis aperiam, labore sapiente, soluta ratione facere voluptates delectus explicabo quisquam. Corporis reprehenderit repellendus impedit?
      <br />Quaerat reiciendis, mollitia enim fugiat molestiae voluptatibus eveniet dolorum illum corrupti dolore cumque doloribus excepturi in voluptas laudantium quasi fuga, praesentium ut.
    </p>
  </div>
</template>

<script>
import SimpleButton from "./components/SimpleButton.vue";
import SimpleHeading from "./components/SimpleHeading.vue";
import SimpleIcon from "./components/SimpleIcon.vue";
import SimpleInput from "./components/SimpleInput.vue";
import SimpleSelect from "./components/SimpleSelect.vue";

export default {
  name: "App",
  components: {
    SimpleButton,
    SimpleHeading,
    SimpleIcon,
    SimpleInput,
    SimpleSelect
  }
};
</script>
