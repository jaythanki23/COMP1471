package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.InstrumentType;

import java.util.List;

public interface InstrumentTypeServiceInterface {
    InstrumentType getInstrumentType(Integer id);

    List<InstrumentType> getAllInstrumentType();

    InstrumentType setInstrumentType(InstrumentType instrumentType);

    String removeInstrumentType(Integer id);
}
