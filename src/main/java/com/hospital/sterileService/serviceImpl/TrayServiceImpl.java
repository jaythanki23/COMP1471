package com.hospital.sterileService.serviceImpl;

import com.hospital.sterileService.entity.TrayDTO;
import com.hospital.sterileService.repository.TrayRepository;
import com.hospital.sterileService.service.TrayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrayServiceImpl implements TrayService {

    @Autowired
    TrayRepository trayRepository;

    @Override
    public TrayDTO createTray(TrayDTO trayDTO) {
        return trayRepository.save(trayDTO);
    }

    @Override
    public List<TrayDTO> getAllTrays() {
        return trayRepository.findAll();
    }

    @Override
    public Optional getTray(Long tray_id) {
        return trayRepository.findById(tray_id);
    }

    @Override
    public TrayDTO deleteTray(Long tray_id) {
        Optional<TrayDTO> trayDTO = trayRepository.findById(tray_id);
        trayDTO.ifPresent(dto -> trayRepository.delete(dto));
        return trayDTO.get();
    }

    @Override
    public List<TrayDTO> getOrderTrays(Long order_id) {
        List<TrayDTO> trayDTOList = trayRepository.findByOrderId(order_id);
        return trayDTOList;
    }
}