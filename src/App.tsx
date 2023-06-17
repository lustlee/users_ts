import React, {useEffect, useState} from 'react'
import './index.scss'
import Users from "./components/Users";
import Success from "./components/Success/Success";
import {TUser} from "./types";

const App = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>('');
    const [invites, setInvites] = useState<number[]>([]);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        fetch(`https://reqres.in/api/users`).then(res => res.json()).then(json => {
            setUsers(json.data);
        }).catch(err => {
            console.log(err);
            alert('Error response data users');
        }).finally(() => setLoading(false))

    }, []);

    const onChangeSearchValue = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value);
    }

    const onClickInvite = (id: number) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    };

    const onClickSendInvites = () => {
        setSuccess(true)
    };

    return (
        <div className="App">
            {
                success ? <Success count={invites.length}/>
                    : (
                        <Users items={users}
                               isLoading={isLoading}
                               onChangeSearchValue={onChangeSearchValue}
                               searchValue={searchValue}
                               invites={invites}
                               onClickInvite={onClickInvite}
                               onClickSendInvites={onClickSendInvites}
                        />
                    )
            }

        </div>
    )
}

export default App
