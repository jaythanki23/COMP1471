package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.InstrumentType;
import com.hospital.sterileService.Service.InstrumentTypeServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/instrument_type")
public class InstrumentTypeController {
    private InstrumentTypeServiceInterface instrumentTypeService;

    public InstrumentTypeController(InstrumentTypeServiceInterface instrumentTypeService) {
        this.instrumentTypeService = instrumentTypeService;
    }

    @GetMapping("{id}")
    public ResponseEntity<InstrumentType> getInstrumentType(@PathVariable("id") Integer id) {
        return new ResponseEntity<InstrumentType>(instrumentTypeService.getInstrumentType(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<InstrumentType> setInstrumentType(@RequestBody InstrumentType instrumentType){
        return new ResponseEntity<InstrumentType>(instrumentTypeService.setInstrumentType(instrumentType), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeInstrumentType(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(instrumentTypeService.removeInstrumentType(id), HttpStatus.OK);
    }

}
