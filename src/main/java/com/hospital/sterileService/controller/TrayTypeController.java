package com.hospital.sterileService.controller;

import com.hospital.sterileService.entity.TrayDTO;
import com.hospital.sterileService.entity.TrayTypeDTO;
import com.hospital.sterileService.service.TrayService;
import com.hospital.sterileService.service.TrayTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/trayType")
public class TrayTypeController {

    @Autowired
    TrayTypeService trayTypeService;

    @GetMapping("/")
    public ResponseEntity<List<TrayTypeDTO>> getAllTrayTypes(){
        try{
            List<TrayTypeDTO> trayTypeDTOList = trayTypeService.getAllTrayTypes();
            if (trayTypeDTOList.isEmpty() || trayTypeDTOList.size() == 0)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(trayTypeDTOList,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{tray_type_id}")
    public ResponseEntity<TrayTypeDTO> getTrayType(@PathVariable Long tray_type_id){
        try{
            Optional<TrayTypeDTO> trayTypeDTO = trayTypeService.getTrayType(tray_type_id);
            if (trayTypeDTO.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(trayTypeDTO.get(),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<TrayTypeDTO> createTrayType(@RequestBody TrayTypeDTO trayTypeDTO){
        try {
            return new ResponseEntity<>(trayTypeService.createTrayType(trayTypeDTO),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/")
    public ResponseEntity<TrayTypeDTO> updateTrayType(@RequestBody TrayTypeDTO trayTypeDTO){
        try {
            return new ResponseEntity<>(trayTypeService.createTrayType(trayTypeDTO),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{tray_type_id}")
    public ResponseEntity<TrayTypeDTO> deleteTrayType(@PathVariable Long tray_type_id){
        try{
            trayTypeService.deleteTrayType(tray_type_id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
