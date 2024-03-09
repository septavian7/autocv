/* src/services/authService.ts */

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from '../firebaseConfig'; // Adjust the import path to match your structure

const signUpUser = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(firestore, "users", user.uid), {
        firstName,
        lastName,
        email
      });
      console.log("Account created successfully with additional info");
      return { success: true, message: "Account created successfully." };
    } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            console.error("Error creating account:", errorMessage);
            return { success: false, message: errorMessage };
          }
  };
  
  const signInUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully", userCredential.user);
      return { success: true, message: "Login successful." };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      console.error("Error signing in:", errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  
  export { signUpUser, signInUser };