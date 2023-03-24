package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationStep;

import java.util.List;

public interface SterilisationStepServiceInterface {

    List<SterilisationStep> getAllSteps();

    SterilisationStep getStep(Integer id);

    SterilisationStep createStep(SterilisationStep sterilisationStep);

    String removeStep(Integer id);
}
