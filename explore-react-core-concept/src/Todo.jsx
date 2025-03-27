export default function Todo({ task, isDone }) {
  // conditional rendering option 1
  //   if (isDone) {
  //     return (
  //       <>
  //         <li>Finished: {task}</li>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <li>Work On: {task}</li>
  //       </>
  //     );
  //   }

  // ** conditional rendering option 2 **
  //   if (isDone) {
  //     return (
  //       <>
  //         <li>Finished: {task}</li>
  //       </>
  //     );
  //   }
  //   return <li>Work On: {task}</li>;

  // ** conditional rendering option 3 **
//   return (
//     <>
//       <li>
//         {isDone ? "Finished" : "Work On"} : {task}
//       </li>
//     </>
//   );

  //   ** conditional rendering option 4 **
  //   return (
  //     <>
  //         <li>{task} {isDone && ": Done"}</li>
  //     </>
  //   )

  // ** conditional rendering option 5 **
  //   return (
  //     <>
  //       <li>
  //         {task} {isDone || ": Not Finished"}
  //       </li>
  //     </>
  //   );

//
    let listitem;
    if(isDone){
        listitem = <li>Finished : {task}</li>
    }
    else{
        listitem = <li>Work On: {task}</li>
    }
    return listitem
}
