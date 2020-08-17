import { Meta } from '@storybook/react/types-6-0';
import Button from '@material-ui/core/Button';

export default {
  title: "Button2",
  component: Button,
   argTypes: {
    backgroundColor: { control: 'color' },  
  },
  args: {
    // Now all Button stories will be primary.
    primary: true,
  },
} as Meta;
