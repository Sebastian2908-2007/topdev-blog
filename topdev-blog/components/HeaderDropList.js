import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const HeaderDropList = () => {
    return(
 <div className={styles.dropDown}>
     <SplitButton
              id={`dropdown-button-drop-down-centered`}
              drop={'down-centered'}
              variant="secondary"
              title={`Menu`}
              style={{padding:'3%', backgroundColor:'rgb(61, 96, 152)'}}
            >
              <Dropdown.Item eventKey="1"><Link href='/'>Home</Link></Dropdown.Item>
              <Dropdown.Item eventKey="2"><Link href='/login'>About</Link></Dropdown.Item>
              <Dropdown.Item eventKey="3"><Link href='/login'>Login</Link></Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4"><Link href='/register'>Register</Link></Dropdown.Item>
            </SplitButton>
 </div>
    );
};

export default HeaderDropList;