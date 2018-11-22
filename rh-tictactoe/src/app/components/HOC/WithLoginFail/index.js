import React from 'react';

const withLoginFail = Component => props => (props.loginFail ? <Component {...props} /> : null);

function Header() {
  return <h3>User or password incorrect</h3>;
}

const HeaderWithLoginFail = withLoginFail(Header);

export default HeaderWithLoginFail;
