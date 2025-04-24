import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';
import Title from '../Title';

export default function Header(props) {
   const { onToggleTheme } = useContext(ThemeContext);

   return (
      <>
         <Title> {props.title} </Title>
         <Button onClick = {onToggleTheme}>
            Change Theme
         </Button>
         {props.children}
      </>
   );
}

Header.PropTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
}

Header.defaultProps = {
   title: `Jstack's Blog`,
}