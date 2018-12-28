import {storiesOf} from '@storybook/angular';
import {NxSplitPageComponent} from 'nx-split-page';
import {withNotes} from '@storybook/addon-notes';
import * as marked from 'marked';
import defaultText from '../../README.md';

storiesOf('Nx-Split-Page', module)
  .add(
    'Well default, this is how it looks like without any content',
    withNotes({text: marked(defaultText)})(() => ({
      component: NxSplitPageComponent,
      notes: {
        markdown: defaultText,
      },
    })),
  )
  .add('Long red content in main section, short in side section', () => ({
    moduleMetadata: {
      declarations: [NxSplitPageComponent],
    },
    template: `
      <div>
        <style>
          .long-content \{
            background-color: #D13A32;
            min-height: 500px;
            width: 100%;
          \}
        </style>
        <nx-split-page>
          <div main-area class="long-content">
          </div>
          <div side-area>
            short content
          </div>
        </nx-split-page>
      </div>
    `,
  }))
  .add(
    'Long red content in the side section, short content in main section',
    () => ({
      moduleMetadata: {
        declarations: [NxSplitPageComponent],
      },
      template: `
      <div>
        <style>
          .long-content \{
            background-color: #D13A32;
            min-height: 500px;
            width: 100%;
          \}
        </style>
        <nx-split-page>
          <div side-area class="long-content">
          </div>
          <div main-area>
            short content
          </div>
        </nx-split-page>
      </div>
    `,
    }),
  )
  .add(
    `Slider with persistent position, it can store it's position to local storage
    change slider position and refresh the page`,
    () => ({
      moduleMetadata: {
        declarations: [NxSplitPageComponent],
      },
      template: `
      <div>
        <nx-split-page storageSettingsKey="localStorageKey">
          <div main-area>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
          </div>
          <div side-area>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
          </div>
        </nx-split-page>
      </div>
    `,
    }),
  )
  .add(
    `it's possible to set min max thresholds for main and side sections mainMinSize: number - min size in px,
    sideSize: string accepts default side size in px or %`,
    () => ({
      moduleMetadata: {
        declarations: [NxSplitPageComponent],
      },
      template: `
      <div>
        <nx-split-page [mainMinSize]="600" [sideSize]="'55%'" [sideMinSize]="280" storageSettingsKey="localStorageKey">
          <div main-area>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
          </div>
          <div side-area>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
          </div>
        </nx-split-page>
      </div>
    `,
    }),
  )
  .add(`it's possible to hide side section`, () => ({
    moduleMetadata: {
      declarations: [NxSplitPageComponent],
    },
    template: `
      <div>
        <nx-split-page [hideSidebar]="true"
[mainMinSize]="600" [sideSize]="'55%'" [sideMinSize]="280" storageSettingsKey="localStorageKey">
          <div main-area>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
          </div>
          <div side-area>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
            dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
            perferendis rem temporibus ut voluptates, voluptatum?
          </div>
        </nx-split-page>
      </div>
    `,
  }))
  .add(
    `it's possible to make it full hight and scroll comtent in defferent sections`,
    () => ({
      moduleMetadata: {
        declarations: [NxSplitPageComponent],
      },
      template: `
      <div>
        <style>
          .long-content \{
            background-color: #D13A32;
            min-height: 500px;
            width: 100%;
          \}
        </style>
        <nx-split-page>
          <div main-area class="long-content">
          </div>
          <div side-area>
            short content
          </div>
        </nx-split-page>
      </div>
    `,
    }),
  );
