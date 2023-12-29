import styles from './UserProfile.module.css';
function UserProfile() {
    return (
        <div className={`${styles['profile']}`}>
            My User Profile
        </div>
    );
}

export default UserProfile;