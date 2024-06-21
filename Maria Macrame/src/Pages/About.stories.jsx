import About from '.Components/About';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages/About',
  component: About,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};