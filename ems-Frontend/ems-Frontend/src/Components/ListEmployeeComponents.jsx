import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const ListEmployeeComponents = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(8);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee(){
    listEmployees()
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((error) => {
      setError('Error fetching data');
      console.error(error);
    });
  }

  const totalPages = Math.ceil(employees.length / employeesPerPage);
  const pagesToShow = 5;
  let startPage, endPage;

  if (totalPages <= pagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const halfPagesToShow = Math.floor(pagesToShow / 2);
    if (currentPage <= halfPagesToShow) {
      startPage = 1;
      endPage = pagesToShow;
    } else if (currentPage + halfPagesToShow >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfPagesToShow;
      endPage = currentPage + halfPagesToShow;
    }
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function addNewEmployee() {
    navigator('/add-employee');
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id).then((response) => {
  getAllEmployee();
    }).catch(error =>{
      console.error(error);
    })
  }

  return (
    <div className='container' style={{ width: '100%' }}>
      <h2 className='text-center'>List Employee Components</h2>
      <button type="button" className="btn btn-primary mb-2" onClick={addNewEmployee} style={{ background: 'black', width: '20vh' }}>
        Add Employee
      </button>
      {error && <p className='text-danger'>{error}</p>}
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee firstName</th>
            <th>Employee LastName</th>
            <th>Employee email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.slice((currentPage - 1) * employeesPerPage, currentPage * employeesPerPage).map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)} style={{ background: 'black', color: 'white' ,width:'10vh'}}>
                  Update
                </button>
                <button className='btn btn-info' onClick={() => removeEmployee(employee.id)} style={{ background: 'black', color: 'white'  ,width:'10vh'}}>
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Pagination style={{ '--bs-pagination-active-bg': '#1a1f26', '--bs-pagination-active-border-color': '#1c1e21', '--bs-pagination-hover-color': '#0f1012', '--bs-pagination-color': '#272c33' }}>
        {startPage !== 1 && (
          <>
            <Pagination.Item onClick={() => paginate(1)}>1</Pagination.Item>
            {startPage > 2 && <Pagination.Ellipsis />}
          </>
        )}
        {[...Array(endPage - startPage + 1)].map((_, index) => (
          <Pagination.Item key={startPage + index} active={currentPage === startPage + index} onClick={() => paginate(startPage + index)}>
            {startPage + index}
          </Pagination.Item>
        ))}
        {endPage !== totalPages && (
          <>
            {totalPages - endPage > 1 && <Pagination.Ellipsis />}
            <Pagination.Item onClick={() => paginate(totalPages)}>{totalPages}</Pagination.Item>
          </>
        )}
      </Pagination>
    </div>
    </div>
  );
};

export default ListEmployeeComponents;
