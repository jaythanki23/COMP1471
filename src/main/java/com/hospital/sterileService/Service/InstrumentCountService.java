package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.InstrumentCount;
import com.hospital.sterileService.Model.TrayConfiguration;
import com.hospital.sterileService.Repository.InstrumentCountRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentCountService implements InstrumentCountServiceInterface {
    private InstrumentCountRepository instrumentCountRepository;

    public InstrumentCountService(InstrumentCountRepository instrumentCountRepository) {
        this.instrumentCountRepository = instrumentCountRepository;
    }

    @Override
    public List<InstrumentCount> getAllInstruments(Integer trayConfigId) {
        return instrumentCountRepository.findByTrayConfigurationId(trayConfigId);
    }

    @Override
    public InstrumentCount getInstrumentCount(Integer id) {
        return instrumentCountRepository.findById(id).orElse(null);
    }

    @Override
    public InstrumentCount setInstrumentCount(InstrumentCount instrumentCount) {
        return instrumentCountRepository.save(instrumentCount);
    }

    @Override
    public String removeInstrumentCount(Integer id) {
        instrumentCountRepository.deleteById(id);
        return "This instrument count has been removed";
    }
}
