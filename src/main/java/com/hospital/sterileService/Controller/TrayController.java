package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.Tray;
import com.hospital.sterileService.Service.TrayServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/order/tray")
public class TrayController {
    private TrayServiceInterface trayService;

    public TrayController(TrayServiceInterface trayService) {
        this.trayService = trayService;
    }

    @GetMapping("{id}")
    public ResponseEntity<List<Tray>> getAllTrays(@PathVariable("id") Integer orderId) {
        return new ResponseEntity<List<Tray>>(trayService.getAllTrays(orderId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Tray> setTray(@RequestBody Tray tray) {
        return new ResponseEntity<Tray>(trayService.setTray(tray), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeTray(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(trayService.removeTray(id), HttpStatus.OK);
    }

}
