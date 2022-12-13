import { app } from "./index.js";
import {
 ref, 
 set,
 getDatabase
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


(function(){
    const auth = getAuth(app);
    

    onAuthStateChanged(auth, (user)=>{
        if (user) {
            console.log(user)
        } else {
            console.log("not login")
        }
    });
    
    signInAnonymously(auth).then(()=>{
        console.log("sign in")
    }).catch(()=>{
        console.log("sign error")
    })

})()
