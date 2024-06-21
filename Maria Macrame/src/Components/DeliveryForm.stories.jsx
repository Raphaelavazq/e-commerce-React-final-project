import React from 'react';
import DeliveryForm from './DeliveryForm';

export default {
  title: 'Components/DeliveryForm',
  component: DeliveryForm,
};

const Template = (args) => <DeliveryForm {...args} />;

export const Default = Template.bind({});
Default.args = {};