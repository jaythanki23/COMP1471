package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Operation;

import java.util.Optional;

public interface OperationServiceInterface {

    Optional<Operation> getOperation(Integer operationId);

    Operation setOperation(Operation operation);

    String removeOperation(Integer id);
}