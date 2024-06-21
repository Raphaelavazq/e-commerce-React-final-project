import React from 'react';
import AboutSection from './AboutSection';

export default {
  title: 'Components/AboutSection',
  component: AboutSection,
};

const Template = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {};