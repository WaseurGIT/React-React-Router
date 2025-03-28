import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm/RefForm";
import ReUsableForm from "./components/ReUsableForm/ReUsableForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("sign up data", data);
  // };

  // const handleUpdateSubmit = (data) => {
  //   console.log("update data: ", data);
  // };

  return (
    <>
      <h1>React Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm
        handleSubmit={handleSignUpSubmit}
        formTitle={"Sign Up"}
        submitButtonText={"sign up"}
      ></ReUsableForm>
      <ReUsableForm
        handleSubmit={handleUpdateSubmit}
        formTitle={"profile update"}
        submitButtonText={"update profile"}
      ></ReUsableForm> */}

      {/* -------------------------- */}

      <Grandpa></Grandpa>
    </>
  );
}

export default App;
