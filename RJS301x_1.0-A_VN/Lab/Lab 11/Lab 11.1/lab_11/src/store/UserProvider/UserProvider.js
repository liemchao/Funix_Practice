import UsersContext from "../user-context/user-context";

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

function UsersProvider({ children }) {
    return (
        <UsersContext.Provider value={{
            users: DUMMY_USERS,
        }}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersProvider;