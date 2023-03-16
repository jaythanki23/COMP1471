package com.hospital.sterileService.service;

import com.hospital.sterileService.entity.TrayTypeDTO;

import java.util.List;
import java.util.Optional;

public interface TrayTypeService {
    TrayTypeDTO createTrayType(TrayTypeDTO trayTypeDTO);
    List<TrayTypeDTO> getAllTrayTypes();
    Optional getTrayType(Long tray_type_id);
    TrayTypeDTO deleteTrayType(Long tray_type_id);
}
