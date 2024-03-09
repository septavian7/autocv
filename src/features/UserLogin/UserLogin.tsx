/* src/features/UserLogin/UserLogin.tsx */

import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite"; // Import observer
import { userStore } from '../../stores/SkUserStore'; // Import userStore
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { signUpUser, signInUser } from '../../services/authService';
import SkHoverWindow from '../../templates/SkHoverWindow'; // Adjust import path as necessary
import EmailInput from './EmailInput'; // Ensure this path is correct
import PasswordInput from './PasswordInput'; // Ensure this path is correct
import SkButton from '../../components/SkButton/SkButton'; // Ensure this path is correct

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const UserLoginComponent: React.FC<Props> = ({ isVisible, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<{ firstName?: string, lastName?: string, email?: string } | null>(null);

  // This useEffect reacts to changes in the userStore's properties
  useEffect(() => {
    console.log("Current user in store:", userStore.email, userStore.firstName, userStore.lastName);
    // Optional: Implement actions based on the updated store values here
  }, [userStore.email, userStore.firstName, userStore.lastName]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const db = getFirestore();
        const docRef = doc(db, "users", currentUser.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data() as { firstName: string, lastName: string, email: string });
          }
        }).catch((error) => console.error("Error fetching user data:", error));
      } else {
        setUser(null);
        setUserData(null);
      }
    });
  }, []);

// handleSignUp function
const handleSignUp = async () => {
  const result = await signUpUser(email, password, firstName, lastName);
  if (result.success) {
    userStore.setEmail(email); // Assuming you have methods to update these in your store
    userStore.setFirstName(firstName); // Assuming you have methods to update these in your store
    userStore.setLastName(lastName); // Assuming you have methods to update these in your store
    setError('');
    setSuccessMessage(result.message);
  } else {
    setError(result.message);
    setSuccessMessage('');
  }
};

// handleSignIn function
const handleSignIn = async () => {
  const result = await signInUser(email, password);
  if (result.success) {
    setError('');
    setSuccessMessage(result.message);
  } else {
    setError(result.message);
    setSuccessMessage('');
  }
};

  // If the component should not be visible, return null or alternatively manage visibility outside of this component
  if (!isVisible) return null;

  return (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      <div>
        {user && userData ? (
          <div>
            <p>Welcome, {userStore.firstName || "User"} {userStore.lastName}</p>
            <p>Email: {userStore.email || "No email"}</p>
            <SkButton label="Log Out" onClick={onClose} />
          </div>
        ) : (
          <>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>} {/* Display success message */}
            <SkButton label="Create Account" onClick={handleSignUp} />
            <SkButton label="Sign In" onClick={handleSignIn} />
          </>
        )}
      </div>
    </SkHoverWindow>
  );
};

export default observer(UserLoginComponent);