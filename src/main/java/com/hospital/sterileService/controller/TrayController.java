package com.hospital.sterileService.controller;

import com.hospital.sterileService.entity.TrayDTO;
import com.hospital.sterileService.service.TrayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tray")
public class TrayController {

    @Autowired
    TrayService trayService;

    @GetMapping("/")
    public ResponseEntity<List<TrayDTO>> getAllTrays(){
        try{
            List<TrayDTO> trayDTOList = trayService.getAllTrays();
            if (trayDTOList.isEmpty() || trayDTOList.size() == 0)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(trayDTOList,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{tray_id}")
    public ResponseEntity<TrayDTO> getOrder(@PathVariable Long tray_id){
        try{
            Optional<TrayDTO> trayDTO = trayService.getTray(tray_id);
            if (trayDTO.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(trayDTO.get(),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getOrderTrays/{order_id}")
    public ResponseEntity<List> getOrderTrays(@PathVariable Long order_id){
        try{
            List<TrayDTO> trayDTOList = trayService.getOrderTrays(order_id);
            return new ResponseEntity<>(trayDTOList,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<TrayDTO> createOrder(@RequestBody TrayDTO trayDTO){
        try {
            return new ResponseEntity<>(trayService.createTray(trayDTO),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/")
    public ResponseEntity<TrayDTO> updateOrder(@RequestBody TrayDTO trayDTO){
        try {
            return new ResponseEntity<>(trayService.createTray(trayDTO),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{tray_id}")
    public ResponseEntity<TrayDTO> deleteOrder(@PathVariable Long tray_id){
        try{
            trayService.deleteTray(tray_id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}