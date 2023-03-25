package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.TrayConfiguration;

import java.util.List;

public interface TrayConfigurationServiceInterface {

    TrayConfiguration getTrayConfiguration(Integer id);

    TrayConfiguration createTrayConfiguration(TrayConfiguration trayConfiguration);

    String removeTrayConfiguration(Integer id);

    List<TrayConfiguration> getAllTrayConfiguration();
}
