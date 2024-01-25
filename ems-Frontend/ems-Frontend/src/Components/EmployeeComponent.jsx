import React, { useState, useEffect } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router';
import './test.css';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          const employeeData = response.data;
          setFirstName(employeeData.firstName || '');
          setLastName(employeeData.lastName || '');
          setEmail(employeeData.email || '');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  function handleFirstName(e) {
    setFirstName(e.target.value);
    setFirstNameError('');
  }

  function handleLastName(e) {
    setLastName(e.target.value);
    setLastNameError('');
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    setEmailError('');
  }

  const validateForm = () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z]+$/;

    if (!firstName.trim()) {
      setFirstNameError('First Name is required');
      isValid = false;
    } else if (!nameRegex.test(firstName)) {
      setFirstNameError('Enter a valid first name ');
      isValid = false;
    }

    if (!lastName.trim()) {
      setLastNameError('Last Name is required');
      isValid = false;
    } else if (!nameRegex.test(lastName)) {
      setLastNameError('Enter a valid last name');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    }

    return isValid;
  };

  const navigator = useNavigate();

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const employee = { firstName, lastName, email };

    try {
      if (id) {
        await updateEmployee(id, employee);
      } else {
        await createEmployee(employee);
      }

      navigator('/employees');
    } catch (error) {
      console.error('Error saving/updating employee:', error);
    }
  };

  function pageTitle() {
    if (id) {
      return <h3 className="text-center"> Update Employee</h3>;
    } else {
      return <h3 className="text-center"> Add Employee</h3>;
    }
  }

  return (
    <div className="background">
      <form>
        {pageTitle()}

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
            required
            placeholder="Enter First employee"
          />
          {firstNameError && <p className="error">{firstNameError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastName}
            required
            placeholder="Enter Last employee"
          />
          {lastNameError && <p className="error">{lastNameError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
            placeholder="Enter Email"
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <button onClick={saveOrUpdateEmployee} style={{ marginTop: '25px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeComponent;
