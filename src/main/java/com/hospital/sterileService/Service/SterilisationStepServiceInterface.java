package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationStep;

public interface SterilisationStepServiceInterface {

    SterilisationStep getStep(Integer id);

    SterilisationStep createStep(SterilisationStep sterilisationStep);

    String removeStep(Integer id);
}
