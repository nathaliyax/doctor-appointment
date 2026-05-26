import {Container, Greetings, GreetingsAvatar, GreetingsSpan, GreetingsText, GreetingsTitle,} from "./style";

export const Home = () => {
    return (
        <Container>
            <Greetings>
                <GreetingsTitle>
                    <GreetingsSpan>Hello, </GreetingsSpan>
                    <GreetingsText>Hi, Liya</GreetingsText>
                </GreetingsTitle>
                <GreetingsAvatar source={require('../../assets/avatar.png')} />
            </Greetings>
        </Container>
    )
}