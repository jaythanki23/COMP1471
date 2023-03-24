package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.SterilisationProcess;
import com.hospital.sterileService.Service.SterilisationProcessServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/sterilisation_process")
public class SterilisationProcessController {

    private SterilisationProcessServiceInterface sterilisationProcessService;

    public SterilisationProcessController(SterilisationProcessServiceInterface sterilisationProcessService) {
        this.sterilisationProcessService = sterilisationProcessService;
    }

    @GetMapping("{id}")
    public ResponseEntity<SterilisationProcess> getProcess(@PathVariable("id") Integer id) {
        return new ResponseEntity<SterilisationProcess>(sterilisationProcessService.getProcess(id), HttpStatus.OK);
    }

    @GetMapping("/tray/{id}")
    public ResponseEntity<List<SterilisationProcess>> getAllProcessesByTrayId(@PathVariable("id") Integer trayId) {
        return new ResponseEntity<List<SterilisationProcess>>(sterilisationProcessService.getAllProcessesByTrayId(trayId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SterilisationProcess> setOperation(@RequestBody SterilisationProcess process) {
        return new ResponseEntity<SterilisationProcess>(sterilisationProcessService.setProcess(process), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeOperation(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(sterilisationProcessService.removeProcess(id), HttpStatus.OK);
    }

    @PutMapping("/status/{id}")
    public ResponseEntity<String> updateStatus(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(sterilisationProcessService.updateStatus(id), HttpStatus.ACCEPTED);
    }

    @PutMapping("/date/{id}")
    public ResponseEntity<String> updateDate(@PathVariable("id") Integer id, @RequestParam("date") String dateString){
        LocalDate date = LocalDate.parse(dateString.replace(" ","-").substring(1, dateString.length() - 1), DateTimeFormatter.ISO_OFFSET_DATE_TIME);
        return new ResponseEntity<String>(sterilisationProcessService.updateDate(id, date), HttpStatus.ACCEPTED);
    }
}