package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Operation;

import java.util.Optional;

public interface OperationServiceInterface {

    Operation getOperation(Integer operationId);

    Operation setOperation(Operation operation);

    String removeOperation(Integer id);
}