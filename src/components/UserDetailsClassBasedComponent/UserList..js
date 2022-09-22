import React from 'react'
import User from './User'

const UserList = ({ data }) => {

    console.log(data)
    return (
        <div>
            {data && data?.map((user, i) => <User key={i}  {...user} />)}
            
        </div>
    )

}

export default UserList