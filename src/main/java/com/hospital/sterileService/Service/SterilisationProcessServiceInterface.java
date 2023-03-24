package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.SterilisationProcess;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface SterilisationProcessServiceInterface {

    SterilisationProcess getProcess(Integer processId);

    List<SterilisationProcess> getAllProcessesByTrayId(Integer trayId);

    SterilisationProcess setProcess(SterilisationProcess process);

    String removeProcess(Integer id);

    String updateStatus(Integer id);

    String updateDate(Integer id, LocalDate date);
}