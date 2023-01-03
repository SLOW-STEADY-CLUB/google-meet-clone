import React from 'react';
import styled from 'styled-components';
import { JoinCodeBox } from './JoinCodeBox';
const FooterBox = () => {
    return (
        <STContainer>
            <JoinCodeBox></JoinCodeBox>
        </STContainer>
    );
};
const STContainer = styled.div`
    position: fixed;
    bottom:0px;
    margin: 20px;
`
export default FooterBox;