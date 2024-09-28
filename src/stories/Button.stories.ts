import type { Meta, StoryObj } from '@storybook/react';
import IconImage from '@/shared/assets/ph--list-bold.svg';
import { Button } from '@/shared/ui/button/Button';

const meta: Meta<typeof Button> = {
  title: 'component/shared/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    width: {
      control: 'text',
    },
    isThin: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    img: {
      control: 'text',
    },
  },
  args: {
    onClick: () => {},
    label: 'Default Label',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    width: '7.6rem',
    label: '버튼',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    width: '12.6rem',
    label: '목록으로',
    img: IconImage,
  },
};
