import {createBrowserRouter} from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetails from "../Components/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true, Component: Home,
        hydrateFallbackElement:<span className="loading loading-spinner loading-xl block mx-auto"></span>,
        loader:()=>fetch('../booksData.json'),
      },
      {
        path:"/listed-books",
        loader:()=>fetch("../booksData.json"),
        hydrateFallbackElement:<span className="loading loading-spinner loading-xl block mx-auto"></span>,
        Component:ListedBooks,
      },
      {
        path:"/bookDetails/:bookId",
        loader:()=>fetch("../booksData.json"),
        hydrateFallbackElement:<span className="loading loading-spinner loading-xl block mx-auto"></span>,
        Component:BookDetails,
      },
      {
        path:"pages-to-read",
        loader:()=>fetch("../booksData.json"),
        hydrateFallbackElement:<span className="loading loading-spinner loading-xl  block mx-auto"></span>,
        Component:PagesToRead,
      },
    ],
  },
]);

export default router;
