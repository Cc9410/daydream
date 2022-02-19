import React,{FC,useState} from 'react'
import classNames from 'classnames'
import  Icon  from '../Icon/Icon'
import Transition from "../Transition"

export type AlertType = 'success'|'information'|'warning'|'error'



interface BaseAlertProps{
    banner?:boolean,
    closeable?:boolean,
    type?:AlertType,
    afterClose?:()=>void,
    // closeIcon?:React.ReactNode,
    description?:React.ReactNode,
    title?:React.ReactNode
}


export const Alert:FC<BaseAlertProps>=(props)=>{
    const{
        banner,
        closeable,
        afterClose,
        type,
        // closeIcon,
        description,
        title,
        ...resetProps
    }= props 
    const [hide, setHide] = useState(false);
    const closeHandle = (e: React.MouseEvent) => {
     
       e.preventDefault()
       setHide(true)
          if (afterClose) {
            afterClose()
          }
     }
    const classes = classNames('alert',`alert-${type}`,
    {
        [`alert-banner`]:banner
    })
    return (
     <> <Transition
        in={!hide}
        timeout={300}
        animation="zoom-in-top"
      >
        <div className={classes} {...resetProps}>
          {title && (
            <h4 className="alert-title">
              <span>{title}</span>
            </h4>
          )}
          {description && <p>{description}</p>}
          {closeable && <span className="alert-close" onClick={closeHandle}><Icon icon="times"/></span>}
        </div>
        </Transition>
        </>
    );

}

Alert.defaultProps={
    banner:false,
    closeable:true,
    type:'success'
}

export default Alert