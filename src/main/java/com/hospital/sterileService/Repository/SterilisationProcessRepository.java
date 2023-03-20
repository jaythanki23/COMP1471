package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.SterilisationProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SterilisationProcessRepository extends JpaRepository<SterilisationProcess, Integer> {
}