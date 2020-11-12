import React from 'react'
import "./InfoUser.scss";

export default function InfoUser(props) {
    
    console.log(props);
    
    const { user } = props;

    return (
        <div className = "info-user">
            
            <h2 className = "name">
                {user?.nombre} {user?.apellidos}
            </h2>
            
            <p className = "email">
                {user?.email}
            </p>
            
            {user?.biografia && (
                <div className = "description">
                    {user.biografia}
                </div>
            )}

            <div className = "">
                {user?.ubication && (
                <p>
                    {user.ubicacion}
                </p>
                )}
            </div>

        </div>
    );
}
