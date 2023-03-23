package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.Operation;
import com.hospital.sterileService.Service.OperationServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/operation/")
public class OperationController {

    private final OperationServiceInterface operationService;

    public OperationController(OperationServiceInterface operationService) {
        this.operationService = operationService;
    }

    @GetMapping("{id}")
    public ResponseEntity<Operation> getOperation(@PathVariable("id") Integer id) {
        return new ResponseEntity<Operation>(operationService.getOperation(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Operation> setOperation(@RequestBody Operation operation) {
        return new ResponseEntity<Operation>(operationService.setOperation(operation), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeOperation(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(operationService.removeOperation(id), HttpStatus.OK);
    }

}