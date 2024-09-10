/**
 * Title: Get Cookie
 * Description: Get Cookie By its name.
 * Author: Md Abdullah
 * Date: 10/09/2024
 */

export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}