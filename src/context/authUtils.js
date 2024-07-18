export const redirectToSignupIfNecessary = (
  redirectedToSignup,
  setRedirectedToSignup,
  navigate
) => {
  if (!redirectedToSignup) {
    console.log('redirected to signup');
    setRedirectedToSignup(true);
    navigate('/signup'); // Redirect to the signup page
  }
};
