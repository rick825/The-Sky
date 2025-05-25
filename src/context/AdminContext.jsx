import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  arrayRemove,
  arrayUnion
} from "firebase/firestore";
import { toast } from "react-toastify";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    localStorage.getItem("admin") || null
  );

  // 🔐 Admin Login with Role Check
  const AdminLogin = async (email, password, navigate) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const adminRef = doc(db, "admin", uid);
      const adminDoc = await getDoc(adminRef);

      if (!adminDoc.exists() || adminDoc.data().role !== "all") {
        throw new Error("Access denied");
      }

      toast.success("Login successful");
      setAdmin(email);
      localStorage.setItem("admin", email);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Admin login error:", err.message);
      toast.error(err.message);
      throw err; // So the component can optionally catch it
    }
  };

  const AdminLogout = () => {
  setAdmin(null);
  localStorage.removeItem("admin");
  toast.success("Logged out successfully");
};

  // 🚗 Get all cars
  const fetchCars = async () => {
    const snapshot = await getDocs(collection(db, "cars"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // ➕ Add a car
  const addCar = async (carData) => {
    await addDoc(collection(db, "cars"), carData);
  };

  // 📝 Update car
  const updateCar = async (carId, carData) => {
    await updateDoc(doc(db, "cars", carId), carData);
  };

  // ❌ Delete car
  const deleteCar = async (carId) => {
    await deleteDoc(doc(db, "cars", carId));
  };

// fetch rides
   const fetchRides = async () => {
    const snapshot = await getDocs(collection(db, "orders"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // 📝 Update Ride Status
const updateRideStatus = async (rideId, newStatus) => {
  const rideRef = doc(db, "orders", rideId);
  const rideSnap = await getDoc(rideRef);

  if (!rideSnap.exists()) {
    toast.error("Ride not found.");
    return;
  }

  const rideData = rideSnap.data();
  const updatedRide = {
    ...rideData,
    status: newStatus,
  };

  const userRef = doc(db, "users", rideData.user.email);

  try {
    // Step 1: Update order document
    await updateDoc(rideRef, { status: newStatus });

    // Step 2: Update orders array in user document
    await updateDoc(userRef, {
      orders: arrayRemove(rideData),
    });
    await updateDoc(userRef, {
      orders: arrayUnion(updatedRide),
    });

    toast.success("Ride status updated");
  } catch (err) {
    console.error("Ride status update error:", err.message);
    toast.error("Failed to update ride status");
  }
};



  // 🧾 Update Payment Status
const updatePaymentStatus = async (rideId, paymentStatus) => {
  const rideRef = doc(db, "orders", rideId);
  const rideSnap = await getDoc(rideRef);

  if (!rideSnap.exists()) {
    toast.error("Ride not found.");
    return;
  }

  const rideData = rideSnap.data();
  const updatedRide = {
    ...rideData,
    paymentStatus,
  };

  const userRef = doc(db, "users", rideData.user.email);

  try {
    // Step 1: Update order document
    await updateDoc(rideRef, { paymentStatus });

    // Step 2: Update orders array in user document
    await updateDoc(userRef, {
      orders: arrayRemove(rideData),
    });
    await updateDoc(userRef, {
      orders: arrayUnion(updatedRide),
    });

    toast.success("Payment status updated");
  } catch (err) {
    console.error("Payment status update error:", err.message);
    toast.error("Failed to update payment status");
  }
};


  // ❌ Delete Ride
const deleteRide = async (rideId) => {
  try {
    const rideRef = doc(db, "orders", rideId);
    const rideSnap = await getDoc(rideRef);

    if (!rideSnap.exists()) {
      toast.error("Ride not found.");
      return;
    }

    const rideData = rideSnap.data();
    const userEmail = rideData.user?.email;

    if (!userEmail) {
      toast.error("User email not found in ride data.");
      return;
    }

    const userRef = doc(db, "users", userEmail);

    // Step 1: Remove this ride object from user's orders array
    await updateDoc(userRef, {
      orders: arrayRemove(rideData),
    });

    // Step 2: Delete the ride from orders collection
    await deleteDoc(rideRef);

    toast.success("Ride deleted successfully from orders and user history.");
  } catch (err) {
    console.error("Delete Ride Error:", err.message);
    toast.error("Failed to delete ride.");
  }
};

//fetch users
const fetchUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// ❌ Delete a user
const deleteUser = async (userId) => {
  await deleteDoc(doc(db, "users", userId));
  toast.success("User deleted successfully");
};






// 📥 Fetch Contact Messages
const fetchMessages = async () => {
  const snapshot = await getDocs(collection(db, "contacts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};



  return (
    <AdminContext.Provider
    value={{
        admin,
        setAdmin,
        AdminLogin,
         AdminLogout,
        fetchCars,
        addCar,
        updateCar,
        deleteCar,
        fetchRides,
        updateRideStatus,
        updatePaymentStatus,
        deleteRide,
         fetchUsers,    
         deleteUser,
           fetchMessages,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
