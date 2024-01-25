package net.javaguides.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import mapper.EmployeeMapper;
import net.javaguides.emsbackend.dto.EmployeeDto;
import net.javaguides.emsbackend.entity.Employee;
import net.javaguides.emsbackend.exception.ResourceNotFoundException;
import net.javaguides.emsbackend.repository.EmployeeRepository;
import net.javaguides.emsbackend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee EmployeeSaved = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(EmployeeSaved);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
      Employee employee =  employeeRepository.findById(employeeId)
              .orElseThrow(()->new ResourceNotFoundException("Employee does not exist by this id: "+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee=  employeeRepository.findById(employeeId).orElseThrow(
                  () -> new ResourceNotFoundException("Employee does not exist in for the given id:" +employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj= employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist for the given id:" + employeeId));

        employeeRepository.deleteById(employeeId);
    }



}
