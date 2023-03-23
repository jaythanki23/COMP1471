package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.SterilisationProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SterilisationProcessRepository extends JpaRepository<SterilisationProcess, Integer> {
    List<SterilisationProcess> findByTrayId(Integer trayId);
}