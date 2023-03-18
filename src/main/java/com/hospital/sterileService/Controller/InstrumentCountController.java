package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.InstrumentCount;
import com.hospital.sterileService.Service.InstrumentCountServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/instrument_count")
public class InstrumentCountController {
    private InstrumentCountServiceInterface instrumentCountService;

    public InstrumentCountController(InstrumentCountServiceInterface instrumentCountService) {
        this.instrumentCountService = instrumentCountService;
    }

    @GetMapping("{id}")
    public ResponseEntity<InstrumentCount> getInstrumentCount(@PathVariable("id") Integer id) {
        return new ResponseEntity<InstrumentCount>(instrumentCountService.getInstrumentCount(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<InstrumentCount> setInstrumentCount(@RequestBody InstrumentCount instrumentCount) {
        return new ResponseEntity<InstrumentCount>(instrumentCountService.setInstrumentCount(instrumentCount), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeInstrumentCount(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(instrumentCountService.removeInstrumentCount(id), HttpStatus.OK);
    }

}
