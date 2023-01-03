import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const JoinCodeBox = () => {
    const joinCode = useParams().roomId;
    return (
        <div>
             <STJoinCodeBox>
                <STTitle>방 코드</STTitle>
                <STCode>{joinCode}</STCode>
             </STJoinCodeBox>
        </div>
    );
};

const  STJoinCodeBox = styled.div`
    
`
const STTitle = styled.div`

`
const STCode = styled.div`    

`

