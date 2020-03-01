import React from 'react';
import loading from '../../assets/gif/loading.gif';
import s from './loading.module.scss';

const Loading = () => {
    return <img src={loading} alt='loading' className={s.loading}/>
}

export default Loading;