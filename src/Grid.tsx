import React,{FunctionComponent} from 'react'
import styles from './Grid.module.css'

interface GridProps {
    col? : 1|2|3|4|5|6|7|8|9|10|11|12
    xs? : 1|2|3|4|5|6|7|8|9|10|11|12
    sm? : 1|2|3|4|5|6|7|8|9|10|11|12
    md? : 1|2|3|4|5|6|7|8|9|10|11|12
    lg? : 1|2|3|4|5|6|7|8|9|10|11|12
    xl? : 1|2|3|4|5|6|7|8|9|10|11|12
}

const Grid : FunctionComponent<GridProps> = (props)  => {
    let style = ''

    if (props.col) style += styles['g-'+props.col] + " ";
    if (props.xs)  style += styles['g-xs-'+props.xs] + " ";
    if (props.sm)  style += styles['g-sm-'+props.sm] + " ";
    if (props.md)  style += styles['g-md-'+props.md] + " ";
    if (props.lg)  style += styles['g-lg-'+props.lg] + " ";
    if (props.xl)  style +=styles['g-xl-'+props.xl] + " ";
    
    return (
        <div className={styles.grid + ' ' + style}>
            {props.children}
        </div>
    );
}

export default Grid