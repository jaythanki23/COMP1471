package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationStep;
import com.hospital.sterileService.Repository.SterilisationStepRepository;
import org.springframework.stereotype.Service;

@Service
public class SterilisationStepService implements SterilisationStepServiceInterface {
    private SterilisationStepRepository sterilisationStepRepository;

    public SterilisationStepService(SterilisationStepRepository sterilisationStepRepository) {
        this.sterilisationStepRepository = sterilisationStepRepository;
    }

    @Override
    public SterilisationStep getStep(Integer id) {
        return sterilisationStepRepository.findById(id).orElse(null);
    }

    @Override
    public SterilisationStep createStep(SterilisationStep sterilisationStep) {
        return sterilisationStepRepository.save(sterilisationStep);
    }

    @Override
    public String removeStep(Integer id) {
        sterilisationStepRepository.deleteById(id);
        return "This step has been removed";
    }
}
