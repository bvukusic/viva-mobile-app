import vivaStorage from './vivaStorage';

export const storeTokens = async (access, refresh) => {
  await vivaStorage.setValue('AccessToken', access);
  await vivaStorage.setValue('RefreshToken', refresh);
};
