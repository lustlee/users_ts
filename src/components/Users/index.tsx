import React, {ChangeEvent} from 'react';
import Skeleton from "./Skeleton";
import User, {TUser} from "./User";

interface IPropsUsers {
    items: TUser[];
    isLoading: boolean;
    searchValue: string;
    onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void
}
const Users: React.FC<IPropsUsers> = ({ items, isLoading, searchValue, onChangeSearchValue}) => {
    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Найти пользователя..." />
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className="users-list">
                    {
                        items.filter(obj => {
                            const fullName = obj.first_name + obj.last_name;

                            return fullName.includes(searchValue) || obj.email.includes(searchValue);

                        }).map(obj => (
                            <User key={obj.id} {...obj}/>
                        ))
                    }
                </ul>
            )}
            <button className="send-invite-btn">Отправить приглашение</button>
        </>
    );
};

export default Users;