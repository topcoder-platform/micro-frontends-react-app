/**
 * Auth Data component
 */
import React from "react";
import {getStoreManager} from './global-store';

const authStore = getStoreManager().getGlobalStore().auth;

console.log(authStore, 'Member ifo')
const MemberInfo = () => {
    const [userData, setuserData] = React.useState({});
    React.useEffect(() => {
        authStore.subscribe((authState) => {
            setuserData(authState)
        });
    })
    return (
        <>
        <div style={{ textAlign: "center" }}>
            <h5>Member Info Component</h5>
            Member Data: 
            <pre>{ userData && userData.profile ? 'Welcome ' + userData.profile.firstName + ' ' + userData.profile.lastName : 'User not authenticated'}</pre>
        </div>
        </>
    );
};

export default MemberInfo;
