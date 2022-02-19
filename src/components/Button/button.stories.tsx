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
import { Button, ButtonProps,ButtonType,ButtonSize } from "./button";

export default {
  title: "Button",
  component: Button,
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

const Template: Story<ButtonProps> = (args) => <Button {...args}>按钮</Button>;

export const Primary = Template.bind({});
Primary.storyName = "默认按钮";
Primary.args = {
  btnType: ButtonType.Primary,
};
Primary.argTypes={
  btnType:{
    name: 'btnType',
    type: { name: 'string', required: false },
    defaultValue: 'Primary',
    description: '按钮类型 default | primary | danger | link',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
    },
    control: null
  }
}
Primary.parameters = {
  docs: {
   
  },
};

export const Secondary = () => (
  <Button btnType={ButtonType.Link} href="http://www.baidu.com">
    link 按钮
  </Button>
);
Secondary.storyName = "链接按钮";
Secondary.parameters = {
  docs: {
    // source: { code: '<Button title="默认按钮"></Button>' },
  },
};

export const third = () => (
  <>
    <Button size={ButtonSize.Large}>大型按钮</Button>
    <Button>默认大小</Button>
    <Button size={ButtonSize.Small}>小型按钮</Button>
  </>
);
third.storyName = "不同大小按钮";

export const fourth = () => (
  <>
    <Button>default</Button>
    <Button btnType={ButtonType.Primary}>primary</Button>
    <Button btnType={ButtonType.Danger}>danger</Button>
    <Button btnType={ButtonType.Link} href="#">
      link 按钮
    </Button>
  </>
);
fourth.storyName = "不同类型按钮";

