import MovingCards from './MovingCards';

export default {
  title: 'Components/MovingCards',
  component: MovingCards,
};

const Template = (args) => <MovingCards {...args} />;

export const Default = Template.bind({});
Default.args = {};