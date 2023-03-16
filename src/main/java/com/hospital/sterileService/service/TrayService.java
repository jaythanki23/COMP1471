package com.hospital.sterileService.service;

import com.hospital.sterileService.entity.TrayDTO;

import java.util.List;
import java.util.Optional;

public interface TrayService {
    TrayDTO createTray(TrayDTO trayDTO);
    List<TrayDTO> getAllTrays();
    Optional getTray(Long tray_id);
    TrayDTO deleteTray(Long tray_id);
    List<TrayDTO> getOrderTrays(Long order_id);
}
