package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.InstrumentType;

public interface InstrumentTypeServiceInterface {
    InstrumentType getInstrumentType(Integer id);

    InstrumentType setInstrumentType(InstrumentType instrumentType);

    String removeInstrumentType(Integer id);
}
