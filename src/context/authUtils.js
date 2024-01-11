export const redirectToSignupIfNecessary = (
  redirectedToSignup,
  setRedirectedToSignup,
  navigate
) => {
  if (!redirectedToSignup) {
    setRedirectedToSignup(true);
    navigate('/signup'); // Redirect to the signup page
  }
};
