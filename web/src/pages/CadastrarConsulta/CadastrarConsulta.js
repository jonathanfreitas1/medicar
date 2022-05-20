import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
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
    }
    

    .formulario{
        width: 50%;
        display: flex;
        flex-direction: column;

        select{
            margin-bottom: 3%;

            background: #FFFFFF;
            /* Gray 2 */

            border: 1px solid #A8A8A8;
            border-radius: 4px;

            width: 100%;
            height: 40px;
        }

        .ant-picker-input{
            margin-bottom: 3%;

            input {
                width: 90%;
                height: 40px;

                border: 1px solid #A8A8A8;
                border-radius: 4px;
            }
            
        }
    }

    .botoes{
        display: flex;
        justify-content: space-between;

        button{
            width: 150px;
            height: 40px;
            border: none;
            cursor: pointer;
        }

        .botaoCancelar{
            background: #FFFFFF;
            border-radius: 5px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;

            /* Primary */

            color: #49B4BB;
        }

        .botaoConfirmar{
            background: #D9F1F3;
            border-radius: 8px;
            background: #49B4BB;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            

            color: #FFFFFF;

            :hover {
                background: #D9F1F3;
            }
        }
    }
`;