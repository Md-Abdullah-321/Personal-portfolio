/**
 * Title: Get Cookie
 * Description: get cookie
 * Author: Md Abdullah
 * Date: 04/10/2024
 */

import { useSelector } from "react-redux";

export const getCookie = (name) => {
  const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);
  return isLoggedIn;
};