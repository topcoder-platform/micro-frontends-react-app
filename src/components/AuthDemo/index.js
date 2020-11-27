import React from "react";
import { useAsync } from "react-use";
import {
  login,
  logout,
  getAuthUserTokens,
  getAuthUserProfile,
} from "@topcoder/micro-frontends-navbar-app";

const Profile = ({ authUserProfile }) => (
  <>
    <h3>User Profile</h3>
    {authUserProfile.loading ? (
      <div>User Profile Loading...</div>
    ) : authUserProfile.error ? (
      <div>Profile Loading Error: {authUserProfile.error.message}</div>
    ) : (
      <ul>
        <li>
          <strong>Handle: </strong> {authUserProfile.value.handle}
        </li>
        <li>
          <strong>First Name: </strong> {authUserProfile.value.firstName}
        </li>
        <li>
          <strong>Last Name: </strong> {authUserProfile.value.lastName}
        </li>
      </ul>
    )}
  </>
);

const AuthDemo = () => {
  // see how the `useAsync` hook works here https://github.com/streamich/react-use/blob/master/docs/useAsync.md
  const authUserTokens = useAsync(getAuthUserTokens);
  const authUserProfile = useAsync(getAuthUserProfile);

  return (
    <>
      <h2>Authentication</h2>
      {authUserTokens.loading ? (
        <div>Authentication...</div>
      ) : authUserTokens.error ? (
        <div>Authentication Error: {authUserTokens.error.message}</div>
      ) : (
        <div>
          {authUserTokens.value.tokenV3 ? (
            <div>
              User is logged-in <button onClick={logout}>Logout</button>
              <Profile authUserProfile={authUserProfile} />
            </div>
          ) : (
            <>
              User is logged-out <button onClick={login}>Login</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthDemo;
