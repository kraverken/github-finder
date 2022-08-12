const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Get Search results
/*search user is not being passed down from context provider it is now stored in an action and in our component(userSearch) we are calling that action and dispatching the action to reducer passing payload and type and finally updating the user state */
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const { items } = await response.json();

  return items;
};
