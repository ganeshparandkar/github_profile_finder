import React from 'react';
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          Link
        </a>
      </div>
    </div>
  );
};

// UserItem.PropTypes = {
//   user: PropTypes.object.isRequired,
// };

export default UserItem;
