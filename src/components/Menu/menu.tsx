import React,{FC,useState,createContext} from 'react'
import classNames from 'classnames'
import { SelectorMatcherOptions } from '@testing-library/react'

export type MenuMode = 'vertical'| 'horizontal'
type SelectCallback = (selectIndex:string)=>void

export interface MenuProps{
    defaultIndex?:string
    className?:string
    mode?:MenuMode
    style?:React.CSSProperties
    onSelect?:(selectIndex:number|string)=>void
    defaultOpendMenus?:string[]
}

interface IMenuContext{
    index:string
    onSelect?:SelectCallback,
    mode?:MenuMode,
    defaultOpenedMenus?:string[]
}

export const MenuContext = createContext<IMenuContext>({index:'0'})

const Menu:FC<MenuProps>=(props)=>{
    const { className,mode,style,onSelect,children,defaultIndex,defaultOpendMenus } = props
    const [currentActive,setActive]=useState(defaultIndex)
    const handleClick=(index:(string))=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext:IMenuContext = {
        index:currentActive ? currentActive : '0',
        onSelect:handleClick,
        mode:mode,
        defaultOpenedMenus:defaultOpendMenus
    }
    const classes= classNames('menu',className,{'menu-vertical':mode==='vertical'})
    return (
      <ul className={classes} style={style}>
        <MenuContext.Provider value={passedContext}>
          {children}
        </MenuContext.Provider>
      </ul>
    );
}

Menu.defaultProps={
    mode: 'horizontal',
    defaultIndex: '0',
    defaultOpendMenus:['0']
}

export default Menu