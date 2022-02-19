import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { AlertProps } from "./Alert/Alert";
import Alert from './Alert'

export default {
  title: "Alert",
  component: Alert,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Subtitle />
    //       <Description />
    //       <Primary />
    //       <ArgsTable story={PRIMARY_STORY} />
    //       <Stories />
    //     </>
    //   ),
    // },
    // backgrounds: {
    //   values: [
    //     { name: "light", value: "#fff" },
    //     { name: "dark", value: "#000" },
    //     { name: "red", value: "#f00" },
    //     { name: "green", value: "#0f0" },
    //     { name: "blue", value: "#00f" },
    //   ],
    // },
  },
  // argTypes: {
  //   onClick: {
  //     action: 'clicked',
  //     description: '点击button时触发的事件',
  //   },
  // }
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} title="this is alert!"></Alert>;

export const Primary = Template.bind({});
Primary.storyName = "警告";
Primary.parameters = {
  docs: {
   
  },
};



// const defaultAlert = () => {
//   return <Alert title="this is alert!"></Alert>
// }

const stylesAlert = () => {
  return (
    <>
      <Alert title="this is Success" type="success"></Alert>
      <Alert title="this is Danger!" type="danger"></Alert>
      <Alert title="this is Warning!" type="warning" closeable={false}></Alert>
    </>
  )
}
const descAlert = () => {
  return <Alert title="提示标题" description="this is a long description" ></Alert>
}
// storiesOf('Alert', module)
//   .add('Alert', defaultAlert)
//   .add('不同样式的 Alert', stylesAlert)
//   .add('添加描述的 Alert', descAlert)