import './App.scss';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home"
import Nextpage from './pages/nextpage/nextpage';


function App() {

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nextpage" element={<Nextpage />} />
          </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;


// comment out because api cors issues 

// import Close from "../src/assets/icons/close.png";
// import React, { useState } from "react";
// import axios from "axios";
// import "./App.scss";
// function EmployeeForm() {
//   const [isReviewed, setIsReviewed] = useState(false);
//   const [formValues, setFormValues] = useState({
//     text: "",
//     comments: "",
//   });
//   const buttonTextValue = isReviewed ? "Submit" : "Review";
//   const callAuthorApi = async (formData) => {
//     try {
//       const response = await axios.post(
//         "https://service-author-intentions-model-zikioiqtra-uk.a.run.app/score",
//         {
//           body: {
//             invocations: [
//               {
//                 id: "1",
//                 arguments: [
//                   {
//                     name: "documents",
//                     value: {
//                       date: formData.date,
//                       text: formData.text,
//                       id: formData.id,
//                       lang: "en",
//                     },
//                   },
//                 ],
//               },
//             ],
//           },
//         },
//         {
//           headers: {
//             Authorization:
//               "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjbGllbnQiLCJhdWRpdFRyYWNraW5nSWQiOiJmOTJlYmMxMC1kYmM3LTQxMGItYjFjZC01MGQ4ZWJmNWZjMGIiLCJnd19pc3MiOiJzZXJ2aWNlLWRhdGFzY2llbmNlLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL2xvZ2luLWRldi51bHRpcHJvLmNvbS92Mi9vYXV0aDIvdXNfaW50ZXJuYWwiLCJ0b2tlbk5hbWUiOiJhY2Nlc3NfdG9rZW4iLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiYXV0aEdyYW50SWQiOiI0MGQzMDQyNS05NTFiLTQwNmYtOGQyZC1hYzliODJmYWVjMjQiLCJhdWQiOiJjbGllbnQiLCJnd19pYXQiOjE2ODI1MTg3NTQsIm5iZiI6MTY4MjUxODMwNiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJyZWFsbSI6Ii91c19pbnRlcm5hbCIsImd3X3JlcXVlc3RfaWQiOiJkY2UwM2E0Mi02NGE4LTRhODUtOTU1Mi0xY2YxMjQ1YThkMTAiLCJleHAiOjE2ODM4MTQ3NTQsImlhdCI6MTY4MjUxODMwNiwiZXhwaXJlc19pbiI6MTI5NjAwMCwianRpIjoiYmRjZGZlMWYtM2IwOC00MGEzLWJmMGUtZWZmODdhY2Q1MzQ5In0.lEmiBVfwq_srAhkua-2WpxHip7zhxZ9h9PfYhu-Mgu6YSUHpntTBXygHXTtShC3BT_zSI4pSOjAvXVz9gaceMAYbYDEPLy4i9iETUVE1-SOKyAkpIPr193Zlx_cr152mqVCGXibdU4LiG6Ij3m39fsRRAiFQkaAwKzo-tyS_kspq-P4EFAuT89CDPJ5a6ZCw3WhfPhYjnEX0jv5eij5ipz65zTK81atUbHjIKrz8fcSTuYipLnex5Q0jPsuJL4c4VMRPrIO6J_AhDzmaOz31rmDwQpVF4rQQWkYPUfp0L8DvtmuOjVtopXQX1rJ4C9TvxolSG0suiVnb7AhOJLmLvA",
//           },
//         }
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };
//   const callSubmitApi = async (formData) => {};
//   const handleReviewClick = async (event) => {
//     event.preventDefault();
//     const result = await callAuthorApi(formValues);
//     const topSentiments = result.body.results.map((result) => {
//       const scores = result.score;
//       const categories = Object.keys(scores).map((category) => ({
//         name: category,
//         score: scores[category].score,
//       }));
//       const topCategories = categories
//         .sort((a, b) => b.score - a.score)
//         .slice(0, 3);
//       return {
//         id: result.id,
//         topCategories: topCategories,
//       };
//     });
//     const closestTo1 = topSentiments.map((sentiment) => ({
//       id: sentiment.id,
//       topCategories: sentiment.topCategories.filter(
//         (category) => category.score > 0.5 && category.score < 1
//       ),
//     }));
//     setIsReviewed(true);
//   };
//   const handleSubmitClick = async (event) => {
//     event.preventDefault();
//     const result = await callSubmitApi(formValues);
//     window.location.href = "/another-page";
//   };
//   const handleClick = isReviewed ? handleSubmitClick : handleReviewClick;
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleClick(event);
//   };
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <textarea
//           className="input"
//           name="comments"
//           value={formValues.comments}
//           onChange={handleInputChange}
//         />
//       </label>
//       <button className="button" type="submit">
//         {buttonTextValue}
//       </button>
//     </form>
//   );
// }
// function App() {
//   return (
//     <>
//       <div className="container">
//         <img src={Close} alt=" close x icon" className="icon" />
//         <p className="title">Tell us what’s happening?</p>
//         <EmployeeForm />
//       </div>
//     </>
//   );
// }
// export default App;