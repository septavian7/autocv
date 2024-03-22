/* src/services/authService.ts */

/* --------- IMPORTS --------- */

// Firebase Auth & Firestore Functions
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Firebase Config
import { auth, firestore } from "../../../../config/firebaseConfig"; // Adjust as necessary

/* --------- SERVICE FUNCTIONS --------- */

/**
 * Signs up a new user with provided details and creates a user document in Firestore.
 * @param email User's email
 * @param password User's password
 * @param firstName User's first name
 * @param lastName User's last name
 * @returns An object indicating the success status and a message.
 */
const signUpUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    await setDoc(doc(firestore, "users", user.uid), {
      firstName,
      lastName,
      email,
    });
    console.log("Account created successfully with additional info");
    return { success: true, message: "Account created successfully." };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    console.error("Error creating account:", errorMessage);
    return { success: false, message: errorMessage };
  }
};

/**
 * Signs in a user with the provided email and password.
 * @param email User's email
 * @param password User's password
 * @returns An object indicating the success status and a message.
 */
const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("Signed in successfully", userCredential.user);
    return { success: true, message: "Login successful." };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    console.error("Error signing in:", errorMessage);
    return { success: false, message: errorMessage };
  }
};

/* --------- EXPORTS --------- */

export { signUpUser, signInUser };
