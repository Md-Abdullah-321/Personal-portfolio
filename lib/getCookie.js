/**
 * Title: Get Cookie
 * Description: get cookie
 * Author: Md Abdullah
 * Date: 04/10/2024
 */

export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };