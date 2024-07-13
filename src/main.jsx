import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import ErrorPage from './Error'
import Contact from './Contacts'
import { getContactLoader, getContactsLoader } from './loaders/contactLoader'
import { createContactAction, deleteContactAction, editContactAction, updateContactFavourite } from './actions/contactsAction'
import EditContact from './EditContact'
import Index from './Index'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    loader:getContactsLoader,
    action:createContactAction,
    children:[
      {
        index:true,
        element:<Index/>

      },

      {
        path:"/contacts/:contactId",
        element:<Contact/>,
        loader:getContactLoader,
        action:updateContactFavourite,
       
      },
      {
        path:"/contacts/:contactId/edit",
        element:<EditContact/>,
        loader:getContactLoader,
        action:editContactAction,
       
      },
      {
        path:"/contacts/:contactId/destroy",
        action:deleteContactAction,
        errorElement:(
          <div>
            Oops! There was an error deleting the contact!
          </div>
        )
       
      }

    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
