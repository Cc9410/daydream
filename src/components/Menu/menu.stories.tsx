
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
import Menu from "./index";
import  { MenuProps } from './menu'

export default {
  title: "Menu",
  component: Menu,
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

const Template: Story<MenuProps> = (args) => <Menu {...args} defaultIndex='0'  mode="vertical"> 
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.SubMenu title="点击下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>    
    </Menu.SubMenu>
</Menu>;
export const Primary = Template.bind({});
Primary.storyName = "菜单";
// Primary.args = {
//   btnType: ButtonType.Primary,
// };
Primary.argTypes={
    defaultIndex:{
         name: 'deafultIndex',
         type:{name: 'string', required: false},
         defaultValue: '0',
         description: '默认索引',

    }
//   btnType:{
//     name: 'btnType',
//     type: { name: 'string', required: false },
//     defaultValue: 'Primary',
//     description: '按钮类型 default | primary | danger | link',
//     table: {
//       type: { summary: 'string' },
//       defaultValue: { summary: 'primary' },
//     },
//     control: null
//   }
}
Primary.parameters = {
  docs: {
   
  },
};

// export const defaultMenu = () => (
//   <Menu defaultIndex='0' onSelect={action('selected!')} >
//     <Menu.Item>
//       cool link
//     </Menu.Item>
//     <Menu.Item>
//       cool link 2
//     </Menu.Item>
//     <Menu.Item disabled>
//       disabled
//     </Menu.Item> 
//     <Menu.SubMenu title="下拉选项">
//       <Menu.Item>
//         下拉选项一
//       </Menu.Item>
//       <Menu.Item>
//         下拉选项二
//       </Menu.Item>    
//     </Menu.SubMenu>
//   </Menu>
// )
// export const clickMenu = () => (
//   <Menu defaultIndex='0' onSelect={action('selected!')} mode="vertical">
//     <Menu.Item>
//       cool link
//     </Menu.Item>
//     <Menu.Item>
//       cool link 2
//     </Menu.Item>
//     <Menu.SubMenu title="点击下拉选项">
//       <Menu.Item>
//         下拉选项一
//       </Menu.Item>
//       <Menu.Item>
//         下拉选项二
//       </Menu.Item>    
//     </Menu.SubMenu>
//   </Menu>
// )
// export const openedMenu = () => (
//   <Menu defaultIndex='0' onSelect={action('selected!')} mode="vertical">
//     <Menu.Item>
//       cool link
//     </Menu.Item>
//     <Menu.Item>
//       cool link 2
//     </Menu.Item>
//     <Menu.SubMenu title="默认展开下拉选项">
//       <Menu.Item>
//         下拉选项一
//       </Menu.Item>
//       <Menu.Item>
//         下拉选项二
//       </Menu.Item>    
//     </Menu.SubMenu>
//   </Menu>
// )

// storiesOf('第六章：Menu', module)
// .add('Menu', defaultMenu )
// .add('纵向的 Menu', clickMenu)
// .add('默认展开的纵向 Menu', openedMenu)
//  export const clickMenu = () => (
//   <Menu defaultIndex='0'  mode="vertical">
//     <Menu.Item>
//       cool link
//     </Menu.Item>
//     <Menu.Item>
//       cool link 2
//     </Menu.Item>
//     <Menu.SubMenu title="点击下拉选项">
//       <Menu.Item>
//         下拉选项一
//       </Menu.Item>
//       <Menu.Item>
//         下拉选项二
//       </Menu.Item>    
//     </Menu.SubMenu>
//   </Menu>
// )
// clickMenu.storyName = "点击菜单";