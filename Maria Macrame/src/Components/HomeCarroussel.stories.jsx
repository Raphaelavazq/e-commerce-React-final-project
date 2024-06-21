import React from 'react';
import HomeCarroussel from './HomeCarroussel';

export default {
  title: 'Components/HomeCarroussel',
  component: HomeCarroussel,
};

const Template = (args) => <HomeCarroussel {...args} />;

export const Default = Template.bind({});
Default.args = {};