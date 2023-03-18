package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.InstrumentCount;

public interface InstrumentCountServiceInterface {
    InstrumentCount getInstrumentCount(Integer id);

    InstrumentCount setInstrumentCount(InstrumentCount instrumentCount);

    String removeInstrumentCount(Integer id);
}
