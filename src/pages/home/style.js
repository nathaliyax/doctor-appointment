import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    border: 5px solid deeppink;
    background-color: pink;
    padding: 24px;
`

export const Greetings = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const GreetingsTitle = styled.View`
    display: flex;
    gap: 6px;
    `

export const GreetingsSpan = styled.Text`
    color: #0D1b34;
    font-size: 16px;
`

export const GreetingsText = styled.Text`
    color: #0D1b34;
    font-size: 20px;`


export const GreetingsAvatar = styled.Image``