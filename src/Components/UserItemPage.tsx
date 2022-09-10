import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<string>()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser()
    }, [])
    async function fetchUser() {
        try {
            const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(res.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <button onClick={() => navigate("/users")}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;