import React, { useContext, Component } from "react";
import Name from "./Name";
import Value from "./Value";
import { UserContext, UserContextProvider } from "./UserContext";

export default function App() {
     return (
          <div>
               <UserContextProvider>
                    <AppInternal></AppInternal>
               </UserContextProvider>
               <ErrorBoundary fallback={<h1>Oops error occured</h1>}>
                    <h1>hi</h1>
                    <Buggy></Buggy>
               </ErrorBoundary>
          </div>
     );
}

function AppInternal() {
     const { handleToggle } = useContext(UserContext);
     return (
          <>
               <Name></Name>
               <Value></Value>
               <button onClick={handleToggle}>Toggle</button>
          </>
     );
}

function Buggy() {
     throw new Error("Something went wrong"); // comment this to fix the error
     return <h1>Buggy</h1>;
}

class ErrorBoundary extends Component {
     state = { hasError: false };

     static getDerivedStateFromError(err) {
          return { hasError: true };
     }

     render() {
          if (this.state.hasError) {
               return this.props.fallback;
          }
          return this.props.children;
     }
}
