import React from 'react';
import HomeBlog from './HomeBlog';

export default {
  title: 'Components/HomeBlog',
  component: HomeBlog,
};

const Template = (args) => <HomeBlog {...args} />;

export const Default = Template.bind({});
Default.args = {};
