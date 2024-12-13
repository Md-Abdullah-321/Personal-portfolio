/**
 * Title: Get Cookie
 * Description: get cookie
 * Author: Md Abdullah
 * Date: 04/10/2024
 */


export const isAccessTokenAvailable = () => {
  return document.cookie.split('; ').some(cookie => cookie.startsWith('accessToken='));
};