import React from "react";
import { FcReuse } from "react-icons/fc";
import * as 5 from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <S.Cabecalho>
            <picture>
                <link to="/">
                    <FcReuse />
                </link>
            </picture>
            <nav>
                <ul>
                    <li>
                        <link to="/login">Login</link>
                    </li>
                    <li>
                        <link to="/cadastrar">Cadastrar</link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};

export default Menu;