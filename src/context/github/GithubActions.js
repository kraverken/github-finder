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

// Get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};

// Get user repos results
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const data = await response.json();

  return data;
};
