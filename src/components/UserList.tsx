import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: FC = () => {
    const { users, isLoading, error } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <div>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    )
}

export default UserList