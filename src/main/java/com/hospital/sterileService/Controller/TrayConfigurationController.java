package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.TrayConfiguration;

import com.hospital.sterileService.Service.TrayConfigurationServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/configuration")
public class TrayConfigurationController {
    private TrayConfigurationServiceInterface trayConfigurationService;

    public TrayConfigurationController(TrayConfigurationServiceInterface trayConfigurationService) {
        this.trayConfigurationService = trayConfigurationService;
    }

    @GetMapping("{id}")
    public ResponseEntity<TrayConfiguration> getTrayConfiguration(@PathVariable("id") Integer id) {
        return new ResponseEntity<TrayConfiguration>(trayConfigurationService.getTrayConfiguration(id), HttpStatus.OK);
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
