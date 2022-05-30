import React from 'react'
import { Input } from './Input'
import { Meta, ComponentStory } from '@storybook/react'
export default {
  title: 'Example/Input',
  component: Input,
} as Meta

export const InputIk: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)
InputIk.args = {
  label: 'My Label',
  onChange: () => {},
  isCheked: false,
  id: 'id',
}
