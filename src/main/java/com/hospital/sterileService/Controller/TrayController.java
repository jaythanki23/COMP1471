package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.InstrumentCount;
import com.hospital.sterileService.Model.SterilisationProcess;
import com.hospital.sterileService.Model.Tray;
import com.hospital.sterileService.Service.InstrumentCountServiceInterface;
import com.hospital.sterileService.Service.SterilisationProcessServiceInterface;
import com.hospital.sterileService.Service.TrayServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/order/tray")
public class TrayController {
    private TrayServiceInterface trayService;
    private InstrumentCountServiceInterface instrumentCountService;
    private SterilisationProcessServiceInterface sterilisationProcessService;

    public TrayController(TrayServiceInterface trayService, InstrumentCountServiceInterface instrumentCountService, SterilisationProcessServiceInterface sterilisationProcessService) {
        this.trayService = trayService;
        this.instrumentCountService = instrumentCountService;
        this.sterilisationProcessService = sterilisationProcessService;
    }

    @GetMapping("{id}")
    public ResponseEntity<List<Tray>> getAllTrays(@PathVariable("id") Integer orderId) {
        return new ResponseEntity<List<Tray>>(trayService.getAllTrays(orderId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Tray> setTray(@RequestBody Tray tray) {
        Tray newTray = trayService.setTray(tray);

        List<InstrumentCount> instruments = instrumentCountService.getAllInstruments(newTray.getTrayConfiguration().getId());
        for(InstrumentCount instrument: instruments) {
            SterilisationProcess sterilisationProcess = new SterilisationProcess(LocalDate.now(), 1, false, newTray, instrument.getInstrumentType());
            sterilisationProcessService.setProcess(sterilisationProcess);
        }

        return new ResponseEntity<Tray>(newTray, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeTray(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(trayService.removeTray(id), HttpStatus.OK);
    }

}
