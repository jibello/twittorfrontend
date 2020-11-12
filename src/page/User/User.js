import React, { useState, useEffect } from 'react'
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvatar from "../../components/User/BannerAvatar";
import InfoUser from "../../components/User/InfoUser";
import { getUserApi } from "../../api/user";
import "./user.scss";
import userEvent from '@testing-library/user-event';

function User( props ) {
    
    const {match} = props;
    const [ user, setUser ] = useState(null);
    const { params } = match;
    const loggedUser = useAuth();

    useEffect(() => {
        getUserApi(params.id)
            .then(response => {
                if(!response) toast.error("El usuario que has visitado no existe.");
                setUser(response);
            })
            .catch(() => {
                toast.error("El usuario que has visitado no existe.");
            });
    }, [params]);
   
    return (
        <BasicLayout className = "user">
            <div className = "user_title"> 
                <h2>
                    {user? `${user.nombre} ${user.apellidos}` : "Este usuario no existe."}
                </h2>
            </div>
            <BannerAvatar user = {user} loggedUser = {loggedUser}/>
            <InfoUser user = {user} />
            <div className = "user_tweets" >Lista de Tweets</div>
        </BasicLayout>
    )
}

export default withRouter(User);