import styles from './Input.module.css'

function Input(props) {
    return (
        <div className={`${styles['input']}`}>
            <label>Amount</label>
            <input value={props.inputState} onChange={(e) => {
                props.setInputState(e.target.value);
            }} />
        </div>
    );
}

export default Input;