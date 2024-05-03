import React, {useEffect, useState} from 'react';
import './compcss/themeswitch.modules.css'
import cx from 'classnames';

const ThemeSwitch = ({rounded = true, isToggled, onToggle = () => {}}) => {

    const sliderCX = cx("slider", {
    "rounded": rounded
});


    return (
<label className="switch">
    <input type="checkbox" checked={isToggled} onChange={onToggle}/>
    <span className={sliderCX} />
</label>
    );
};

export default ThemeSwitch;