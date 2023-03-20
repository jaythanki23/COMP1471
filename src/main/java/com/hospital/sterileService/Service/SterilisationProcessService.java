package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationProcess;
import com.hospital.sterileService.Repository.SterilisationProcessRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SterilisationProcessService implements SterilisationProcessInterface{

    private SterilisationProcessRepository sterilisationProcessRepository;

    public SterilisationProcessService(SterilisationProcessRepository sterilisationProcessRepository) {
        this.sterilisationProcessRepository = sterilisationProcessRepository;
    }

    @Override
    public Optional<SterilisationProcess> getProcess(Integer processId) {
        return this.sterilisationProcessRepository.findById(processId);
    }

    @Override
    public SterilisationProcess setProcess(SterilisationProcess process) {
        return this.sterilisationProcessRepository.save(process);
    }

    @Override
    public String removeProcess(Integer id) {
        this.sterilisationProcessRepository.deleteById(id);
        return "Deletion of sterilisation process Success : "+ id;
    }
}