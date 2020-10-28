
import { MfContext } from 'tc-mfa-context';

export let storeManager;
export const getStoreManager = () => {
    // Integrate store to global context
    const mfContext = new MfContext();
    storeManager = mfContext.getStoreManager();
    return storeManager;
}
