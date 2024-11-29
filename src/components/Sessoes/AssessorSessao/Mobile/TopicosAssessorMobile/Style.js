import styled from "styled-components"

const TopicosAssessorMobileStyle = styled.header`
    display: none;
    text-align: center;
    flex-direction: column;
    padding-bottom: 20px;

    .efeito{
        display: flex;
        justify-content: right;
    }

    .Graficopequeno2 {
        margin-top: 50px;
        /* width: 298px; */
        /* height: 184px; */
        /* left: 1499px; */
        /* position: relative; */
        /* justify-content: center; */
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }

`

export {TopicosAssessorMobileStyle}