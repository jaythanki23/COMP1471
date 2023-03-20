package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.SterilisationProcess;
import com.hospital.sterileService.Service.SterilisationProcessInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/sterilisation_process/")
public class SterilisationProcessController {

    private SterilisationProcessInterface sterilisationProcessInterface;

    public SterilisationProcessController(SterilisationProcessInterface sterilisationProcessInterface) {
        this.sterilisationProcessInterface = sterilisationProcessInterface;
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional> getProcess(@PathVariable("id") Integer id) {
        return new ResponseEntity<Optional>(sterilisationProcessInterface.getProcess(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SterilisationProcess> setOperation(@RequestBody SterilisationProcess process) {
        return new ResponseEntity<SterilisationProcess>(sterilisationProcessInterface.setProcess(process), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeOperation(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(sterilisationProcessInterface.removeProcess(id), HttpStatus.OK);
    }
}