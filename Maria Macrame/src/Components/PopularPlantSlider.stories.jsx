import React from 'react';
import PopularPlantSlider from './PopularPlantSlider';

export default {
  title: 'Components/PopularPlantSlider',
  component: PopularPlantSlider,
};

const Template = (args) => <PopularPlantSlider {...args} />;

export const Default = Template.bind({});
Default.args = {};