import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    return <img src={src} alt={alt} className={classNames(styles.wrapper, className)} {...props} />;
});

export default Image;
