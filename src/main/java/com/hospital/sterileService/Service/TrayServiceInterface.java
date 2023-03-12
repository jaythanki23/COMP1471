package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Model.Tray;

import java.util.List;

public interface TrayServiceInterface {
    List<Tray> getAllTrays(Integer orderId);

    Tray setTray(Tray tray);

    String removeTray(Integer id);
}
