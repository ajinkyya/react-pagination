import { useState } from 'react';
import './App.css';
import Data from './Data.json';





function App() {
  const [currentPage,setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Data.slice(firstIndex,lastIndex);
  const nPage = Math.ceil(Data.length/recordPerPage);
  const numbers = [];
  for (let i = 1; i <= nPage; i++) {
    numbers.push(i);
  }
 
  function prePage()
  {
    if(currentPage !== 1)
    setCurrentPage(currentPage - 1)
  }
  function nextPage()
  {
    if(currentPage !== nPage)
    setCurrentPage(currentPage + 1)
  }
  function changePage(index)
  {
  
    setCurrentPage(index + 1)
  }
  return (
    <div className="App">
      <h1 className='text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'>Students</h1>
      <table className='table table-striped-columns'>
        <thead>
          <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Language</th>
          <th>Bio</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          
          {records.map((item)=>{return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.language}</td>
            <td>{item.bio}</td>
          </tr>
          )})}
         
        </tbody>
      </table>
      
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={prePage}>Previous</a></li>
          {numbers.map((item,index)=>{
            return(
              <li key= {index} className={(index+1 !== currentPage) ? "page-item" : "page-item active"}><a className="page-link" href="#" onClick={()=>changePage(index)}>{item}</a></li>
            )
          })}
          <li className="page-item"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
