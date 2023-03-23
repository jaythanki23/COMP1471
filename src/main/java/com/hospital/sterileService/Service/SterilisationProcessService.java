package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationProcess;
import com.hospital.sterileService.Repository.SterilisationProcessRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SterilisationProcessService implements SterilisationProcessServiceInterface {

    private SterilisationProcessRepository sterilisationProcessRepository;

    public SterilisationProcessService(SterilisationProcessRepository sterilisationProcessRepository) {
        this.sterilisationProcessRepository = sterilisationProcessRepository;
    }

    @Override
    public SterilisationProcess getProcess(Integer processId) {
        return sterilisationProcessRepository.findById(processId).orElse(null);
    }

    @Override
    public List<SterilisationProcess> getAllProcessesByTrayId(Integer trayId) {
        return sterilisationProcessRepository.findByTrayId(trayId);
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

    @Override
    public String updateStatus(Integer id) {
        if(sterilisationProcessRepository.findById(id).isPresent()) {
            SterilisationProcess sterilisationProcess = sterilisationProcessRepository.findById(id).get();
            sterilisationProcess.setDone(true);
            sterilisationProcessRepository.save(sterilisationProcess);

            return "Process has been completed";
        } else {
            return "Process not found";
        }
    }

    @Override
    public String updateDate(Integer id, Date date) {
        if(sterilisationProcessRepository.findById(id).isPresent()) {
            SterilisationProcess sterilisationProcess = sterilisationProcessRepository.findById(id).get();
            sterilisationProcess.setDate(date);
            sterilisationProcessRepository.save(sterilisationProcess);

            return "Date has been updated";
        } else {
            return "Process not found";
        }
    }
}