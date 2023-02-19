import PropTypes from 'prop-types';
import { Container, Image, Description, Name, Tag, Location, Stats, StatsItem, Label } from './Profile.styled';


export const Profile = ({ item: { avatar, username, tag, location, stats } }) => {
    return (
        <Container>
            <Description>
                <Image
                    src={avatar} alt={username}
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <span className="quantity">{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <span className="quantity">{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <span className="quantity">{stats.likes}</span>
                </StatsItem>
            </Stats>
        </Container>);
};

Profile.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};