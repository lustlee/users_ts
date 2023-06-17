import {ChangeEvent} from "react";

export interface IPropsUsers {
    items: TUser[];
    isLoading: boolean;
    searchValue: string;
    onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
    invites: number[];
    onClickInvite: (id: number) => void;
    onClickSendInvites: () => void;
}

export interface IProps {
    count: number
}

export type TUser = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    onClickInvite: (id: number) => void;
    isInvited?: boolean;
}