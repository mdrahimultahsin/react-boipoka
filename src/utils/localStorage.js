import toast from "react-hot-toast";

const getMarkedbooks = () => {
  const storedBook = localStorage.getItem("readList");
  return storedBook ? JSON.parse(storedBook) : [];
};

const addBooksMarkAsRead = (id) => {
    const storedBook = getMarkedbooks();
    
  if (storedBook.includes(id)) {
    toast.error('Oops! You already marked this one as read. 😉.',{
      style: {
        background: '#131313',
        color:"white"
      },
    });

  } else {
    storedBook.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBook));
    toast.success('Added to the Readlist!!!',{
      style: {
        background: '#23BE0A',
        color:"white"
      },
    });
}
};

const removeMarkedBook = id=>{
  const storedBook = getMarkedbooks();
  const remainingBook = storedBook.filter(bookId=>bookId!==id);
  localStorage.setItem("readList", JSON.stringify(remainingBook));
  toast.success("Successfully removed from Readlist")
}
const getWishlistedBooks = () => {
  const storedBook = localStorage.getItem("wishlist");
  return storedBook ? JSON.parse(storedBook) : [];
};

const addToWishlist = (id) => {
    const storedBook = getWishlistedBooks();
    
  if (storedBook.includes(id)) {
    toast.error('Oops! You already added this in the Wishlist. 😉.',{
      style: {
        background: '#131313',
        color:"white"
      },
    });

  } else {
    storedBook.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedBook));
    toast.success('Added to the Readlist!!!',{
      style: {
        background: '#23BE0A',
        color:"white"
      },
    });
}
};

const removeFromWishlist = id=>{
  const storedBook = getWishlistedBooks();
  const remainingBook = storedBook.filter(bookId=>bookId!==id);
  localStorage.setItem("wishlist", JSON.stringify(remainingBook));
  toast.success("Successfully removed from wishlist")
}
export {getMarkedbooks, addBooksMarkAsRead,removeMarkedBook,getWishlistedBooks,addToWishlist,removeFromWishlist};
