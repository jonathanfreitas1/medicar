import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .menu{
        margin-top: 3%;
        width: 80%;
        display: flex;
        justify-content: space-between

    }

    .logo{
        display: flex;
        align-items: center
    }

    .logo h1{
        font-size: 20px;
    }

    .imagem{
        width: 40px;
        height: 40px;
    }

    .menuDesconectar{
        width: 50%;
        display: flex;
        justify-content: flex-end
        //align-items: center;
        //justify-content: space-evenly;
    }

    .menuDesconectar h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 15px;
        display: flex;
        align-items: center;
        text-align: center;

        /* Gray 2 */

        color: #A8A8A8;

        margin-right: 20%;

    }

    .menuDesconectar a{
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration: none;

        /* Primary */

        button{
            color: #49B4BB;
            cursor: pointer;
            border: none;
            opacity: 0.5;
            background-color: white;

            font-size: 20px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            line-height: 15px;
        }

        
    }

    .conteudo{
        width: 80%;
        height: 80vh;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }

    .cabecalhoTabela{
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
            margin-right: 2%;
            text-decoration: none;
        }
    }

    .cabecalhoTabela h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        display: flex;
        align-items: center;

        /* Black */

        color: #444444;
        padding-left: 2%;
    }

    .cabecalhoTabela button{
        width: 138px;
        height: 24px;
        background: #49B4BB;
        border: none;
        border-radius: 4px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;

        color: #FFFFFF;

        margin: 2%;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;


        img {
            width: 15px;
            height: 15px;
        }

        
    }

    .menuTabela{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
        margin-left: 2%;
    }

    .menuTabela h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-transform: uppercase;

        /* Gray 2 */

        color: #A8A8A8;
    }

    .conteudoTabela{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
        padding-left: 2%;
        //margin-left: 2%;
        //margin-bottom: 2%;
        height: 30px;
    }
    .conteudoTabela:hover{
        background: #F8F8F8;
    }

    .conteudoTabela span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;

        /* Black */

        color: #444444;
    }

    .acoes{
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .acoes h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        text-align: center;

        /* Primary */

        color: #49B4BB;
        cursor: pointer;
    }

    .acoes svg{
        cursor: pointer;
        color: #49B4BB;
    }
`;