/* src/features/UserLogin/SkUserLogin.tsx */

/* --------- IMPORTS --------- */

// React & MobX
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

// Firebase
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Stores
import { userStore } from "../../../stores/SkUserStore";

// Services & Utilities
import { signUpUser, signInUser } from "./services/authService";

// Components & Subcomponents
import SkHoverWindow from "../../templates/SkHoverWindow";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SkButton from "../../common/SkButton/SkButton";

/* --------- SETUP --------- */

// Component Props
interface Props {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- COMPONENT DEFINITION --------- */

const UserLoginComponent: React.FC<Props> = observer(
  ({ isVisible, onClose }) => {
    // Local State
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<{
      firstName?: string;
      lastName?: string;
      email?: string;
    } | null>(null);

    // Effects
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        if (currentUser) {
          const db = getFirestore();
          const docRef = doc(db, "users", currentUser.uid);
          getDoc(docRef)
            .then((docSnap) => {
              if (docSnap.exists()) {
                setUserData(
                  docSnap.data() as {
                    firstName: string;
                    lastName: string;
                    email: string;
                  },
                );
              }
            })
            .catch((error) =>
              console.error("Error fetching user data:", error),
            );
        } else {
          setUserData(null);
        }
      });
    }, []);

    // Event Handlers
    const handleSignUp = async () => {
      // Implementation...
    };

    const handleSignIn = async () => {
      // Implementation...
    };

    // Conditional Rendering
    if (!isVisible) return null;

    /* --------- RENDER --------- */

    return (
      <SkHoverWindow isVisible={isVisible} onClose={onClose}>
        <div>
          {/* User Logged In View */}
          {user && userData ? (
            <div>{/* User Info Display */}</div>
          ) : (
            <>{/* Login / Sign Up Form */}</>
          )}
        </div>
      </SkHoverWindow>
    );
  },
);

/* --------- EXPORT --------- */

export default observer(UserLoginComponent);
