import React, { useState } from "react";
import {StyledButton} from './styledButton.js';


function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledButton>
      <button className="botaomobile" onClick={() => setShowMenu(!showMenu)}>≡</button>
      {showMenu ? (
        <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">QUEM SOMOS</a></li>
        <li><a href="">PROJETOS</a></li>
        <li><a href="">GALERIA</a></li>
        <li><a href="">CONTATO</a></li>
        </ul>
      ) : null}
    </StyledButton>
  );
}

export default DropdownMenu;