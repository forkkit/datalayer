import * as validator from "validator";

/**	
 * Handle form validation for the login form≥	
 * 	
 * @param email - user's auth email	
 * @param password - user's auth password	
 * @param setError - function that handles updating error state value	
 */	
export const validateLoginForm = (	
  email: string,	
  password: string,	
  setError: (error: string | null) => void	
): boolean => {	
  // Check for undefined or empty input fields	
  if (!email || !password) {	
    setError("Please enter a valid email and password.");	
    return false;	
  }	
  // Validate email	
  if (!validator.isEmail(email)) {	
    setError("Please enter a valid email address.");	
    return false;	
  }	
  return true;	
};
