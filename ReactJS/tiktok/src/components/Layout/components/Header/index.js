import classNames from 'classnames/bind';
import styles from './Header.module.scss'

// bind object style roi tra ra 1 method la 1 function cx
// dung cx de dung class => giup viet dc classname duoi dang dau -
const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}><div className={cx('inner')}></div></header> 
        
}

export default Header;