import React from 'react';
import CardsSuggestion from './CardsSuggestion';

export default {
  title: 'Components/CardsSuggestion',
  component: CardsSuggestion,
};

const Template = (args) => <CardsSuggestion {...args} />;

export const Default = Template.bind({});
Default.args = {};