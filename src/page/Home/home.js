import React from 'react';
import BasicLayout from "../../layout/BasicLayout";

import "./home.scss";

export default function home(props) {

    const { setRefreshCheckLogin } = props;
    
    return (
        <BasicLayout className = "home" setRefreshCheckLogin = { setRefreshCheckLogin} >
            <h2>Estamos en Home</h2>

        </BasicLayout>
    )
}
