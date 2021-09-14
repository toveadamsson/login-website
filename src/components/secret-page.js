import React from "react"

function SecretPage() {

    // const logout = async (token) => {
    //     try {
    //       await AsyncStorage.removeItem("token");
    //       setIsLoggedIn(false);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     // const temp = seeAll.removeItem((el)=> )
    //   };
    
    return (
        <div className="secret-container">
            <h1>You have successfully accessed the secret page!</h1>
            <button>LOG OUT</button>
        </div>
    )
}

export default SecretPage;