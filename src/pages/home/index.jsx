import {Container, Greetings, GreetingsAvatar, GreetingsSpan, GreetingsText, GreetingsTitle,} from "./style";
import {ScheduleCard} from "../../components/scheduleCard";

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
            <ScheduleCard/>
        </Container>
    )
}