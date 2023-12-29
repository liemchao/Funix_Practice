import 'bootstrap/dist/css/bootstrap.css';
import styles from './SearchForm.module.css';
import SearchIcon from '../../assets/icons/SearchIcon';

function SearchForm(props) {

    return (
        <div className={`w-100 d-flex justify-content-center ${styles['search-form']}`}>
            <div className={`bg-light ${styles['form']}`}>
                <div className={`d-flex p-3 ${styles['form-input']}`}>
                    <input onChange={(e) => {
                        props.setSearchValue(e.target.value.trim())
                    }}
                        value={props.searchValue}
                        className={`w-100 border-0 ${styles['input']}`} placeholder='Search' />
                    <i className={`${styles['search-icon']}`}>
                        <SearchIcon />
                    </i>
                </div>
                <div className={`px-4 d-flex justify-content-end ${styles['form-action']}`}>
                    <button className={`bg-light`}>reset</button>
                    <button onClick={props.searchAction} className={`${styles['search-btn']}`}>search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;