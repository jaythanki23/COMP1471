package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.InstrumentType;
import com.hospital.sterileService.Repository.InstrumentTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentTypeService implements InstrumentTypeServiceInterface {
    private InstrumentTypeRepository instrumentTypeRepository;

    public InstrumentTypeService(InstrumentTypeRepository instrumentTypeRepository) {
        this.instrumentTypeRepository = instrumentTypeRepository;
    }

    @Override
    public InstrumentType getInstrumentType(Integer id) {
        return instrumentTypeRepository.findById(id).orElse(null);
    }

    @Override
    public List<InstrumentType> getAllInstrumentType() {
        return instrumentTypeRepository.findAll();
    }

    @Override
    public InstrumentType setInstrumentType(InstrumentType instrumentType) {
        return instrumentTypeRepository.save(instrumentType);
    }

    @Override
    public String removeInstrumentType(Integer id) {
        instrumentTypeRepository.deleteById(id);
        return "This instrument has been removed";
    }
}
