import React,{FC,AnchorHTMLAttributes,ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link ='link'
}

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
} 

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 *
 *
 * @param {*} ButtonProps
 * @returns
 */
export const Button:FC<ButtonProps>=(ButtonProps) => {
    const{
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = ButtonProps
    //btn, btn-lg, btn-primary
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType=== ButtonType.Link)&&disabled
    })
    
    if(btnType===ButtonType.Link){
        return(
            <a
            className={classes}
            href={href}
            {...restProps}
            >
                {children}
            </a>
        )
    }else{
        return(
          <button
          className={classes}
          disabled={disabled}
          {...restProps}
          >
              {children}
          </button>  
        )
    }

}
Button.defaultProps ={
    disabled:false,
    btnType:ButtonType.Default

}
export default Button