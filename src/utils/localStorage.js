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
export {getMarkedbooks, addBooksMarkAsRead,removeMarkedBook};
