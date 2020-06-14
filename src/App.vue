<template>
  <div class="p-4" id="app">
    <!--  -->
    <SimpleBackLink />
    <!--  -->
    <SimpleBreadcrumbs
      :items="[
        { text: `One`, url: `/one` },
        { text: `Two`, url: `/two` },
        { text: `Three`, url: `/three` },
        { text: `Four`, url: `/four` }
      ]"
    />
    <!--  -->
    <SimpleButton :disabled="false" :wide="true">
      <SimpleIcon class="mr-2">
        <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </SimpleIcon>
      <template slot="default">Default</template>
      <SimpleIcon class="ml-2">
        <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </SimpleIcon>
    </SimpleButton>
    <!--  -->
    <SimpleFieldset :legend="'Which types of waste do you transport?'">
      <span id="waste-hint" class="govuk-hint">Select all that apply.</span>
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
          value: `carcasses-2`,
          label: `Waste from animal carcasses-2`
        },
        {
          id: `waste-3`,
          name: `waste-3`,
          value: `carcasses-3`,
          label: `Waste from animal carcasses-3`
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
    <SimpleFieldset :legend="'I am legend'" />
    <!--  -->
    <SimpleInsetText
      :text="`It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.`"
    />
    <!--  -->
    <SimplePanel :title="`Your reference number`">
      <br />
      <strong>HDJ2123F</strong>
    </SimplePanel>
    <!--  -->
    <SimpleFieldset :legend="'Hiya!'">
      <span
        id="waste-hint"
        class="govuk-hint"
      >This includes changing your last name or spelling your name differently.</span>
      <SimpleRadios
        :items="[
          {
            id: `changed-name-1`,
            name: `changed-name`,
            value: `yes`,
            label: `Yeppers`
          },
          {
            id: `changed-name-2`,
            name: `changed-name`,
            value: `no`,
            label: `Nopey-nopes`
          }
        ]"
      />
    </SimpleFieldset>
    <!--  -->
    <SimpleSelect
      :id="`twotwo`"
      :items="[
        { isSelected: false, text: `Recently published`, value: `published` },
        { isSelected: true, text: `Recently updated`, value: `updated` },
        { isSelected: false, text: `Most views`, value: `views` },
        { isSelected: false, text: `Most comments`, value: `comments` }
      ]"
      :label="`This is a label for posts`"
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
import SimpleBackLink from "./components/SimpleBackLink.vue";
import SimpleBreadcrumbs from "./components/SimpleBreadcrumbs.vue";
import SimpleButton from "./components/SimpleButton.vue";
import SimpleCheckboxes from "./components/SimpleCheckboxes.vue";
import SimpleDetails from "./components/SimpleDetails.vue";
import SimpleErrorMessage from "./components/SimpleErrorMessage.vue";
import SimpleErrorSummary from "./components/SimpleErrorSummary.vue";
import SimpleFieldset from "./components/SimpleFieldset.vue";
import SimpleInsetText from "./components/SimpleInsetText.vue";
import SimplePanel from "./components/SimplePanel.vue";
import SimpleRadios from "./components/SimpleRadios.vue";
import SimpleSelect from "./components/SimpleSelect.vue";
import SimpleSkipLink from "./components/SimpleSkipLink.vue";
import SimpleSummaryList from "./components/SimpleSummaryList.vue";
import SimpleTag from "./components/SimpleTag.vue";
import SimpleTextarea from "./components/SimpleTextarea.vue";
import SimpleWarningText from "./components/SimpleWarningText.vue";

import SimpleIcon from "./components/SimpleIcon.vue";

export default {
  name: "App",
  components: {
    SimpleBackLink,
    SimpleBreadcrumbs,
    SimpleButton,
    SimpleCheckboxes,
    SimpleDetails,
    SimpleErrorMessage,
    SimpleErrorSummary,
    SimpleFieldset,
    SimpleInsetText,
    SimplePanel,
    SimpleRadios,
    SimpleSelect,
    SimpleSkipLink,
    SimpleSummaryList,
    SimpleTag,
    SimpleTextarea,
    SimpleWarningText,
    //
    SimpleIcon
  }
};
</script>
