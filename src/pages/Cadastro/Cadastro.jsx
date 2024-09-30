import { Fragment } from "react";
import FormPropsTextFields from "../../components/Formulario/formulario";
import ContainedButtons from "../../components/button/button";

export default function Cadastro(){

    return (
        <Fragment>
            <h1>CADASTRO DE USUÁRIO</h1>
            <FormPropsTextFields />
            <ContainedButtons/>
        </Fragment>
    );
}