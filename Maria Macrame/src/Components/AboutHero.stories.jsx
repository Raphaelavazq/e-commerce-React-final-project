import React from 'react';
import AboutHero from './AboutHero';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/AboutHero',
  component: AboutHero,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <AboutHero {...args} />;

export const Default = Template.bind({});
Default.args = {};