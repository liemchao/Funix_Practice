import Card from "../Card/Card";
import styles from './UsersList.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function UsersList(props) {
    const renderUserList = (users) => {
        return users.map((user, index) => {
            return <p key={index} className={`${styles['user']} mb-2 ps-1`}>{`${user.userName} (${user.age} years old)`}</p>
        })
    }

    return (
        <>
            <Card className='list-user pb-3 ps-3 pe-3 pt-4'>
                {renderUserList(props.users)}
            </Card>
        </>
    );
}

export default UsersList;