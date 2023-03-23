package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Operation;
import com.hospital.sterileService.Repository.OperationRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OperationService implements OperationServiceInterface{

    private final OperationRepository operationRepository;

    public OperationService(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    @Override
    public Operation getOperation(Integer id) {
        return operationRepository.findById(id).orElse(null);
    }

    @Override
    public Operation setOperation(Operation operation) {
        return this.operationRepository.save(operation);
    }

    @Override
    public String removeOperation(Integer id) {
        this.operationRepository.deleteById(id);
        return "Deletion of operation Success : "+ id;
    }
}