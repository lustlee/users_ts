import React, {ChangeEvent, useEffect, useState} from 'react'
import './index.scss'
// import Success from "./components/Success/Success";
import Users from "./components/Users";

// Here's list users: https://reqres.in/api/users

// interface IHandleSearchValue {
//     target: HTMLInputElement
// }

const App = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

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


    return (
    <div className="App">
        <Users items={users}
               isLoading={isLoading}
               onChangeSearchValue={onChangeSearchValue}
               searchValue={searchValue}
        />
       {/*<Success />*/}
    </div>
  )
}

export default App
