package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.SterilisationStep;
import com.hospital.sterileService.Service.SterilisationStepServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/step")
public class SterilisationStepController {
    private SterilisationStepServiceInterface sterilisationStepService;

    public SterilisationStepController(SterilisationStepServiceInterface sterilisationStepService) {
        this.sterilisationStepService = sterilisationStepService;
    }

    @GetMapping("{id}")
    public ResponseEntity<SterilisationStep> getStep(@PathVariable("id") Integer id) {
        return new ResponseEntity<SterilisationStep>(sterilisationStepService.getStep(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<SterilisationStep> createStep(@RequestBody SterilisationStep sterilisationStep) {
        return new ResponseEntity<SterilisationStep>(sterilisationStepService.createStep(sterilisationStep), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeStep(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(sterilisationStepService.removeStep(id), HttpStatus.OK);
    }
}
