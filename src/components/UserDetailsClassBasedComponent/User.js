import React from 'react'

const User = ({ name, location, email, picture }) => {


    return (
        <div>
            <div>
                <img src={picture.medium} alt={name.firs} />
            </div>
            <div>
                <div>
                    <h3>Name:</h3> {name.first} {name.last}
                </div>
                <div>
                    <h3>Country:</h3> {location.country}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>
            </div>
        </div>
    )

}

export default User