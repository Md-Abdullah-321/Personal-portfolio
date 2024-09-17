/**
 * Title: Get Cookie
 * Description: Get Cookie By its name.
 * Author: Md Abdullah
 * Date: 10/09/2024
 */

export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        const cookieValue = parts.pop().split(';').shift();
        const [cookieContent, expiryTimestamp] = cookieValue.split('|');
        if (expiryTimestamp && Date.now() > parseInt(expiryTimestamp, 10)) {
            console.log('Cookie has expired');
            return false; 
        }

        return true; 
    }

    return false; 
};
