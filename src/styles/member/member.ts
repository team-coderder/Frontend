import styled from '@emotion/styled';

export const AddGroupContainer = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;

export const Header = styled.div`
    min-width: 200px;
    padding-left: 5rem;
    padding-top: 5rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 50px;
    height: 30px;
    min-width: 600px;
    margin-top: 3.5rem;

    .plusBtn {
        &:hover {
            cursor: pointer;
        }
    }
`;

export const InputBox = styled.div`
    margin-left: 30px;
`;

export const MemberBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px; /* 그 외(암시적) 행의 크기 정의 */

    margin: 3rem;
`;
