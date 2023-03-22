package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.InstrumentCount;
import com.hospital.sterileService.Model.TrayConfiguration;

import java.util.List;

public interface InstrumentCountServiceInterface {

    List<InstrumentCount> getAllInstruments(Integer trayConfigId);

    InstrumentCount getInstrumentCount(Integer id);

    InstrumentCount setInstrumentCount(InstrumentCount instrumentCount);

    String removeInstrumentCount(Integer id);
}
