package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.InstrumentCount;
import com.hospital.sterileService.Model.TrayConfiguration;

import com.hospital.sterileService.Service.InstrumentCountServiceInterface;
import com.hospital.sterileService.Service.TrayConfigurationServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/configuration")
public class TrayConfigurationController {
    private TrayConfigurationServiceInterface trayConfigurationService;
    private InstrumentCountServiceInterface instrumentCountService;

    public TrayConfigurationController(TrayConfigurationServiceInterface trayConfigurationService, InstrumentCountServiceInterface instrumentCountService) {
        this.trayConfigurationService = trayConfigurationService;
        this.instrumentCountService = instrumentCountService;
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getTrayConfiguration(@PathVariable("id") Integer id) {
        Map<String, Object> map = new HashMap<String, Object>();

        TrayConfiguration trayConfiguration = trayConfigurationService.getTrayConfiguration(id);

        map.put("id", trayConfiguration.getId());
        map.put("trayName", trayConfiguration.getTrayName());

        List<InstrumentCount> instruments = instrumentCountService.getAllInstruments(trayConfiguration.getId());

        map.put("instruments", instruments);

        return new ResponseEntity<Object>(map, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<TrayConfiguration>> getAllTrayConfigurations(){
        return new ResponseEntity<List<TrayConfiguration>>(trayConfigurationService.getAllTrayConfiguration(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<TrayConfiguration> createTrayConfiguration(@RequestBody TrayConfiguration trayConfiguration) {
        return new ResponseEntity<TrayConfiguration>(trayConfigurationService.createTrayConfiguration(trayConfiguration), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTrayConfiguration(@PathVariable("id") Integer id) {
       return new ResponseEntity<String>(trayConfigurationService.removeTrayConfiguration(id), HttpStatus.OK);
    }
}
