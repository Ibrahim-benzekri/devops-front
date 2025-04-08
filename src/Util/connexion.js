import { useState, useEffect } from "react";
import { useLocalState } from "./UseLocalStorage";

function useConnection() {
  const [jwt, setJwt] = useLocalState("", "token");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (jwt && jwt !== "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: jwt,
          password: "",
        }),
      };

      fetch("http://localhost:8080/api/v1/auth/valide", requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
        })
        .then((isItValid) => {
          setIsValid(isItValid);
        })
        .catch((err) => {
          //alert(err.message);
        });
    } else {
      setIsValid(false);
    }
  }, [jwt]); 

  return isValid;
}

export { useConnection };