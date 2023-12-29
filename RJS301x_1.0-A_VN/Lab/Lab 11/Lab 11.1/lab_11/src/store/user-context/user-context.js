import { createContext } from "react";

const UsersContext = createContext(
    {
        users: [],
        name: "",
    }
);

export default UsersContext;