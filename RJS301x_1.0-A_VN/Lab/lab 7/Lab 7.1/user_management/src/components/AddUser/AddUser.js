import { useRef } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './AddUser.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddUser(props) {

    const nameInput = useRef();
    const ageInput = useRef();

    const checkAgeNName = () => {
        const nameValue = nameInput.current.value;
        const ageValue = ageInput.current.value;

        props.onAddUser(nameValue, ageValue)

        nameInput.current.value = '';
        ageInput.current.value = '';
    }

    return (
        <>
            <Card className="card-add__user p-3 mb-4">
                <label className={`d-block mb-1 ${styles['label-input']}`} htmlFor='username' >Username</label>
                <input className={`w-100 mb-3`} id='username' ref={nameInput} />
                <label className={`d-block mb-1 ${styles['label-input']}`} htmlFor='age' >Age (Years)</label>
                <input className={`d-block w-100`} id='age' ref={ageInput} />
                <div className='mt-3'>
                    <Button onClick={checkAgeNName} className={``}>Add User</Button>
                </div>
            </Card>
        </>
    );
}

export default AddUser;