package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.TrayConfiguration;
import com.hospital.sterileService.Repository.TrayConfigurationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrayConfigurationService implements TrayConfigurationServiceInterface {

    private TrayConfigurationRepository trayConfigurationRepository;

    public TrayConfigurationService(TrayConfigurationRepository trayConfigurationRepository) {
        this.trayConfigurationRepository = trayConfigurationRepository;
    }

    @Override
    public TrayConfiguration getTrayConfiguration(Integer id) {
        return trayConfigurationRepository.findById(id).orElse(null);
    }

    @Override
    public TrayConfiguration createTrayConfiguration(TrayConfiguration trayConfiguration) {
        return trayConfigurationRepository.save(trayConfiguration);
    }

    @Override
    public String removeTrayConfiguration(Integer id) {
        trayConfigurationRepository.deleteById(id);
        return "This configuration has been deleted";
    }

    @Override
    public List<TrayConfiguration> getAllTrayConfiguration() {
        return trayConfigurationRepository.findAll();
    }

}
