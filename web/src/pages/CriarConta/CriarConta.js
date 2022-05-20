import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


h2 {
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

.imagem{
    width: 50px;
    height: 50px;
    margin-right: 3%;
}

.title {
    display: flex;
    align-items: center;
}

.ant-form-item-control-input-content{
    display: flex;
    justify-content: space-between;
    align-items: center
}

.ant-input-password{
    display: flex;
    align-items: baseline;
}

.ant-input {
    margin-top: 4%; 
    width: 400px; 
    height: 40px;
    /* White */
    background: #FFFFFF;
    /* Gray 2 */
    border: 1px solid #A8A8A8;
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;

    /* Gray 2 */

    color: #A8A8A8;
}

.ant-form-item-explain-error{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #A8A8A8;

}


.ant-btn {
    width: 180px;
    height: 40px;


    background: #FFFFFF;
    border-radius: 8px;
    border: #49B4BB;

    cursor: pointer;

    //margin-top: 
    
}

.ant-btn:hover {
    background: #D9F1F3;
    transition: 0.5;
    
}

.ant-btn span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    justify-content: center;

    color: #49B4BB;
}

.acessar{
    background: #49B4BB;
    margin-top: 10%;
}

.acessar:hover{
    background: #90D3D7;
    transition: 1;
    
    
}

.acessar span{
    color: #FFFFFF;
}

.cancelar{
    margin-top: 10%;
}

`;