import styled from "styled-components/native";
import {
    Container, ScheduleBottom, ScheduleBottomContainer,
    ScheduleBottomIcon, ScheduleBottomTitle, ScheduleTop, ScheduleTopAvatar, ScheduleTopContent,
    ScheduleTopDescription, ScheduleTopIcon, ScheduleTopLabel, ScheduleTopTitle
} from "./style";

export const ScheduleCard = () => {
    return (
        <Container>
            <ScheduleTop>
                <ScheduleTopContent>
                    <ScheduleTopAvatar source={require('../../assets/doctor.png')} />
                    <ScheduleTopTitle>
                            <ScheduleTopLabel>Hi, i'm doctor penis</ScheduleTopLabel>
                            <ScheduleTopDescription>General doctor</ScheduleTopDescription>
                        </ScheduleTopTitle>
                    </ScheduleTopContent>
                    <ScheduleTopIcon source={require('../../assets/arrow-right.png')} />
                </ScheduleTop>
                <ScheduleBottom>
                    <ScheduleBottomContainer>
                        <ScheduleBottomIcon source={require('../../assets/calendar.png')} />
                        <ScheduleBottomTitle>Domingo, fodase fosdade</ScheduleBottomTitle>
                    </ScheduleBottomContainer>
                    <ScheduleBottomContainer>
                        <ScheduleBottomIcon source={require('../../assets/clock.png')} />
                        <ScheduleBottomTitle>2:00 - 7:00</ScheduleBottomTitle>
                    </ScheduleBottomContainer>
            </ScheduleBottom>
        </Container>
    )
}