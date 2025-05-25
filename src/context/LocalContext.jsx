import { createContext, useContext, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
  const [currentTFN, setCurrentTFN] = useState({ intlFormat: "", localFormat: "" });
  const [webinfo,setwebinfo] = useState({
    name: "The Sky",
    phone: " ",
    phonecall: "",
    address:"",
    email:"info@thsky.com"
});




const handleNavigation = () =>{
   window.location.href = '/cars';
}



  // Fetch TFN from Firebase
  useEffect(() => {
    const fetchTFN = async () => {
      try {
        const docRef = doc(db, "siteNumbers", "hcvatron.com");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setCurrentTFN({
            intlFormat: data.numberIntl || "",
            localFormat: data.numberLocal || "",
          });
        } else {
          console.log("No such document!");
          setCurrentTFN({ intlFormat: "", localFormat: "" });
        }
      } catch (error) {
        console.error("Error fetching TFN: ", error);
      }
    };

    fetchTFN();
  }, []);

  
  useEffect(() => {
    setwebinfo((prevWebinfo) => ({
      ...prevWebinfo,
      phone: currentTFN.localFormat,
      phonecall: currentTFN.intlFormat,
    }));
  }, [currentTFN]);

  return (
    <LocalContext.Provider value={{ webinfo, setwebinfo, handleNavigation }}>
      {children}
    </LocalContext.Provider>
  );
};

export const useLocalContext = () => useContext(LocalContext);
