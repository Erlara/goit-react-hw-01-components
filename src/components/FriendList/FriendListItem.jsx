import PropTypes from 'prop-types';
import { FriendCard, FriendName, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <FriendCard>
            <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendCard>
    )

};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};