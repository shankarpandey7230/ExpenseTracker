import { getUserProfile } from '../../helpers/axiosHelper';
export const autoLogin = async () => {
  const accessJWT = localStorage.getItem('accessJWT');
  if (accessJWT) {
    // call the api to get user
    // const response = await getUserProfile();
    const { status, user } = await getUserProfile();
    return status === 'success' ? user : {};
    // mount the user in the state
  }
};
