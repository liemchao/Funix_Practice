import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from './UploadButton.module.scss'
import { Link } from "react-router-dom";
function UploadButton({onclick, to, children, stylesupload}) {
    let Comp = 'button';
    let _props = {
        stylesupload
    }
    if(to) {
        _props.to = to;
        Comp = Link;
    }
    return (
        <Comp {..._props}>
            <div className={styles[_props.stylesupload]}>
                <FontAwesomeIcon className={styles['upload-icon']} icon={faPlus} />
                <span>{children}</span>
            </div>
        </Comp>
    );
}

export default UploadButton;