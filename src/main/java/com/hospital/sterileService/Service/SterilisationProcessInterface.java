package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationProcess;

import java.util.Optional;

public interface SterilisationProcessInterface {

    Optional<SterilisationProcess> getProcess(Integer processId);

    SterilisationProcess setProcess(SterilisationProcess process);

    String removeProcess(Integer id);
}