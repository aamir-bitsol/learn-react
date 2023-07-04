import { createContext, useState } from "react";

export const UserContext = createContext({
     handleToggle: null,
     user: {
          name: null,
          value: null,
     },
});

const obj1 = {
     name: "Obj1",
     value: "value1",
};
const obj2 = {
     name: "Obj2",
     value: "value2",
};

export function UserContextProvider({ children }) {
     const [user, setToggle] = useState(obj1);

     async function handleToggle() {
          const data = await fetch("https://type.fit/api/quotes");
          const final_data = await data.json();
          const index = Math.random() * 100;
          const quote = final_data[Math.floor(index)];
          if (user.name === "Obj1") {
               setToggle({ ...obj2, value: quote.text });
          } else {
               setToggle({ ...obj1, value: quote.text });
          }
     }

     return (
          <>
               <UserContext.Provider value={{ user, handleToggle }}>
                    {children}
               </UserContext.Provider>
          </>
     );
}
