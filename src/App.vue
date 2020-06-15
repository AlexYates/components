<template>
  <div class="p-4" id="app">
    <!--  -->
    <SimpleBackLink />
    <!--  -->
    <SimpleBreadcrumbs
      :items="[
        { text: `Home`, url: `/one` },
        { text: `Passports, travel and living abroad`, url: `/two` },
        { text: `Travel abroad`, url: `/three` },
      ]"
    />
    <!--  -->
    <SimpleButton :disabled="false" :wide="false">Save and continue</SimpleButton>
    <!--  -->
    <SimpleButton :disabled="false" type="warning" :wide="true">Save and continue</SimpleButton>
    <!--  -->
    <SimpleButtonNavigation :disabled="false" to="/" :wide="true">
        <span>Start your application</span>
        <SimpleIcon size="xs">
          <path d="M10 2 L10 30 24 16 Z" />
        </SimpleIcon>
    </SimpleButtonNavigation>
    <!--  -->
    <SimpleFieldset :legend="'Which types of waste do you transport?'">
      <!--  -->
      <SimpleHint :id="`waste-hint`" :hint="`Select all that apply.`" />
      <!--  -->
      <SimpleCheckboxes
        :items="[
        {
          id: `waste`,
          name: `waste`,
          value: `carcasses`,
          label: `Waste from animal carcasses`
        },
        {
          id: `waste-2`,
          name: `waste-2`,
          value: `mines`,
          label: `Waste from mines or quarries `
        },
        {
          id: `waste-3`,
          name: `waste-3`,
          value: `agricultural`,
          label: `Farm or agricultural waste `
        } 
      ]"
      ></SimpleCheckboxes>
      <!--  -->
    </SimpleFieldset>

    <!--  -->
    <SimpleDetails />
    <!--  -->
    <SimpleErrorMessage
      :id="'apples'"
      :text="`The date your passport was issued must be in the past`"
    />
    <!--  -->
    <SimpleErrorSummary
      :id="'goats'"
      :items="[
        {
          text: `The date your passport was issued must be in the past`,
          url: `#passport-issued-error`
        },
        {
          text: `Enter a postcode, like AA1 1AA`,
          url: `#postcode-error`
        }
      ]"
      :title="'There is a problem'"
    />
    <!--  -->
    <SimpleInsetText
      :text="`It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.`"
    />
    <!--  -->
    <SimplePanel :title="`Application complete`">
      <span class="text-lg">Your reference number</span>
      <br />
      <strong>HDJ2123F</strong>
    </SimplePanel>
    <!--  -->
    <SimpleFieldset :legend="'Have you changed your name?'">
      <div
        id="changed-name"
        class="mb-2 text-gray-700 simple-hint"
      >This includes changing your last name or spelling your name differently.</div>
      <SimpleRadios
        :items="[
          {
            id: `changed-name-1`,
            name: `changed-name`,
            value: `yes`,
            label: `Yes`
          },
          {
            id: `changed-name-2`,
            name: `changed-name`,
            value: `no`,
            label: `No`
          }
        ]"
      />
    </SimpleFieldset>
    <!--  -->
    <SimpleSelect
      :id="`select-posts`"
      :items="[
        { isSelected: false, text: `Recently published`, value: `published` },
        { isSelected: true, text: `Recently updated`, value: `updated` },
        { isSelected: false, text: `Most views`, value: `views` },
        { isSelected: false, text: `Most comments`, value: `comments` }
      ]"
      :label="`Sort by `"
      :name="`select-posts`"
    />
    <!--  -->
    <SimpleSkipLink />
    <!--  -->
    <SimpleSummaryList
      :items="[
        { key: 'Name', value: 'Sarah Philips', actions: { href: '#', text: 'Change name' } },
        { key: 'Date of birth', value: '5 January 1918', actions: { href: '#', text: 'Change date of birth' } },
        { key: 'Contact information', values: [ '72 Guild Street', 'London', 'SE23 6FH' ], actions: { href: '#', text: 'Change contact information' } },
        { key: 'Contact details', values: [ '0770 456812', 'sarah.phillips@example.com' ], actions: { href: '#', text: 'Change contact details' } },
      ]"
    />
    <!--  -->
    <SimpleTag :colour="`red`" :text="`Hello`" />
    <!--  -->
    <SimpleTextarea
      :id="`more-detail`"
      :name="`more-detail`"
      :rows="5"
      :describedBy="`more-detail-label`"
    />
    <!--  -->
    <SimpleWarningText
      :assistive="`Warning`"
      :text="`You can be fined up to £5000 if you do not dance on the spot.`"
    />
    <!--  -->
  </div>
</template>

<script>
import SimpleIcon from "./components/SimpleIcon.vue";
//
import SimpleBackLink from "./components/SimpleBackLink.vue";
import SimpleBreadcrumbs from "./components/SimpleBreadcrumbs.vue";
import SimpleButton from "./components/SimpleButton.vue";
import SimpleButtonNavigation from "./components/SimpleButtonNavigation.vue";
import SimpleCheckboxes from "./components/SimpleCheckboxes.vue";
import SimpleDetails from "./components/SimpleDetails.vue";
import SimpleErrorMessage from "./components/SimpleErrorMessage.vue";
import SimpleErrorSummary from "./components/SimpleErrorSummary.vue";
import SimpleFieldset from "./components/SimpleFieldset.vue";
import SimpleHint from "./components/SimpleHint.vue";
import SimpleInsetText from "./components/SimpleInsetText.vue";
import SimplePanel from "./components/SimplePanel.vue";
import SimpleRadios from "./components/SimpleRadios.vue";
import SimpleSelect from "./components/SimpleSelect.vue";
import SimpleSkipLink from "./components/SimpleSkipLink.vue";
import SimpleSummaryList from "./components/SimpleSummaryList.vue";
import SimpleTag from "./components/SimpleTag.vue";
import SimpleTextarea from "./components/SimpleTextarea.vue";
import SimpleWarningText from "./components/SimpleWarningText.vue";

export default {
  name: "App",
  components: {
    SimpleIcon,
    //
    SimpleBackLink,
    SimpleBreadcrumbs,
    SimpleButton,
    SimpleButtonNavigation,
    SimpleCheckboxes,
    SimpleDetails,
    SimpleErrorMessage,
    SimpleErrorSummary,
    SimpleFieldset,
    SimpleHint,
    SimpleInsetText,
    SimplePanel,
    SimpleRadios,
    SimpleSelect,
    SimpleSkipLink,
    SimpleSummaryList,
    SimpleTag,
    SimpleTextarea,
    SimpleWarningText
  }
};
</script>
