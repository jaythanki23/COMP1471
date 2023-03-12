package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Model.Tray;
import com.hospital.sterileService.Repository.TrayRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrayService implements TrayServiceInterface{
    private TrayRepository trayRepository;

    public TrayService(TrayRepository trayRepository) {
        this.trayRepository = trayRepository;
    }

    @Override
    public List<Tray> getAllTrays(Integer orderId) {
        return trayRepository.findByOrderId(orderId);
    }

    @Override
    public Tray setTray(Tray tray) {
        return trayRepository.save(tray);
    }

    @Override
    public String removeTray(Integer id) {
        trayRepository.deleteById(id);
        return "Tray has been removed";
    }
}
