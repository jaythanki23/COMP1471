package com.hospital.sterileService.serviceImpl;

import com.hospital.sterileService.entity.TrayTypeDTO;
import com.hospital.sterileService.repository.TrayTypeRepository;
import com.hospital.sterileService.service.TrayTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrayTypeServiceImpl implements TrayTypeService {

    @Autowired
    TrayTypeRepository trayTypeRepository;

    @Override
    public TrayTypeDTO createTrayType(TrayTypeDTO trayTypeDTO) {
        return trayTypeRepository.save(trayTypeDTO);
    }

    @Override
    public List<TrayTypeDTO> getAllTrayTypes() {
        return trayTypeRepository.findAll();
    }

    @Override
    public Optional getTrayType(Long tray_type_id) {
        return trayTypeRepository.findById(tray_type_id);
    }

    @Override
    public TrayTypeDTO deleteTrayType(Long tray_type_id) {
        Optional<TrayTypeDTO> trayTypeDTO = trayTypeRepository.findById(tray_type_id);
        trayTypeDTO.ifPresent(dto -> trayTypeRepository.delete(dto));
        return trayTypeDTO.get();
    }
}
